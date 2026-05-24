import type { IIssueReport } from '../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../constants/audits';
import { AbstractRule } from '../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { LevelType } from '../../../constants/levelType';

export class NoHeadings extends AbstractRule {
  protected override selector: string = 'h1, h2, h3, h4, h5, h6';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.AAA,
    ruleId: $auditRules.no_headings,
    severity: $severity.high,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(nodes: Element[]): void {
    if (nodes.length > 0) {
      return;
    }

    const report: IIssueReport = {
      messageTranslation: [
        {
          messageTranslationId: 'no_headings_report_message'
        }
      ],
      node: null,
      requiresManualVerification: false,
      ruleId: this.ruleConfig.ruleId,
      skipReason: null
    };

    this.validator.report(report);
  }
}
