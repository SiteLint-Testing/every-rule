import { $auditRules, $severity, AuditStandards } from '../../../constants/audits';
import { $runnerSettings } from '../../../constants/auditor';
import { AbstractRule } from '../../abstract-rule';
import { Config } from '../../../config';
import { Css } from '../../../utils/css';
import { DomUtility } from '../../../utils/dom';
import { IIssueReport } from '../../../interfaces/rule-issue.interface';
import { LevelType } from '../../../constants/levelType';
import type { IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import {
  FOCUSABLE_ELEMENTS,
  POTENTIALLY_FOCUSABLE_SELECTOR,
  INTERACTIVE_HEURISTICS
} from '../../../constants/focusableElements';

export class TargetSizeMinimum extends AbstractRule {
  protected override selector = [
    ...FOCUSABLE_ELEMENTS,
    ...POTENTIALLY_FOCUSABLE_SELECTOR,
    ...INTERACTIVE_HEURISTICS
  ].join(',\n');

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.AA,
    ruleId: $auditRules.target_size_minimum,
    severity: $severity.high,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  private getEffectiveHeight(style: CSSStyleDeclaration, rect: DOMRect): number {
    const paddingTop: number = Number.parseFloat(style.paddingTop || '0');
    const paddingBottom: number = Number.parseFloat(style.paddingBottom || '0');

    /*
     * `style.lineHeight` is already computed → always a <number> followed by "px"
     * (or the string "normal", which `parseFloat` turns into NaN)
     */

    let lineHeight: number = Number.parseFloat(style.lineHeight);

    if (Number.isNaN(lineHeight)) {
      // browser returned "normal" → fall back to 1.2 × font-size
      lineHeight = (Number.parseFloat(style.fontSize) || 16) * 1.2;
    }

    return Math.max(rect.height + paddingTop + paddingBottom, lineHeight);
  }

  private isInlineInText(element: HTMLElement): boolean {
    const style: CSSStyleDeclaration | undefined = Css.getComputedStyle(element);

    if (style === undefined) {
      return false;
    }

    // If it's not display: inline, it's a block/flex/grid item and usually needs to meet the 24px requirement.
    const isInline: boolean = style.display === 'inline';

    if (isInline === false) {
      return false;
    }

    // Check siblings for text content. WCAG exemption: "Targets in a sentence or block of text"
    const parent: HTMLElement | null = element.parentElement;

    if (parent === null) {
      return false;
    }

    const hasTextSiblings: boolean = Array.from(parent.childNodes).some((node: ChildNode): boolean => {
      // We are looking for text nodes that aren't just whitespace
      return node.nodeType === Node.TEXT_NODE && (node.textContent?.trim().length ?? 0) > 0;
    });

    // Check for typical prose containers
    const proseContainers: RegExp = /^(P|LI|BLOCKQUOTE|DD|DT|LABEL)$/;
    const isInProseContainer: boolean = proseContainers.test(parent.tagName);

    return hasTextSiblings || isInProseContainer;
  }

  public validate(elements: HTMLElement[]): void {
    const MIN_SIZE = 24; // CSS pixels

    const reportIssue = (element: HTMLElement): void => {
      const includeHidden: boolean = Config.get($runnerSettings.includeHidden);

      if (includeHidden === false && DomUtility.isElementVisible(element) === false) {
        return;
      }

      if (typeof element.checkVisibility === 'function') {
        if (
          element.checkVisibility({
            checkOpacity: true,
            checkVisibilityCSS: true
          }) === false
        ) {
          return;
        }
      } else if (DomUtility.isElementVisible(element) === false) {
        return;
      }

      const rect: DOMRect = Css.getBoundingClientRect(element);

      // If it's visible but has no size, it's effectively unreachable
      if (rect.width === 0 || rect.height === 0) {
        return;
      }

      const style: CSSStyleDeclaration | undefined = Css.getComputedStyle(element);

      if (typeof style === 'undefined') {
        return;
      }

      const width: number = Math.round(rect.width);
      const effectiveHeight: number = Math.round(this.getEffectiveHeight(style, rect));

      /* 1. quick pass – large enough */
      if (width >= MIN_SIZE && effectiveHeight >= MIN_SIZE) {
        return;
      }

      /* 2. skip inline links only when they sit inside real prose elements */
      if (this.isInlineInText(element)) {
        return;
      }

      /* 3. skip if already wrapped in a larger clickable ancestor */
      const parentClickable: Element | null = element.closest('a, button, label, [role="button"], [onclick]');

      if (parentClickable && parentClickable !== element) {
        const parentRect: DOMRect = parentClickable.getBoundingClientRect();

        if (parentRect.width >= MIN_SIZE && parentRect.height >= MIN_SIZE) {
          return;
        }
      }

      /* 4. report the issue */
      const report: IIssueReport = {
        messageTranslation: [
          {
            messageTranslationId: 'target_size_minimum_report_message_1',
            messageTranslationParams: [
              width.toString(),
              effectiveHeight.toString(),
              MIN_SIZE.toString()
            ]
          }
        ],
        node: element,
        requiresManualVerification: false,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      };

      this.validator.report(report);
    };

    for (const el of elements) {
      reportIssue(el);
    }
  }
}
