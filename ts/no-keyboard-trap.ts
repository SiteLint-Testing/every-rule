import { $auditRules, $severity, AuditStandards } from '../../../constants/audits';
import { LevelType } from '../../../constants/levelType';
import { IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { AbstractRule } from '../../abstract-rule';

export class NoKeyboardTrap extends AbstractRule {
  protected override selector = 'body';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.no_keyboard_trap,
    severity: $severity.critical,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(elements: HTMLElement[]): void {
    for (const element of elements) {
      this.validator.report({
        messageTranslation: [{
          messageTranslationId: `${this.ruleConfig.ruleId}_manual_check`,
          messageTranslationParams: []
        }],
        node: element,
        requiresManualVerification: true,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      });
    }
  }
}
