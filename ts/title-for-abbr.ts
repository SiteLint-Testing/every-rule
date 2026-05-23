import type { IIssueReport } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

import { LevelType } from '../../../../constants/levelType';
import { TextUtility } from '../../../../utils/text';

export class TitleForAbbr extends AbstractRule {
  protected override selector: string = 'abbr';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.AAA,
    ruleId: $auditRules.title_for_abbr,
    severity: $severity.low,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(elements: Element[]): void {
    const reportTitle = (element: Element): void => {
      const report: IIssueReport = {
        messageTranslation: [
          {
            messageTranslationId: 'title_for_abbr_report_message_1'
          }
        ],
        node: element,
        requiresManualVerification: false,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      };

      const titleAttribute: string | null = element.getAttribute('title');

      if (typeof titleAttribute === 'string') {
        if (TextUtility.safeTrim(titleAttribute).length === 0) {
          report.messageTranslation = [
            {
              messageTranslationId: 'title_for_abbr_report_message_2'
            }
          ];
        } else {
          return;
        }
      }

      this.validator.report(report);
    };

    elements.forEach(reportTitle);
  }
}
