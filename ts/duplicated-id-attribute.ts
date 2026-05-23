import type { IIssueReport } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';
import { LevelType } from '../../../../constants/levelType';
import { TextUtility } from '../../../../utils/text';

// Note: this rule is following https://www.w3.org/TR/2010/WD-html-markup-20100624/datatypes.html#common.data.id-def
export class DuplicatedIdAttribute extends AbstractRule {
  protected override selector: string = '[id]';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.duplicated_id_attribute,
    severity: $severity.low,
    standard: AuditStandards.sitelint,
    standardMetaData: null
  };

  public validate(elements: Element[]): void {
    const ids: any = {};

    const checkIdAttribute = (element: Element): void => {
      let idAttr: string | null = element.getAttribute('id');

      if (typeof idAttr !== 'string' || idAttr.length === 0) {
        return;
      }

      idAttr = TextUtility.normalizeWhitespaces(idAttr).trim();

      /*
       *  Note: if attribute id value contains a space character https://www.w3.org/TR/2010/WD-html-markup-20100624/terminology.html#space
       *        then it's considered as invalid value
       */
      if (TextUtility.containsSpaceCharacter(idAttr)) {
        return;
      }

      // Also check if the normalized ID is empty after trimming
      if (idAttr.length === 0) {
        return;
      }

      if (ids[idAttr]) {
        ids[idAttr].elements.push(element);
      } else {
        ids[idAttr] = {
          elements: [element]
        };
      }
    };

    const showReport = (id: string): void => {
      const counter: number = ids[id].elements.length;

      if (counter > 1) {
        // Report once per duplicated ID, using the first element as reference
        const report: IIssueReport = {
          messageTranslation: [
            {
              messageTranslationId: 'duplicated_id_attribute_report_message',
              messageTranslationParams: [id, String(counter)]
            }
          ],
          node: ids[id].elements[0], // Reference the first element
          requiresManualVerification: false,
          ruleId: this.ruleConfig.ruleId,
          skipReason: null
        };

        this.validator.report(report);
      }
    };

    elements.forEach(checkIdAttribute);
    Object.keys(ids).forEach(showReport);
  }
}
