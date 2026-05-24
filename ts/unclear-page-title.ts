import type { IIssueReport } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

import { DomUtility } from '../../../../utils/dom';
import { LevelType } from '../../../../constants/levelType';
import { TextUtility } from '../../../../utils/text';

export class UnclearPageTitle extends AbstractRule {
  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.unclear_page_title,
    severity: $severity.high,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  protected override selector: () => HTMLElement[] = (): HTMLElement[] => {
    return [DomUtility.getRootElement()];
  };

  public validate(elements: Element[]): void {
    const report: IIssueReport = {
      messageTranslation: [],
      node: null,
      requiresManualVerification: false,
      ruleId: this.ruleConfig.ruleId,
      skipReason: null
    };

    const titleElement: HTMLTitleElement | null = elements.at(0) ? elements.at(0)!.querySelector('head title') : null;

    if (titleElement === null) {
      report.messageTranslation.push({
        messageTranslationId: 'unclear_page_title_report_message_3'
      });

      this.validator.report(report);

      return;
    }

    report.node = titleElement;

    const pageTitle: string | null = titleElement.textContent;

    if (pageTitle === null) {
      return;
    }

    const unclearTitle: string[] = [
      'Enter the title of your HTML document here',
      'Untitled Document',
      'No Title',
      'Untitled Page',
      'New Page 1'
    ];

    if (TextUtility.safeTrim(pageTitle).length === 0) {
      report.messageTranslation.push({
        messageTranslationId: 'unclear_page_title_report_message_2'
      });
    } else if (unclearTitle.includes(pageTitle)) {
      report.messageTranslation.push({
        messageTranslationId: 'unclear_page_title_report_message_1',
        messageTranslationParams: [pageTitle]
      });
    }

    if (report.messageTranslation.length === 0) {
      return;
    }

    this.validator.report(report);
  }
}

