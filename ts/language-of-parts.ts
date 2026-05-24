import {
  $auditRules, $severity, AuditStandards, DisabilitiesImpacted
} from '../../../constants/audits';
import { LevelType } from '../../../constants/levelType';
import { IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { TranslateService } from '../../../services/translate.service';
import { AbstractRule } from '../../abstract-rule';

export class LanguageOfParts extends AbstractRule {
  protected override selector = ':not(html) [lang]';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [DisabilitiesImpacted.vision, DisabilitiesImpacted.cognitive],
    level: LevelType.AA,
    ruleId: $auditRules.language_of_parts,
    severity: $severity.low,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(elements: HTMLElement[]): void {
    /*
     * This rule typically requires manual oversight to identify untagged foreign phrases,
     * but we can flag elements that do use 'lang' to remind auditors to check them.
     */

    if (elements.length === 0) {
      return;
    }

    const checkForIssue = (element: HTMLElement): void => {
      const langAttrValue: string | null = element.getAttribute('lang') || TranslateService.instant('not_specified');

      this.validator.report({
        messageTranslation: [
          {
            messageTranslationId: `${this.ruleConfig.ruleId}_manual_check`,
            messageTranslationParams: [langAttrValue]
          }
        ],
        node: element,
        requiresManualVerification: true,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      });
    };

    for (const element of elements) {
      checkForIssue(element);
    }
  }
}
