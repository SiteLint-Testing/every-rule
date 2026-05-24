import { wcagRules } from '../../../constants/audits/wcag';
import { LevelType } from '../../../constants/levelType';
import { IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { AbstractRule } from '../../abstract-rule';

export class LinkPurposeInContext extends AbstractRule {
  protected override selector = 'a, [role="link"]';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: wcagRules.link_purpose_in_context!.disabilitiesImpacted,
    level: LevelType.A,
    ruleId: wcagRules.link_purpose_in_context!.ruleId,
    severity: wcagRules.link_purpose_in_context!.severity,
    standard: wcagRules.link_purpose_in_context!.standard,
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
