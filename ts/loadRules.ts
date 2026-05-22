import { Config } from '../config';
import { $runnerSettings, auditsStandards } from '../constants/auditor';
import type { IAuditRule } from '../interfaces/audit-rule.interface';
import { ObjectUtility } from '../utils/object';
import type { AbstractRule } from './abstract-rule';

import { Abbreviations } from './wcag/3.1.4/abbreviations';
import { AccessibleAuthentication } from './wcag/3.3.8/accessible-authentication';
import { AccessibleAuthenticationEnhanced } from './wcag/3.3.9/accessible-authentication-enhanced';
import { AccessibleNameMismatchElementDescription } from './wcag/2.5.3/accessible-name-mismatch-element-description';
import { AccessibleSvg } from './wcag/1.1.1/F65/accessible-svg';
import { AltTextIncludeFilename } from './wcag/1.1.1/F30/alt-text-include-filename';
import { Animation } from './wcag/2.2.2/F16/animation';
import { AnimationInteraction } from './wcag/2.3.3/animation-interaction';
import { AppletMissingAlt } from './wcag/1.1.1/H35/applet-missing-alt';
import { AreaMissingAlt } from './wcag/1.1.1/H24/a-area-missing-alt';
import { AriaAttributeConflict } from './auditor/accessibility/aria-attribute-conflict/aria-attribute-conflict';
import { AriaDescribedbyAssociation } from './wcag/1.3.1/ARIA1/aria-describedby-association';
import { AriaHiddenFalse } from './auditor/accessibility/aria-hidden-false/aria-hidden-false';
import { AriaHiddenTrueFocusableElements } from './wcag/4.1.2/aria-hidden-true-focusable-descendants';
import { AriaLabelledbyAssociation } from './wcag/2.4.4/aria-labelledby-association';
import { AriaLabelledbyAssociationEmptyElement } from './wcag/2.4.4/aria-labelledby-association-empty-element';
import { AriaRoleDialog } from './auditor/accessibility/aria-role-dialog/aria-role-dialog';
import { AudioControl } from './wcag/1.4.2/audio-control';
import { AudioDescriptionOrMediaAlternative } from './wcag/1.2.3/audio-description-or-media-alternative';
import { AudioDescriptionPrerecorded } from './wcag/1.2.5/audio-description-prerecorded';
import { AudioOnlyLive } from './wcag/1.2.9/audio-only-live';
import { AutocompleteAttributeUsage } from './wcag/1.3.5/H98/autocomplete-attribute-usage';
import { AutoplayAudioVideo } from './wcag/1.4.2/autoplay-audio-video';
import { BrokenSamePageLink } from './wcag/2.1.1/broken-same-page-link';
import { BypassBlocks } from './wcag/2.4.1/bypass-blocks';
import { CapitalLettersWords } from './auditor/accessibility/capital-letters-words/capital-letters-words';
import { CaptionsLive } from './wcag/1.2.4/captions-live';
import { CaptionsPrerecorded } from './wcag/1.2.2/captions-prerecorded';
import { ChangeOnRequest } from './wcag/3.2.5/change-on-request';
import { CharacterKeyShortcuts } from './wcag/2.1.4/character-key-shortcuts';
import { ColorContrastA2 } from './wcag/1.4.3/G18/color-contrast-aa';
import { ColorContrastA3 } from './wcag/1.4.6/G17/color-contrast-aaa';
import { ConcurrentInputMechanisms } from './wcag/2.5.6/concurrent-input-mechanisms';
import { ConsistentHelp } from './wcag/3.2.6/consistent-help';
import { ConsistentIdentification } from './wcag/3.2.4/consistent-identification';
import { ConsistentNavigation } from './wcag/3.2.3/consistent-navigation';
import { ConsoleLogError } from './auditor/logs/logs-error';
import { ContentEditableMissingAttributes } from './auditor/accessibility/content-editable-missing-attributes/content-editable-missing-attributes';
import { ContentOnHoverFocus } from './wcag/1.4.13/content-on-hover-focus';
import { ContentWiderThanScreen } from './auditor/quality/content-wider-than-screen/content-wider-than-screen';
import { ContentinfoLandmarkOnlyOne } from './auditor/accessibility/contentinfo-landmark-only-one/contentinfo-landmark-only-one';
import { DraggingMovements } from './wcag/2.5.7/dragging-movements';
import { DuplicatedForAttribute } from './wcag/1.3.1/H93/duplicated-for-attribute';
import { DuplicatedIdAttribute } from './wcag/4.1.1/F77/duplicated-id-attribute';
import { ElementsNotAllowed } from './auditor/accessibility/elements-not-allowed-in-head/elements-not-allowed-in-head';
import { EmptyButtonDescription } from './wcag/4.1.2/H91/empty-button-description';
import { EmptyHeading } from './wcag/2.4.6/G130/empty-heading';
import { EmptyLabelElement } from './wcag/1.3.1/H44/empty-label-element';
import { EmptyLinkElement } from './wcag/2.4.4/H30/empty-link-element';
import { EmptyTitleAttribute } from './auditor/accessibility/empty-title-attribute/empty-title-attribute';
import { ErrorIdentification } from './wcag/3.3.1/error-identification';
import { ErrorPrevention } from './wcag/3.3.4/error-prevention';
import { ErrorPreventionAllForms } from './wcag/3.3.6/error-prevention-all-forms';
import { ErrorSuggestion } from './wcag/3.3.3/error-suggestion';
import { ExcessiveCssClassesSize } from './auditor/performance/excessive-css-classes-size/excessive-css-classes-size';
import { ExtendedAudioDescriptionPrerecorded } from './wcag/1.2.7/extended-audio-description-prerecorded';
import { FieldsetNoLegend } from './wcag/1.3.1/H71/fieldset-no-legend';
import { FirstContentfulPaint } from './auditor/performance/first-contentful-paint/first-contentful-paint';
import { FocusAppearance } from './wcag/2.4.13/focus-appearance';
import { FocusNotObscuredEnhanced } from './wcag/2.4.12/focus-not-obscured-enhanced';
import { FocusNotObscuredMinimum } from './wcag/2.4.11/focus-not-obscured-minimum';
import { FocusOrderPreserved } from './wcag/2.4.3/focus-order-preserved';
import { FocusVisible } from './wcag/2.4.7/focus-visible';
import { FontStyleItalic } from './auditor/accessibility/font-style-italic/font-style-italic';
import { GroupElementsNameAttribute } from './wcag/1.3.1/H71/group-elements-name-attribute';
import { H1Length } from './auditor/seo/h1-length/h1-length';
import { H1MustBe } from './auditor/accessibility/h1-must-be/h1-must-be';
import { H1OnlyOne } from './auditor/seo/h1-only-one/h1-only-one';
import { HeadingSemanticsIncorrect } from './wcag/1.3.1/heading-semantics-incorrect';
import { HeadingsHierarchy } from './wcag/1.3.1/G141/headings-hierarchy';
import { HeadingsSiblingUnique } from './auditor/accessibility/headings-sibling-unique/headings-sibling-unique';
import { HelpProvided } from './wcag/3.3.5/help-provided';
import { HorizontalRule } from './auditor/accessibility/horizontal-rule/horizontal-rule';
import { HtmlLangAttr } from './wcag/3.1.1/html-lang-attr';
import { IdentifyInputPurpose } from './wcag/1.3.5/identify-input-purpose';
import { IdentifyPurpose } from './wcag/1.3.6/identify-purpose';
import { IllegalCharacterInLinkDomain } from './auditor/quality/illegal-character-in-link-domain/illegal-character-in-link-domain';
import { ImagesOfText } from './wcag/1.4.5/images-of-text';
import { ImagesOfTextNoException } from './wcag/1.4.9/images-of-text-no-exception';
import { ImgAdjacentDuplicateTextLink } from './wcag/1.1.1/img-adjacent-duplicate-text-link';
import { ImgAltDuplicateTextLink } from './wcag/2.4.4/img-alt-duplicate-text-link';
import { ImgEmptyAltInLink } from './wcag/1.1.1/H30/img-empty-alt-in-link';
import { ImgEmptyAltWithEmptyTitle } from './wcag/1.1.1/H67/img-empty-alt-with-empty-title';
import { IncorrectDocumentMimeType } from './auditor/quality/incorrect-document-mime-type/incorrect-document-mime-type';
import { IncorrectTechniqueForHidingContent } from './auditor/accessibility/incorrect-technique-for-hiding-content/incorrect-technique-for-hiding-content';
import { InputImageMissingAlt } from './wcag/1.1.1/H36/input-image-missing-alt';
import { InterruptionsPostponed } from './wcag/2.2.4/interruptions-postponed';
import { InvalidAttributeDirValue } from './auditor/accessibility/invalid-attribute-dir-value/invalid-attribute-dir-value';
import { InvisibleImageLoaded } from './auditor/performance/invisible-image-loaded/invisible-image-loaded';
import { KeyboardFunctionality } from './wcag/2.1.1/keyboard-functionality';
import { KeyboardNoException } from './wcag/2.1.3/keyboard-no-exception';
import { LabelDuplicatedContentTitle } from './auditor/accessibility/label-duplicated-content-title/label-duplicated-content-title';
import { LabelImplicitlyAssociated } from './wcag/1.3.1/H44/label-implicitly-associated';
import { LabelInappropriateAssociation } from './wcag/1.3.1/H44/label-inappropriate-association';
import { LandmarksNone } from './auditor/accessibility/landmarks-none/landmarks-none';
import { LanguageOfParts } from './wcag/3.1.2/language-of-parts';
import { LayoutShiftsWithFontDisplay } from './auditor/performance/layout-shifts-with-font-display/layout-shifts-with-font-display';
import { LegendFirstChildOfFieldSet } from './wcag/3.3.2/H71/legend-first-child-of-fieldset';
import { LinkPurposeInContext } from './wcag/2.4.4/link-purpose-in-context';
import { LinkWithUnclearPurpose } from './wcag/2.4.9/F84/link-with-unclear-purpose';
import { LinksNotVisuallyEvidentWithoutColorVision } from './wcag/1.4.1/F73/links-not-visually-evident-without-color-vision';
import { LinksSameContentDifferenceUrl } from './wcag/2.4.4/H30/links-same-content-different-url';
import { LocalResourceLeak } from './auditor/security/local-resource-leak/local-resource-leak';
import { LocationIndicator } from './wcag/2.4.8/location-indicator';
import { LowOrNoBackgroundAudio } from './wcag/1.4.7/low-or-no-background-audio';
import { MainElementOnlyOne } from './auditor/accessibility/main-element-only-one/main-element-only-one';
import { MainLandmarkMustBeTopLevel } from './auditor/accessibility/main-landmark-must-be-top-level/main-landmark-must-be-top-level';
import { MalformedJsonLd } from './auditor/seo/malformed-json-ld/malformed-json-ld';
import { ManifestExtension } from './auditor/quality/manifest-extension/manifest-extension';
import { MeaningfulSequence } from './wcag/1.3.2/meaningful-sequence';
import { MediaAlternativePrerecorded } from './wcag/1.2.8/media-alternative-prerecorded';
import { MetaDescriptionTooLongOrTooShort } from './auditor/seo/meta-description-too-long-or-too-short/meta-description-too-long-or-too-short';
import { MetaDescriptionTruncation } from './auditor/seo/meta-description-truncation/meta-description-truncation';
import { MinimumFontSize } from './auditor/accessibility/minimum-font-size/minimum-font-size';
import { MissingAltAttribute } from './wcag/1.1.1/F65/missing-alt-attribute';
import { MissingCharset } from './auditor/quality/missing-charset/missing-charset';
import { MissingFavicon } from './auditor/seo/missing-favicon/missing-favicon';
import { MissingHrefOnA } from './auditor/accessibility/missing-href-on-a/missing-href-on-a';
import { MissingHttpsProtocol } from './auditor/security/missing-https-protocol/missing-https-protocol';
import { MissingLabel } from './wcag/3.3.2/H44/missing-label';
import { MissingOpenGraph } from './auditor/seo/missing-open-graph/missing-open-graph';
import { MissingProtocolHttp2 } from './auditor/performance/missing-protocol-http2/missing-protocol-http2';
import { MissingRelNoopener } from './auditor/security/missing-rel-noopener/missing-rel-noopener';
import { MissingSubmitButton } from './wcag/3.2.2/H32/missing-submit-button';
import { MisusedAriaOnFocusableElement } from './auditor/accessibility/misused-aria-on-focusable-element/misused-aria-on-focusable-element';
import { MisusedInputAttribute } from './auditor/accessibility/misused-input-attribute/misused-input-attribute';
import { MisusedRequiredAttribute } from './auditor/accessibility/misused-required-attribute/misused-required-attribute';
import { MisusedTabindexAttribute } from './wcag/2.4.3/H4/misused-tabindex-attribute';
import { MixedContentOnHttps } from './auditor/security/mixed-content-on-https/mixed-content-on-https';
import { MotionActuation } from './wcag/2.5.4/motion-actuation';
import { MultipleWays } from './wcag/2.4.5/multiple-ways';
import { NavigationLandmarkRestrictions } from './auditor/accessibility/navigation-landmark-restrictions/navigation-landmark-restrictions';
import { NoHeadings } from './wcag/2.4.10/no-headings';
import { NoindexFollowConflict } from './auditor/seo/noindex-follow-conflict/noindex-follow-conflict';
import { NoKeyboardTrap } from './wcag/2.1.2/no-keyboard-trap';
import { NoMetaHttpEquivRefresh } from './wcag/2.2.1/F41/no-meta-http-equiv-refresh';
import { NoTiming } from './wcag/2.2.3/no-timing';
import { NonTextContrast } from './wcag/1.4.11/non-text-contrast';
import { ObjectMissingBody } from './wcag/1.1.1/H53/object-missing-body';
import { ObsoleteHtmlAttributes } from './auditor/accessibility/obsolete-html-attributes/obsolete-html-attributes';
import { ObsoleteHtmlElements } from './auditor/accessibility/obsolete-html-elements/obsolete-html-elements';
import { OnFocus } from './wcag/3.2.1/on-focus';
import { OnInput } from './wcag/3.2.2/G13/on-input';
import { Orientation } from './wcag/1.3.4/orientation';
import { Overlay } from './auditor/accessibility/overlay/overlay';
import { OversizedImages } from './auditor/performance/oversized-images/oversized-images';
import { PageTitleLength } from './auditor/seo/page-title-length/page-title-length';
import { PageTitleWordsNotIncludedInUrl } from './auditor/seo/page-title-words-not-included-in-url/page-title-words-not-included-in-url';
import { Parsing } from './wcag/4.1.1/parsing';
import { PointerCancellation } from './wcag/2.5.2/pointer-cancellation';
import { PointerGestures } from './wcag/2.5.1/pointer-gestures';
import { PositiveTabindex } from './wcag/2.4.3/H4/positive-tabindex';
import { PronunciationClarification } from './wcag/3.1.6/pronunciation-clarification';
import { ReAuthentication } from './wcag/2.2.5/re-authentication';
import { ReadingLevelSummary } from './wcag/3.1.5/reading-level';
import { RedundantEntry } from './wcag/3.3.7/redundant-entry';
import { ReflowContent } from './wcag/1.4.10/reflow-content';
import { RtlContent } from './auditor/accessibility/rtl-content/rtl-content';
import { SameTargetAnchorTextMoreThanOnce } from './auditor/seo/same-target-anchor-text-more-than-once/same-target-anchor-text-more-than-once';
import { SensoryCharacteristics } from './wcag/1.3.3/sensory-characteristics';
import { SignLanguagePrerecorded } from './wcag/1.2.6/sign-language-prerecorded';
import { StatusMessages } from './wcag/4.1.3/status-messages';
import { SubresourceIntegrity } from './auditor/security/subresource-integrity/subresource-integrity';
import { SvgIncorrectSizeUnit } from './auditor/quality/svg-incorrect-size-unit/svg-incorrect-size-unit';
import { SvgSpriteMissing } from './auditor/performance/svg-sprite-missing/svg-sprite-missing';
import { SvgTooLarge } from './auditor/performance/svg-too-large/svg-too-large';
import { TabMissingTablistOwner } from './wcag/1.3.1/tab-missing-tablist-owner/tab-missing-tablist-owner';
import { TableCaptionSummaryIdentical } from './wcag/1.3.1/H39/table-caption-summary-identical';
import { TableMissingDescription } from './wcag/1.3.1/H39/table-missing-description';
import { TableRowAndColumnHeaders } from './wcag/1.3.1/H51/table-row-and-column-headers';
import { TargetSizeEnhanced } from './wcag/2.5.5/target-size-enhanced';
import { TargetSizeMinimum } from './wcag/2.5.8/target-size-minimum';
import { TextColorConveyInformation } from './wcag/1.4.1/G14/text-color-convey-information';
import { TextSpacing } from './wcag/1.4.12/text-spacing';
import { ThreeFlashesNoException } from './wcag/2.3.2/three-flashes-no-exception';
import { ThreeFlashesThreshold } from './wcag/2.3.1/three-flashes-threshold';
import { Timeouts } from './wcag/2.2.6/timeouts';
import { TitleForAbbr } from './wcag/3.1.4/H28/title-for-abbr';
import { TitleiFrame } from './wcag/4.1.2/H64/title-iframe';
import { UnclearAnchorUri } from './auditor/accessibility/unclear-uri-on-a/unclear-anchor-url';
import { UnclearImageDescription } from './auditor/accessibility/unclear-image-description/unclear-image-description';
import { UnclearPageTitle } from './wcag/2.4.2/H25/unclear-page-title';
import { UnsupportedRoleOnElement } from './auditor/accessibility/unsupported-role-on-element/unsupported-role-on-element';
import { UnusualWordsDefinition } from './wcag/3.1.3/unusual-words-definition';
import { VideoAudioDescriptions } from './wcag/1.2.1/H96/video-audio-descriptions';
import { VisualPresentationCustomization } from './wcag/1.4.8/visual-presentation-customization';
import { ZoomDisabled } from './wcag/1.4.4/zoom-disabled';

