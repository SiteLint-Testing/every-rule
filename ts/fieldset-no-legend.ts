import type { IIssueReport } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

import { LevelType } from '../../../../constants/levelType';
import { TextUtility } from '../../../../utils/text';

export class FieldsetNoLegend extends AbstractRule {
  protected override selector: string = 'fieldset > :first-child:not(legend)';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.fieldset_no_legend,
    severity: $severity.low,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(elements: HTMLElement[]): void {
    const checkNode = (element: HTMLElement): void => {
      const report: IIssueReport = {
        messageTranslation: [
          {
            messageTranslationId: 'fieldset_no_legend_report_message',
            messageTranslationParams: [TextUtility.escape(element.nodeName.toLowerCase())]
          }
        ],
        node: element,
        requiresManualVerification: false,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      };

      this.validator.report(report);
    };

    elements.forEach(checkNode);
  }
}
