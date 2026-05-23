import type { IIssueReport } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

import { Css } from '../../../../utils/css';
import { DomUtility } from '../../../../utils/dom';
import { LevelType } from '../../../../constants/levelType';

export class LinksNotVisuallyEvidentWithoutColorVision extends AbstractRule {
  protected override selector: string = 'a:not(:empty)';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.links_not_visually_evident_without_color_vision,
    severity: $severity.high,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(elements: Element[]): void {
    const checkLink = (element: Element): any => {
      if (DomUtility.isElementVisible(element) === false) {
        return;
      }

      const problem: IIssueReport = {
        messageTranslation: [],
        node: element,
        requiresManualVerification: false,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      };

      const textContent: string = DomUtility.getTextFromDescendantContent(element);

      // Note: :empty does not handle liner carriers
      if (DomUtility.hasDirectTextDescendant(element as HTMLElement) === false || textContent.trim().length === 0) {
        return;
      }

      const element_computedStyle: CSSStyleDeclaration | undefined = Css.getComputedStyle(element);
      const parentElement: HTMLElement | null = element.parentElement;

      if (element_computedStyle === undefined || parentElement === null) {
        return;
      }

      const includeWhitespaces: boolean = false;

      if (DomUtility.hasDirectTextDescendant(parentElement, includeWhitespaces) === false) {
        return;
      }

      const parent_computedStyle: CSSStyleDeclaration | undefined = Css.getComputedStyle(parentElement);

      if (parent_computedStyle === undefined) {
        return;
      }

      const element_background: string = element_computedStyle.getPropertyValue('background');
      const element_color: string = element_computedStyle.getPropertyValue('color');
      const element_fontStyle: string = element_computedStyle.getPropertyValue('font-style');
      const element_textDecoration: string = element_computedStyle.getPropertyValue('text-decoration');

      const parent_background: string = parent_computedStyle.getPropertyValue('background');
      const parent_color: string = parent_computedStyle.getPropertyValue('color');
      const parent_fontStyle: string = parent_computedStyle.getPropertyValue('font-style');
      const parent_textDecoration: string = parent_computedStyle.getPropertyValue('text-decoration');

      if (
        element_fontStyle !== parent_fontStyle ||
        element_textDecoration !== parent_textDecoration ||
        element_background !== parent_background ||
        element_color !== parent_color
      ) {
        return;
      }

      problem.messageTranslation.push({
        messageTranslationId: 'links_not_visually_evident_without_color_vision_report_message',
        messageTranslationParams: [
          `background: ${element_background}; color: ${element_color}; font-style: ${element_fontStyle}; text-decoration: ${element_textDecoration}`,
          `background: ${parent_background}; color: ${parent_color}; font-style: ${parent_fontStyle}; text-decoration: ${parent_textDecoration}`
        ]
      });
      this.validator.report(problem);
    };

    elements.forEach(checkLink);
  }
}
