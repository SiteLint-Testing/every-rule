import { LevelType } from '../../../../constants/levelType';
import type { IIssueReport, IMessageTranslation } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

export class MissingHrefOnA extends AbstractRule {
  protected override selector = 'a:not([href]):not([aria-disabled="true"]):not([role="link"]):not([role="button"]):not([tabindex="-1"]:not([role="button"]))';

  protected ruleConfig: IAbstractRuleConfig = {
    level: LevelType.best_practices,
    ruleId: $auditRules.missing_href_on_a,
    severity: $severity.critical,
    standard: AuditStandards.sitelint,
    standardMetaData: null
  };

  public validate(anchorElements: HTMLAnchorElement[]): void {
    const reportNodeWithoutHref = (anchorElement: HTMLAnchorElement): void => {
      const reportMessage: IMessageTranslation[] = [
        {
          messageTranslationId: 'missing_href_on_a_report_message'
        }
      ];

      const report: IIssueReport = {
        messageTranslation: reportMessage,
        node: anchorElement,
        requiresManualVerification: false,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      };

      this.validator.report(report);
    };

    for (const anchorElement of anchorElements) {
      reportNodeWithoutHref(anchorElement);
    }
  }
}
