import { AuditStandards } from '../../../constants/audits';
import { LevelType } from '../../../constants/levelType';
import { type IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { AbstractRule } from '../../abstract-rule';
import { wcagRules } from '../../../constants/audits/wcag';

export class ErrorIdentification extends AbstractRule {
  // Targeting inputs that are likely to trigger validation errors
  protected override selector = ':is(input, select, textarea, [role="textbox"]):not([hidden])';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: wcagRules.error_identification!.disabilitiesImpacted,
    level: LevelType.A,
    ruleId: wcagRules.error_identification!.ruleId,
    severity: wcagRules.error_identification!.severity,
    standard: AuditStandards.wcag,
    standardMetaData: wcagRules.error_identification!.standardMetaData
  };

  public validate(elements: HTMLElement[]): void {

    if (elements.length === 0) {
      return;
    }

    this.validator.report({
      messageTranslation: [
        {
          messageTranslationId: `${this.ruleConfig.ruleId}_manual_check`,
          messageTranslationParams: []
        }
      ],
      node: null,
      requiresManualVerification: true,
      ruleId: this.ruleConfig.ruleId,
      skipReason: null
    });
  }
}
