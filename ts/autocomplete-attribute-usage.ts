import type { IIssueReport } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

import { LevelType } from '../../../../constants/levelType';

export class AutocompleteAttributeUsage extends AbstractRule {
  protected override selector = [
    'input[type="text"]:not([disabled])',
    'input[type="search"]:not([disabled])',
    'input[type="url"]:not([disabled])',
    'input[type="tel"]:not([disabled])',
    'input[type="email"]:not([disabled])',
    'input[type="password"]:not([disabled])',
    'input[type="date"]:not([disabled])',
    'input[type="month"]:not([disabled])',
    'input[type="week"]:not([disabled])',
    'input[type="time"]:not([disabled])',
    'input[type="datetime-local"]:not([disabled])',
    'input[type="number"]:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])'
  ].join(',');

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.AA,
    ruleId: $auditRules.autocomplete_attribute_usage,
    severity: $severity.low,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  //  WHATWG autofill detail tokens that are "user-specific" https://html.spec.whatwg.org/#autofill
  private readonly USER_SPECIFIC_TOKENS = new Set([
    'name', 'honorific-prefix', 'given-name', 'additional-name', 'family-name',
    'honorific-suffix', 'nickname', 'username', 'new-password', 'current-password',
    'one-time-code', 'organization-title', 'organization', 'street-address',
    'address-line1', 'address-line2', 'address-line3', 'address-level4',
    'address-level3', 'address-level2', 'address-level1', 'country', 'country-name',
    'postal-code', 'cc-name', 'cc-given-name', 'cc-additional-name', 'cc-family-name',
    'cc-number', 'cc-exp', 'cc-exp-month', 'cc-exp-year', 'cc-csc', 'cc-type',
    'transaction-currency', 'transaction-amount', 'language', 'bday', 'bday-day',
    'bday-month', 'bday-year', 'sex', 'url', 'photo', 'tel', 'tel-country-code',
    'tel-national', 'tel-area-code', 'tel-local', 'tel-local-prefix', 'tel-local-suffix',
    'tel-extension', 'email', 'impp'
  ]);

  private static normalize(str: string): string {
    return str.toLowerCase().replace(/[^a-z0-9-]/g, '');
  }

  /**
   * Returns true if the name/id hint positively matches a user-specific token.
   * A missing or unrecognised hint returns false — caller treats that as ambiguous.
   */
  private hintMatchesUserSpecificToken(el: HTMLFormElement): boolean {
    const hint: string = AutocompleteAttributeUsage.normalize(
      el.getAttribute('name') || el.getAttribute('id') || ''
    );

    if (hint.length === 0) {
      return false;
    }

    return [...this.USER_SPECIFIC_TOKENS].some(
      (token): boolean => {
        return hint === token ||
        hint.endsWith(`-${token}`) ||
        hint.startsWith(`${token}-`);
      }
    );
  }

  public validate(elements: HTMLFormElement[]): void {
    for (const el of elements) {
      const autocompleteAttr = el.attributes.getNamedItem('autocomplete');

      if (autocompleteAttr !== null && autocompleteAttr.value.trim().toLowerCase().length > 0) {
        continue;
      }

      // <input type="search"> with no autocomplete implicitly means "off"
      if (el.nodeName.toLowerCase() === 'input' && el.type === 'search') {
        continue;
      }

      // High-confidence: hint matches a known user-specific token
      const isConfirmed: boolean = this.hintMatchesUserSpecificToken(el);

      const issue: IIssueReport = {
        messageTranslation: [{
          messageTranslationId: isConfirmed ?
            'autocomplete_attribute_usage_report_message_1' :
            'autocomplete_attribute_usage_report_message_2',
          messageTranslationParams: []
        }],
        node: el,
        requiresManualVerification: !isConfirmed,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      };

      this.validator.report(issue);
    }
  }
}
