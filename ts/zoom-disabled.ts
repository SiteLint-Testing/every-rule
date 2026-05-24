import { $auditRules, $severity, AuditStandards } from '../../../constants/audits';
import { AbstractRule } from '../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { LevelType } from '../../../constants/levelType';

export class ZoomDisabled extends AbstractRule {
  protected override selector: string = 'meta[name="viewport"]';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.zoom_disabled,
    severity: $severity.critical,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(metaElements: HTMLMetaElement[]): void {
    const MIN_ZOOM_RANGE = 2; // WCAG convention

    const checkViewport = (meta: HTMLMetaElement): void => {
      const content: string = meta.content.toLowerCase();
      const params: string[] = [];

      /* 1. hard disable */
      const usr: RegExpMatchArray | null = content.match(/user-scalable\s*=\s*(no|0)/);

      if (usr) {
        params.push(`user-scalable=${usr[1]}`); // "no"  OR  "0", never "no/0"
      }

      /* 2. range too small – push exact values */
      const minMatch: RegExpMatchArray | null = content.match(/minimum-scale\s*=\s*([\d.]+)/);
      const maxMatch: RegExpMatchArray | null = content.match(/maximum-scale\s*=\s*([\d.]+)/);
      const min = Number(minMatch?.[1] ?? 0.25);
      const max = Number(maxMatch?.[1] ?? 5);

      if (max - min < MIN_ZOOM_RANGE) {
        if (minMatch) {
          params.push(`minimum-scale=${minMatch[1]}`);
        }
        if (maxMatch) {
          params.push(`maximum-scale=${maxMatch[1]}`);
        }
      }

      if (params.length === 0) {
        return;
      }

      this.validator.report({
        messageTranslation: [{
          messageTranslationId: 'zoom_disabled_report_message',
          messageTranslationParams: [params.join(', ')]
        }],
        node: meta,
        requiresManualVerification: false,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      });
    };

    for (const metaElement of metaElements) {
      checkViewport(metaElement);
    }
  }
}
