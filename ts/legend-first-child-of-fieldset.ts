import type { IIssueReport } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

import { DomUtility } from '../../../../utils/dom';
import { LevelType } from '../../../../constants/levelType';
import { TextUtility } from '../../../../utils/text';

export class LegendFirstChildOfFieldSet extends AbstractRule {
  protected override selector = 'fieldset > :first-child';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.legend_first_child_of_fieldset,
    severity: $severity.low,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(elements: Element[]): void {
    const checkElement = (element: Element): void => {
      const report: IIssueReport = {
        messageTranslation: [],
        node: element,
        requiresManualVerification: false,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      };

      if (element.nodeName.toLowerCase() !== 'legend') {
        report.messageTranslation.push({
          messageTranslationId: 'legend_first_child_of_fieldset_report_message_1',
          messageTranslationParams: [
            TextUtility.escape('<legend>'),
            TextUtility.escape('<fieldset>'),
            DomUtility.getEscapedOuterHTML(element)
          ]
        });

        this.validator.report(report);

        return;
      }

      if (typeof element.textContent === 'string' && TextUtility.safeTrim(element.textContent).length === 0) {
        report.messageTranslation.push({
          messageTranslationId: 'legend_first_child_of_fieldset_report_message_2',
          messageTranslationParams: [
            TextUtility.escape('<legend>'),
            TextUtility.escape('<fieldset>'),
            DomUtility.getEscapedOuterHTML(element)
          ]
        });

        this.validator.report(report);
      }
    };

    elements.forEach(checkElement);
  }
}
