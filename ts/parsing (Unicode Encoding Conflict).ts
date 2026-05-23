import { LevelType } from '../../../constants/levelType';
import { type IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { AbstractRule } from '../../abstract-rule';
import { wcagRules } from '../../../constants/audits/wcag';

export class Parsing extends AbstractRule {
  // Matches the root of the document to provide a one-time notice
  protected override selector = ':root';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: wcagRules.parsing!.ruleId,
    severity: wcagRules.parsing!.severity,
    standard: wcagRules.parsing!.standard,
    standardMetaData: null
  };

  public validate(elements: Element[]): void {
    if (elements.length === 0) {
      return;
    }

    /*
     * 4.1.1 is deprecated in WCAG 2.2+.
     * We report a notice to inform the user of the status.
     */
    this.validator.report({
      messageTranslation: [
        {
          messageTranslationId: `${this.ruleConfig.ruleId}_deprecated_notice`,
          messageTranslationParams: []
        }
      ],
      node: elements[0] as HTMLElement,
      requiresManualVerification: true,
      ruleId: this.ruleConfig.ruleId,
      skipReason: null
    });
  }
}
