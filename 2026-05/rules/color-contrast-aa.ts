import { APCAcontrast } from 'apca-w3';
import { TinyColor, readability, isReadable } from '@ctrl/tinycolor';

import type { IGetBackground } from '../../../../interfaces/css.interface';
import type { IIssueReport, ISkipReason } from '../../../../interfaces/rule-issue.interface';
import {
  $auditRules, $severity, $auditRuleNodeSkipReason, AuditStandards
} from '../../../../constants/audits';
import { $runnerSettings } from '../../../../constants/auditor';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

import { ColorContrastUtility } from '../../../../utils/color-contrast.utility';
import { Config } from '../../../../config';
import { Css } from '../../../../utils/css';
import { DomUtility } from '../../../../utils/dom';
import { LevelType } from '../../../../constants/levelType';
import { ColorContrastRatio } from '../../../../constants/colors.constants';
import { IFindClosesetColors } from '../../../../interfaces/color.interface';
import { ColorsUtility } from '../../../../tools/colors.utility';

export class ColorContrastA2 extends AbstractRule {
  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.AA,
    ruleId: $auditRules.color_contrast_aa,
    severity: $severity.critical,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  protected override selector = `*${[
    ':empty',
    ':root',
    'base',
    'body',
    'br',
    'circle',
    'clipPath',
    'code',
    'defs',
    'desc',
    'ellipse',
    'filter',
    'g',
    'head',
    'hgroup',
    'hr',
    'iframe',
    'img',
    'input',
    'line',
    'linearGradient',
    'link',
    'mark',
    'mask',
    'meta',
    'noscript',
    'object',
    'option',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'rect',
    'script',
    'stop',
    'style',
    'symbol',
    'title',
    'use'
  ].map((i: string): string => {
    return `:not(${i})`;
  }).join('')}`;

