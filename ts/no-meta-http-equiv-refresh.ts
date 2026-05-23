import type { IIssueReport } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

import { LevelType } from '../../../../constants/levelType';

export class NoMetaHttpEquivRefresh extends AbstractRule {
  protected override selector: string = 'meta';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.no_meta_http_equiv_refresh,
    severity: $severity.critical,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(htmlMetaElements: HTMLMetaElement[]): void {
    const checkForHttpEquiv = (htmlMetaElement: HTMLMetaElement): void => {
      const metaHttpEquivValue: string | null = htmlMetaElement.getAttribute('http-equiv');

      if (metaHttpEquivValue === null) {
        return;
      }

      if (metaHttpEquivValue === 'refresh' || metaHttpEquivValue === 'Refresh') {
        const report: IIssueReport = {
          messageTranslation: [
            {
              messageTranslationId: 'no_meta_http_equiv_refresh_report_message'
            }
          ],
          node: htmlMetaElement,
          requiresManualVerification: false,
          ruleId: this.ruleConfig.ruleId,
          skipReason: null
        };

        this.validator.report(report);
      }
    };

    htmlMetaElements.forEach(checkForHttpEquiv);
  }
}
