import { LevelType } from '../../../constants/levelType';
import { IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { AbstractRule } from '../../abstract-rule';
import { HIDDEN_EXCLUDE, POTENTIALLY_FOCUSABLE_SELECTOR } from '../../../constants/focusableElements';
import { wcagRules } from '../../../constants/audits/wcag';

export class FocusNotObscuredMinimum extends AbstractRule {
  protected override selector = POTENTIALLY_FOCUSABLE_SELECTOR.map((cssSelector: string) => {
    return `${cssSelector}${HIDDEN_EXCLUDE}`;
  }).join(',');

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: wcagRules.focus_not_obscured_minimum!.disabilitiesImpacted,
    level: LevelType.AA,
    ruleId: wcagRules.focus_not_obscured_minimum!.ruleId,
    severity: wcagRules.focus_not_obscured_minimum!.severity,
    standard: wcagRules.focus_not_obscured_minimum!.standard,
    standardMetaData: null
  };

  public validate(elements: HTMLElement[]): void {
    if (elements.length === 0) {
      return;
    }

    const tagCounts: Map<string, number> = elements.reduce<Map<string, number>>((acc: Map<string, number>, element: HTMLElement) => {
      const tag: string = element.nodeName.toLowerCase();

      acc.set(tag, (acc.get(tag) ?? 0) + 1);

      return acc;
    }, new Map<string, number>());

    const summary: string = Array.from(tagCounts.entries())
      .map(([tag, count]: [string, number]) => {
        return `${tag}: ${count}`;
      })
      .join(', ');

    this.validator.report({
      messageTranslation: [
        {
          messageTranslationId: `${this.ruleConfig.ruleId}_manual_check`,
          messageTranslationParams: [summary]
        }
      ],
      node: null,
      requiresManualVerification: true,
      ruleId: this.ruleConfig.ruleId,
      skipReason: null
    });
  }
}
