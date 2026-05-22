import type { IIssueReport, IMessageTranslation } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

import { Css } from '../../../../utils/css';
import { DomUtility } from '../../../../utils/dom';
import { LevelType } from '../../../../constants/levelType';

type AnimationMeta = {
  name: string;
  reducedMotionOnly: boolean;
};

export class Animation extends AbstractRule {
  protected override selector = `
    *:not(
      applet,
      base,
      basefont,
      embed,
      frame,
      frameset,
      head,
      html,
      iframe,
      isindex,
      link,
      meta,
      noscript,
      object,
      param,
      script,
      source,
      style,
      template,
      title,
      track
    )
  `.trim();

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.animation,
    severity: $severity.high,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  private animationCache: Map<string, AnimationMeta> | undefined;

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private isAnimationRunning(style: CSSStyleDeclaration): boolean {
    if (
      style.animationPlayState === 'paused' ||
      style.animationIterationCount === '0' ||
      style.animationDuration === '0s' ||
      style.animationDuration === '0ms'
    ) {
      return false;
    }

    return true;
  }

  private collectKeyframes(
    rules: CSSRuleList,
    reducedMotionContext = false
  ): void {
    for (const rule of rules) {
      const type: number | undefined = rule.type;

      if (
        type === CSSRule.KEYFRAMES_RULE ||
        type === (CSSRule as any).WEBKIT_KEYFRAMES_RULE
      ) {
        const keyframes = rule as CSSKeyframesRule;

        this.animationCache!.set(keyframes.name, {
          name: keyframes.name,
          reducedMotionOnly: reducedMotionContext
        });

        continue;
      }

      // Media rules (prefers-reduced-motion)
      if (type === CSSRule.MEDIA_RULE) {
        const mediaRule = rule as CSSMediaRule;
        const isReducedMotion: boolean = reducedMotionContext || mediaRule.conditionText.includes('prefers-reduced-motion');

        this.collectKeyframes(mediaRule.cssRules, isReducedMotion);

        continue;
      }

      // Other grouping rules (@supports, @layer, etc.)
      if ('cssRules' in rule) {
        this.collectKeyframes(
          (rule as CSSGroupingRule).cssRules,
          reducedMotionContext
        );
      }
    }
  }

  private buildAnimationCache(): void {
    if (this.animationCache === undefined) {
      return;
    }

    this.animationCache.clear();

    for (const sheet of document.styleSheets) {
      try {
        this.collectKeyframes(sheet.cssRules);
      } catch {
        // Ignore cross-origin stylesheets
        continue;
      }
    }
  }

  private hasUsableAnimation(animationNames: string[]): boolean {
    const prefersReduced = this.prefersReducedMotion();

    return animationNames.some((name) => {
      const meta: AnimationMeta | undefined = this.animationCache!.get(name);

      if (meta === undefined) {
        return false;
      }

      // Ignore animations defined only for reduced-motion users
      if (meta.reducedMotionOnly && !prefersReduced) {
        return false;
      }

      return true;
    });
  }

  public validate(htmlElements: HTMLElement[]): void {
    const ONE_SECOND_IN_MILLISECONDS = 1000;

    this.animationCache = new Map();
    this.buildAnimationCache();

    for (const htmlElement of htmlElements) {
      const animationNameRaw: string | undefined = Css.getStyle(htmlElement, 'animation-name');

      if (
        animationNameRaw === undefined ||
        ['none', 'initial', 'inherit', 'unset'].includes(animationNameRaw)
      ) {
        continue;
      }

      const animationNames: string[] = animationNameRaw
        .split(',')
        .map((name: string): string => {
          return name.trim();
        });

      if (!this.hasUsableAnimation(animationNames)) {
        continue;
      }

      const computedStyle: CSSStyleDeclaration | undefined = Css.getComputedStyle(htmlElement);

      // Only flag animations that are actually running
      if (computedStyle === undefined || this.isAnimationRunning(computedStyle) === false) {
        continue;
      }

      let duration = computedStyle.animationDuration;
      const iterationCount = computedStyle.animationIterationCount;

      if (duration.endsWith('ms')) {
        duration = String(
          Number(duration.replace('ms', '')) / ONE_SECOND_IN_MILLISECONDS
        );
      }

      const durationSeconds = Number(duration.replace(/[^\d.-]/g, ''));
      const reportMessages: IMessageTranslation[] = [];

      if (durationSeconds > 5) {
        reportMessages.push({
          messageTranslationId: 'animation_report_message_1',
          messageTranslationParams: [duration]
        });
      }

      if (iterationCount === 'infinite') {
        reportMessages.push({
          messageTranslationId: 'animation_report_message_2',
          messageTranslationParams: [
            iterationCount,
            DomUtility.getEscapedNodeHTML(htmlElement)
          ]
        });
      }

      if (reportMessages.length === 0) {
        continue;
      }

      reportMessages.push({
        messageTranslationId: 'animation_report_message_0'
      });

      const report: IIssueReport = {
        messageTranslation: reportMessages,
        node: htmlElement,
        requiresManualVerification: false,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      };

      this.validator.report(report);
    }

    this.animationCache.clear();
  }
}