  public validate(htmlElements: HTMLElement[]): void {
    const checkColorContrast = (element: HTMLElement): void => {

      if (element.hasChildNodes() === false) {
        return;
      }

      if (ColorContrastUtility.isTextBearing(element) === false) {
        return;
      }

      const descendantText: ChildNode | null = DomUtility.getFirstChildNodeWithText(element);

      if (descendantText === null) {
        return;
      }

      const report: IIssueReport = {
        messageTranslation: [],
        node: element,
        requiresManualVerification: false,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      };

      const styles: CSSStyleDeclaration | undefined = Css.getComputedStyle(element);

      if (styles === undefined) {
        report.messageTranslation.push({
          messageTranslationId: `skip_reason_${$auditRuleNodeSkipReason.stylesCantBeDetermined}`
        });
        report.requiresManualVerification = true;
        report.skipReason = $auditRuleNodeSkipReason.stylesCantBeDetermined;

        this.validator.report(report);

        return;
      }

      const includeHidden: boolean = Config.get($runnerSettings.includeHidden);

      if (includeHidden === false && DomUtility.isElementVisible(element) === false) {
        return;
      }

      const determinedBackground: IGetBackground = Css.getElementBackground(element, true, true);
      const originalForeground: TinyColor = new TinyColor(styles.color);

      const skipReason: ISkipReason = ColorContrastUtility.elementShouldBeSkipped(
        element,
        styles,
        determinedBackground,
        includeHidden
      );

      if (skipReason.elementShouldBeSkipped) {
        const skipReportingCases: $auditRuleNodeSkipReason[] = [$auditRuleNodeSkipReason.onePxSize, $auditRuleNodeSkipReason.skipHiddenElements_elementNotVisible];

        if (typeof skipReason.reason === 'string' && skipReportingCases.includes(skipReason.reason)) {
          return;
        }

        const backgroundStyle: string | undefined = Css.getStyle(element, 'background-color');
        const foregroundStyle: string | undefined = Css.getStyle(element, 'color');

        report.metaData = {
          contrastBackground: backgroundStyle ?? 'transparent',
          contrastColor: foregroundStyle ?? 'transparent',
          contrastRatio: '0'
        };

        if (skipReason.reason === $auditRuleNodeSkipReason.positionFixed) {
          report.messageTranslation.push({
            messageTranslationId: 'skip_reason_positionFixed',
            messageTranslationParams: [styles.position]
          });
          report.skipReason = $auditRuleNodeSkipReason.positionFixed;
          report.requiresManualVerification = true;

          this.validator.report(report);

          return;
        }

        if (skipReason.reason === $auditRuleNodeSkipReason.positionSticky) {
          report.messageTranslation.push({
            messageTranslationId: 'skip_reason_positionSticky',
            messageTranslationParams: [styles.position]
          });
          report.skipReason = $auditRuleNodeSkipReason.positionSticky;
          report.requiresManualVerification = true;

          this.validator.report(report);

          return;
        }

        if (skipReason.reason === $auditRuleNodeSkipReason.sameForegroundBackgroundColorOnElement) {
          report.messageTranslation.push({
            messageTranslationId: 'color_contrast_aa_report_message_6',
            messageTranslationParams: [
              determinedBackground.elementBackgroundColor.originalInput.toString(),
              originalForeground.originalInput.toString()
            ]
          });
          report.skipReason = $auditRuleNodeSkipReason.sameForegroundBackgroundColorOnElement;
          report.requiresManualVerification = true;

          this.validator.report(report);

          return;
        }

        if (skipReason.reason === $auditRuleNodeSkipReason.sameForegroundBackgroundColorOnElementAndParent) {
          report.messageTranslation.push({
            messageTranslationId: 'color_contrast_aa_report_message_6',
            messageTranslationParams: [
              determinedBackground.determinedBackgroundColor.originalInput.toString(),
              originalForeground.originalInput.toString()
            ]
          });
          report.skipReason = $auditRuleNodeSkipReason.sameForegroundBackgroundColorOnElementAndParent;
          report.requiresManualVerification = true;

          this.validator.report(report);

          return;
        }

        if (skipReason.reason === $auditRuleNodeSkipReason.determinedSemiTransparentBackground) {
          report.messageTranslation.push({
            messageTranslationId: 'color_contrast_aa_report_message_7',
            messageTranslationParams: [
              determinedBackground.determinedBackgroundColor.originalInput.toString(),
              originalForeground.originalInput.toString(),
              String(determinedBackground.determinedBackgroundColor.getAlpha())
            ]
          });
          report.skipReason = $auditRuleNodeSkipReason.determinedSemiTransparentBackground;
          report.requiresManualVerification = true;

          this.validator.report(report);

          return;
        }

        if (skipReason.reason === $auditRuleNodeSkipReason.elementHasSemiOpacity) {
          report.messageTranslation.push({
            messageTranslationId: 'color_contrast_aa_report_message_8',
            messageTranslationParams: [
              determinedBackground.determinedBackgroundColor.originalInput.toString(),
              originalForeground.originalInput.toString(),
              styles.opacity
            ]
          });
          report.skipReason = $auditRuleNodeSkipReason.elementHasSemiOpacity;
          report.requiresManualVerification = true;

          this.validator.report(report);

          return;
        }

        if (skipReason.reason === $auditRuleNodeSkipReason.elementHasMixBlendMode) {
          report.messageTranslation.push({
            messageTranslationId: 'color_contrast_aa_report_message_9',
            messageTranslationParams: [
              determinedBackground.determinedBackgroundColor.originalInput.toString(),
              originalForeground.originalInput.toString(),
              styles.mixBlendMode
            ]
          });
          report.skipReason = $auditRuleNodeSkipReason.elementHasMixBlendMode;
          report.requiresManualVerification = true;

          this.validator.report(report);

          return;
        }

        report.messageTranslation.push({
          messageTranslationId: `skip_reason_${skipReason.reason}`
        });
        report.requiresManualVerification = true;
        report.skipReason = skipReason.reason;

        this.validator.report(report);

        return;
      }

      const fgColor: TinyColor = new TinyColor(styles.color);

      fgColor.setAlpha(styles.opacity);

      const contrastRatio: string = String(
        Number.parseFloat(readability(determinedBackground.determinedBackgroundColor, fgColor).toFixed(2))
      );
      const originalFontSize: string | undefined = Css.getStyle(element, 'font-size');

      if (originalFontSize === undefined) {
        report.messageTranslation.push({
          messageTranslationId: `skip_reason_${$auditRuleNodeSkipReason.specifiedStylesCantBeDetermined}`,
          messageTranslationParams: ['font-size']
        });
        report.skipReason = $auditRuleNodeSkipReason.specifiedStylesCantBeDetermined;

        this.validator.report(report);

        return;
      }

      report.metaData = {
        contrastAPCA: Math.round(
          Math.abs(
            Number(
              APCAcontrast(fgColor.getLuminance(), determinedBackground.determinedBackgroundColor.getLuminance())
            )
          )
        )
      };

      const fontSizeInPt: number = Css.covertPxToPt(originalFontSize, true);
      const fontWeight: string | undefined = Css.getStyle(element, 'font-weight');

      if (Css.isLargeText(element)) {
        const isReadableLargeSize: boolean = isReadable(determinedBackground.determinedBackgroundColor, fgColor, {
          level: 'AA',
          size: 'large'
        });

        if (isReadableLargeSize) {
          return;
        }

        const closesetColors: IFindClosesetColors = ColorContrastUtility.findClosestColorsThatPassesContrastRatio(
          determinedBackground.determinedBackgroundColor.toHexString(),
          fgColor.toHexString(),
          ColorContrastRatio.minimum_aa
        );

        report.messageTranslation.push({
          messageTranslationId: 'color_contrast_aa_report_message_4',
          messageTranslationParams: [
            `${contrastRatio}`,
            `${determinedBackground.determinedBackgroundColor.toHexString()}`,
            `${fgColor.toHexString()}`,
            `${fontSizeInPt}pt`,
            `${originalFontSize}`,
            fontWeight ? fontWeight : ''
          ]
        });

        if (closesetColors.background.length > 0 && closesetColors.foreground.length > 0) {
          report.messageTranslation.push({
            messageTranslationId: 'color_contrast_suggestion_foreground_background',
            messageTranslationParams: [
              ColorsUtility.RGBtoHEX(closesetColors.foreground[0]!.color),
              ColorsUtility.RGBtoHEX(closesetColors.background[0]!.color)
            ]
          });
        } else if (closesetColors.background.length === 0 && closesetColors.foreground.length > 0) {
          report.messageTranslation.push({
            messageTranslationId: 'color_contrast_suggestion_foreground',
            messageTranslationParams: [
              ColorsUtility.RGBtoHEX(closesetColors.foreground[0]!.color)
            ]
          });
        } else if (closesetColors.background.length > 0 && closesetColors.foreground.length === 0) {
          report.messageTranslation.push({
            messageTranslationId: 'color_contrast_suggestion_background',
            messageTranslationParams: [
              ColorsUtility.RGBtoHEX(closesetColors.background[0]!.color)
            ]
          });
        }

        report.metaData.contrastBackground = determinedBackground.determinedBackgroundColor.toRgbString();
        report.metaData.contrastColor = fgColor.toRgbString();

        this.validator.report(report);

        return;
      }

      const isReadableSmallSize: boolean = isReadable(determinedBackground.determinedBackgroundColor, fgColor, {
        level: 'AA',
        size: 'small'
      });

      if (isReadableSmallSize === false) {
        report.messageTranslation.push({
          messageTranslationId: 'color_contrast_aa_report_message_5',
          messageTranslationParams: [
            `${contrastRatio}`,
            `${determinedBackground.determinedBackgroundColor.toHexString()}`,
            `${fgColor.toHexString()}`,
            `${fontSizeInPt}pt`,
            `${originalFontSize}`,
            fontWeight ? fontWeight : ''
          ]
        });

        const closesetColors: IFindClosesetColors = ColorContrastUtility.findClosestColorsThatPassesContrastRatio(
          determinedBackground.determinedBackgroundColor.toHexString(),
          fgColor.toHexString(),
          ColorContrastRatio.standard_aa
        );

        if (closesetColors.background.length > 0 && closesetColors.foreground.length > 0) {
          report.messageTranslation.push({
            messageTranslationId: 'color_contrast_suggestion_foreground_background',
            messageTranslationParams: [
              ColorsUtility.RGBtoHEX(closesetColors.foreground[0]!.color),
              ColorsUtility.RGBtoHEX(closesetColors.background[0]!.color)
            ]
          });
        } else if (closesetColors.background.length === 0 && closesetColors.foreground.length > 0) {
          report.messageTranslation.push({
            messageTranslationId: 'color_contrast_suggestion_foreground',
            messageTranslationParams: [
              ColorsUtility.RGBtoHEX(closesetColors.foreground[0]!.color)
            ]
          });
        } else if (closesetColors.background.length > 0 && closesetColors.foreground.length === 0) {
          report.messageTranslation.push({
            messageTranslationId: 'color_contrast_suggestion_background',
            messageTranslationParams: [
              ColorsUtility.RGBtoHEX(closesetColors.background[0]!.color)
            ]
          });
        }

        report.metaData.contrastBackground = determinedBackground.determinedBackgroundColor.toRgbString();
        report.metaData.contrastColor = fgColor.toRgbString();

        this.validator.report(report);
      }
    };

    for (const element of htmlElements) {
      checkColorContrast(element);
    }
  }
}
