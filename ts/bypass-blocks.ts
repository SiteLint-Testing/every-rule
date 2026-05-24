import { AuditStandards } from '../../../constants/audits';
import { LevelType } from '../../../constants/levelType';
import { type IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { AbstractRule } from '../../abstract-rule';
import { wcagRules } from '../../../constants/audits/wcag';

export class BypassBlocks extends AbstractRule {
  // Targeting main structural containers that typically contain navigation
  protected override selector = ':is(header, nav, [aria-label="Skip links"], .main-navigation, .skip-links):not([hidden])';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: wcagRules.bypass_blocks!.disabilitiesImpacted,
    level: LevelType.A,
    ruleId: wcagRules.bypass_blocks!.ruleId,
    severity: wcagRules.bypass_blocks!.severity,
    standard: AuditStandards.wcag,
    standardMetaData: wcagRules.bypass_blocks!.standardMetaData
  };

  public validate(elements: HTMLElement[]): void {
    for (const element of elements) {
      this.validator.report({
        messageTranslation: [{
          messageTranslationId: `${this.ruleConfig.ruleId}_manual_check`, messageTranslationParams: []
        }],
        node: element,
        requiresManualVerification: true,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      });
    }
  }
}
