import type { IIssueReport, IMessageTranslation } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

import { DomUtility } from '../../../../utils/dom';
import { LevelType } from '../../../../constants/levelType';
import { TextUtility } from '../../../../utils/text';

export class EmptyLinkElement extends AbstractRule {
  protected override selector: string = 'a, [role="link"]';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.empty_link_element,
    severity: $severity.high,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(elements: Element[]): void {
    const reportEmptyLink = (element: Element): void => {
      const content: string = DomUtility.nodesToText(element);
      const reportMessage: IMessageTranslation[] = [];

      const ariaHidden: string | null = element.getAttribute('aria-hidden');
      const ariaLabel: string | null = element.getAttribute('aria-label');
      const ariaLabelledBy: string | null = element.getAttribute('aria-labelledby');

      const reportIssue: IIssueReport = {
        messageTranslation: [],
        node: element,
        requiresManualVerification: false,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      };

      if (typeof ariaHidden === 'string' && ariaHidden === 'true') {
        return;
      }

      if (content.length > 0 && TextUtility.containsOnlyWhiteSpaces(content)) {
        reportMessage.push({
          messageTranslationId: 'empty_link_element_report_message_1'
        });
      } else if (element.childNodes.length === 0 || content.length === 0) {
        reportMessage.push({
          messageTranslationId: 'empty_link_element_report_message_2'
        });
      }

      if (typeof ariaLabel === 'string' && ariaLabel.trim().length > 0) {
        return;
      }

      if (typeof ariaLabelledBy === 'string') {
        const ids: string[] = ariaLabelledBy.split(/\s+/);

        const existingElements = (elementId: string): boolean => {
          return document.getElementById(elementId) === null;
        };

        const missingAssociatedElements: string[] = ids.filter(existingElements);

        if (missingAssociatedElements.length > 0) {
          reportMessage.push({
            messageTranslationId: 'empty_link_element_additional_message',
            messageTranslationParams: [ariaLabelledBy, missingAssociatedElements.join(' ')]
          });
        }
      }

      if (reportMessage.length === 0) {
        return;
      }

      reportIssue.messageTranslation = reportMessage;

      this.validator.report(reportIssue);
    };

    elements.forEach(reportEmptyLink);
  }
}
