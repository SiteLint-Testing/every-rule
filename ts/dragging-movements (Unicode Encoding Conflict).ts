import { AuditStandards } from '../../../constants/audits';
import { LevelType } from '../../../constants/levelType';
import { type IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { AbstractRule } from '../../abstract-rule';
import { wcagRules } from '../../../constants/audits/wcag';

export class DraggingMovements extends AbstractRule {
  // Targeting interactive components that commonly involve drag-and-drop actions
  protected override selector = ':is(div[draggable="true"], .sortable-item, .slider, .range-input):not([hidden])';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: wcagRules.dragging_movements!.disabilitiesImpacted,
    level: LevelType.AA,
    ruleId: wcagRules.dragging_movements!.ruleId,
    severity: wcagRules.dragging_movements!.severity,
    standard: AuditStandards.wcag,
    standardMetaData: wcagRules.dragging_movements!.standardMetaData
  };

  public validate(elements: HTMLElement[]): void {
    for (const element of elements) {
      this.validator.report({
        messageTranslation: [
          {
            messageTranslationId: `${this.ruleConfig.ruleId}_manual_check`,
            messageTranslationParams: []
          }
        ],
        node: element,
        requiresManualVerification: true,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      });
    }
  }
}
