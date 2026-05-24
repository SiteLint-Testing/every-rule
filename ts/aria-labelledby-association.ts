import type { IIssueReport } from '../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../constants/audits';
import { AbstractRule } from '../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { LevelType } from '../../../constants/levelType';
import { DomUtility } from '../../../utils/dom';

export class AriaLabelledbyAssociation extends AbstractRule {
  protected override selector: string = '[aria-labelledby]';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.aria_labelledby_association,
    severity: $severity.critical,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(elements: Element[]): void {
    const processNodes = (element: Element): void => {
      const idReferences: string | null = element.getAttribute('aria-labelledby');
      let ids: string[];
      let report: IIssueReport;
      let missingElements: string[];

      const checkElementAvailability = (id: string): boolean => {
        return DomUtility.getElementById(id) === null;
      };

      if (typeof idReferences === 'string') {
        if (idReferences.trim().length === 0) {
          report = {
            messageTranslation: [
              {
                messageTranslationId: 'aria_labelledby_association_report_message_2',
                messageTranslationParams: [element.nodeName.toLowerCase()]
              }
            ],
            node: element,
            requiresManualVerification: false,
            ruleId: this.ruleConfig.ruleId,
            skipReason: null
          };

          this.validator.report(report);
        } else {
          ids = idReferences.split(/ +/).map(Function.prototype.call, String.prototype.trim);

          missingElements = ids.filter(checkElementAvailability);

          if (missingElements.length > 0) {
            report = {
              messageTranslation: [
                {
                  messageTranslationId: 'aria_labelledby_association_report_message_1'
                }
              ],
              node: element,
              requiresManualVerification: false,
              ruleId: this.ruleConfig.ruleId,
              skipReason: null
            };

            this.validator.report(report);
          }
        }
      }
    };

    elements.forEach(processNodes);
  }
}