export class LoadRules {
  private defaultRuleInstances: AbstractRule[];

  constructor() {
    this.defaultRuleInstances = [];
  }

  public get defaultRules(): AbstractRule[] {
    if (Array.isArray(this.defaultRuleInstances) && this.defaultRuleInstances.length > 0) {
      return this.defaultRuleInstances;
    }

    this.defaultRuleInstances = [
      new Abbreviations(),
      new AccessibleAuthentication(),
      new AccessibleAuthenticationEnhanced(),
      new AccessibleNameMismatchElementDescription(),
      new AccessibleSvg(),
      new AltTextIncludeFilename(),
      new Animation(),
      new AnimationInteraction(),
      new AppletMissingAlt(),
      new AreaMissingAlt(),
      new AriaAttributeConflict(),
      new AriaDescribedbyAssociation(),
      new AriaHiddenFalse(),
      new AriaHiddenTrueFocusableElements(),
      new AriaLabelledbyAssociation(),
      new AriaLabelledbyAssociationEmptyElement(),
      new AriaRoleDialog(),
      new AudioControl(),
      new AudioDescriptionOrMediaAlternative(),
      new AudioDescriptionPrerecorded(),
      new AudioOnlyLive(),
      new AutocompleteAttributeUsage(),
      new AutoplayAudioVideo(),
      new BrokenSamePageLink(),
      new BypassBlocks(),
      new CapitalLettersWords(),
      new CaptionsLive(),
      new CaptionsPrerecorded(),
      new ChangeOnRequest(),
      new CharacterKeyShortcuts(),
      new ColorContrastA2(),
      new ColorContrastA3(),
      new ConcurrentInputMechanisms(),
      new ConsistentHelp(),
      new ConsistentIdentification(),
      new ConsistentNavigation(),
      new ConsoleLogError(),
      new ContentEditableMissingAttributes(),
      new ContentOnHoverFocus(),
      new ContentWiderThanScreen(),
      new ContentinfoLandmarkOnlyOne(),
      new DraggingMovements(),
      new DuplicatedForAttribute(),
      new DuplicatedIdAttribute(),
      new ElementsNotAllowed(),
      new EmptyButtonDescription(),
      new EmptyHeading(),
      new EmptyLabelElement(),
      new EmptyLinkElement(),
      new EmptyTitleAttribute(),
      new ErrorIdentification(),
      new ErrorPrevention(),
      new ErrorPreventionAllForms(),
      new ErrorSuggestion(),
      new ExcessiveCssClassesSize(),
      new ExtendedAudioDescriptionPrerecorded(),
      new FieldsetNoLegend(),
      new FirstContentfulPaint(),
      new FocusAppearance(),
      new FocusNotObscuredEnhanced(),
      new FocusNotObscuredMinimum(),
      new FocusOrderPreserved(),
      new FocusVisible(),
      new FontStyleItalic(),
      new GroupElementsNameAttribute(),
      new H1Length(),
      new H1MustBe(),
      new H1OnlyOne(),
      new HeadingsHierarchy(),
      new HeadingSemanticsIncorrect(),
      new HeadingsSiblingUnique(),
      new HelpProvided(),
      new HorizontalRule(),
      new HtmlLangAttr(),
      new IdentifyInputPurpose(),
      new IdentifyPurpose(),
      new IllegalCharacterInLinkDomain(),
      new ImagesOfText(),
      new ImagesOfTextNoException(),
      new ImgAdjacentDuplicateTextLink(),
      new ImgAltDuplicateTextLink(),
      new ImgEmptyAltInLink(),
      new ImgEmptyAltWithEmptyTitle(),
      new IncorrectDocumentMimeType(),
      new IncorrectTechniqueForHidingContent(),
      new InputImageMissingAlt(),
      new InterruptionsPostponed(),
      new InvalidAttributeDirValue(),
      new InvisibleImageLoaded(),
      new KeyboardFunctionality(),
      new KeyboardNoException(),
      new LabelDuplicatedContentTitle(),
      new LabelImplicitlyAssociated(),
      new LabelInappropriateAssociation(),
      new LandmarksNone(),
      new LanguageOfParts(),
      new LayoutShiftsWithFontDisplay(),
      new LegendFirstChildOfFieldSet(),
      new LinkPurposeInContext(),
      new LinkWithUnclearPurpose(),
      new LinksNotVisuallyEvidentWithoutColorVision(),
      new LinksSameContentDifferenceUrl(),
      new LocalResourceLeak(),
      new LocationIndicator(),
      new LowOrNoBackgroundAudio(),
      new MainElementOnlyOne(),
      new MainLandmarkMustBeTopLevel(),
      new MalformedJsonLd(),
      new ManifestExtension(),
      new MeaningfulSequence(),
      new MediaAlternativePrerecorded(),
      new MetaDescriptionTooLongOrTooShort(),
      new MetaDescriptionTruncation(),
      new MinimumFontSize(),
      new MissingAltAttribute(),
      new MissingCharset(),
      new MissingFavicon(),
      new MissingHrefOnA(),
      new MissingHttpsProtocol(),
      new MissingLabel(),
      new MissingOpenGraph(),
      new MissingProtocolHttp2(),
      new MissingRelNoopener(),
      new MissingSubmitButton(),
      new MisusedAriaOnFocusableElement(),
      new MisusedInputAttribute(),
      new MisusedRequiredAttribute(),
      new MisusedTabindexAttribute(),
      new MixedContentOnHttps(),
      new MotionActuation(),
      new MultipleWays(),
      new NavigationLandmarkRestrictions(),
      new NoHeadings(),
      new NoindexFollowConflict(),
      new NoKeyboardTrap(),
      new NoMetaHttpEquivRefresh(),
      new NoTiming(),
      new NonTextContrast(),
      new ObjectMissingBody(),
      new ObsoleteHtmlAttributes(),
      new ObsoleteHtmlElements(),
      new OnFocus(),
      new OnInput(),
      new Orientation(),
      new Overlay(),
      new OversizedImages(),
      new PageTitleLength(),
      new PageTitleWordsNotIncludedInUrl(),
      new Parsing(),
      new PointerCancellation(),
      new PointerGestures(),
      new PositiveTabindex(),
      new PronunciationClarification(),
      new ReAuthentication(),
      new ReadingLevelSummary(),
      new RedundantEntry(),
      new ReflowContent(),
      new RtlContent(),
      new SameTargetAnchorTextMoreThanOnce(),
      new SensoryCharacteristics(),
      new SignLanguagePrerecorded(),
      new StatusMessages(),
      new SubresourceIntegrity(),
      new SvgIncorrectSizeUnit(),
      new SvgSpriteMissing(),
      new SvgTooLarge(),
      new TabMissingTablistOwner(),
      new TableCaptionSummaryIdentical(),
      new TableMissingDescription(),
      new TableRowAndColumnHeaders(),
      new TargetSizeEnhanced(),
      new TargetSizeMinimum(),
      new TextColorConveyInformation(),
      new TextSpacing(),
      new ThreeFlashesNoException(),
      new ThreeFlashesThreshold(),
      new Timeouts(),
      new TitleForAbbr(),
      new TitleiFrame(),
      new UnclearAnchorUri(),
      new UnclearImageDescription(),
      new UnclearPageTitle(),
      new UnsupportedRoleOnElement(),
      new UnusualWordsDefinition(),
      new VideoAudioDescriptions(),
      new VisualPresentationCustomization(),
      new ZoomDisabled()
    ];

    return this.defaultRuleInstances;
  }

  public get defaultRulesNames(): string[] {
    const getRuleId = (rule: AbstractRule): string => {
      return rule.id;
    };

    return this.defaultRules.map(getRuleId);
  }

  public registerDefaultRulesForValidator(): void {
    const registerRule = (rule: AbstractRule): void => {
      const customRuleConfig: IAuditRule | undefined = Config.get($runnerSettings.rules)[rule.id];

      if (ObjectUtility.getTypeOf(customRuleConfig) === 'object') {
        Config.get($runnerSettings.rules)[rule.id] = ObjectUtility.deepMerge(auditsStandards[rule.id as keyof typeof auditsStandards], customRuleConfig);
      } else if (!Config.get($runnerSettings.skipDefaultRules)) {
        Config.get($runnerSettings.rules)[rule.id] = ObjectUtility.deepMerge(auditsStandards[rule.id as keyof typeof auditsStandards], rule.config);
      }

      rule.registerValidator();
    };

    this.defaultRules.forEach(registerRule);
  }

}
