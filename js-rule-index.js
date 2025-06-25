window.siteLintRules = [
  {
    number: 1,
    ruleId: "accessible-name-mismatch-element-description",
    title: "Form control should be correctly associated with its label to be accessible.",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag21/2/2.5/2.5.3/accessible-name-mismatch-element-description.ts"
  },
  {
    number: 2,
    ruleId: "alt-text-include-filename",
    title: "The alt text of an image should describe the image's content, not its filename",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/F30/alt-text-include-filename.ts"
  },
  {
    number: 3,
    ruleId: "animation",
    title: "Animations should not loop indefinitely",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.2/2.2.2/F16/animation.ts"
  },
  {
    number: 4,
    ruleId: "applet-missing-alt",
    title: "Applets must have a text alternative when not supported",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H35/applet-missing-alt.ts"
  },
  {
    number: 5,
    ruleId: "aria-describedby-association",
    title: "Use <aria-describedby> to provide additional descriptions and context for elements (e.g., images, form fields) that need it",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/ARIA1/aria-describedby-association.ts"
  },
  {
    number: 6,
    ruleId: "aria-hidden-false",
    title: "Use caution with <aria-hidden=\"false\"> because content may still be exposed unintentionally",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/aria-hidden-false/aria-hidden-false.ts"
  },
  {
    number: 7,
    ruleId: "aria-hidden-true-focusable-descendants",
    title: "Focusable elements should not be hidden from assistive technologies",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/4/4.1/4.1.2/aria-hidden-true-focusable-descendants/aria-hidden-true-focusable-descendants.ts"
  },
  {
    number: 8,
    ruleId: "aria-labelledby-association",
    title: "The <aria-labelledby> attribute must reference an existing element",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.4/aria-labelledby-association.ts"
  },
  {
    number: 9,
    ruleId: "aria-labelledby-association-empty-element",
    title: "An <aria-labelledby> attribute must reference an element that contains meaningful content",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.4/aria-labelledby-association-empty-element.ts"
  },
  {
    number: 10,
    ruleId: "aria-role-dialog",
    title: "Pop-ups and modals must have accessible names'",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/aria-role-dialog/aria-role-dialog.ts"
  },
  {
    number: 11,
    ruleId: "audio-alternative",
    title: "Audio content must have a text alternative",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.2/1.2.1/G158/audio-alternative.ts"
  },
  {
    number: 12,
    ruleId: "audio-video-captions",
    title: "Audio and video content need captions and subtitles",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.2/1.2.1/H95/audio-video-captions.ts"
  },
  {
    number: 13,
    ruleId: "autoplay-audio-video",
    title: "Audio and video content should not play automatically",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.2/autoplay-audio-video.ts"
  },
  {
    number: 14,
    ruleId: "broken-same-page-link",
    title: "Links must have a corresponding target",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.1/2.1.1/broken-same-page-link.ts"
  },
  {
    number: 15,
    ruleId: "capital-letters-words",
    title: "Only use all caps for acronyms",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/capital-letters-words/capital-letters-words.ts"
  },
  {
    number: 16,
    ruleId: "click-verb",
    title: "Don't use \"Click\" for link text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.4/click-verb.ts"
  },
  {
    number: 17,
    ruleId: "color-contrast-aa",
    title: "The contrast ratio should be at least 4.5:1 for normal text and 3:1 for large text against a background",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.3/G18/color-contrast-aa.ts"
  },
  {
    number: 18,
    ruleId: "color-contrast-aaa",
    title: "The contrast ratio should be at least 7:1 for normal text and 4.5:1 for large text against a background",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.6/G17/color-contrast-aaa.ts"
  },
  {
    number: 19,
    ruleId: "content-editable-missing-attributes",
    title: "Editable content (like form fields) need appropriate attributes for assistive technology",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/content-editable-missing-attributes/content-editable-missing-attributes.ts"
  },
  {
    number: 20,
    ruleId: "contentinfo-landmark-only-one",
    title: "Code role=\"contentinfo\" should be defined only once",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/contentinfo-landmark-only-one/contentinfo-landmark-only-one.ts"
  },
  {
    number: 21,
    ruleId: "aria-attribute-conflict",
    title: "Both native HTML attributes and ARIA attributes should not be used together",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/aria-attribute-conflict/aria-attribute-conflict.ts"
  },
  {
    number: 22,
    ruleId: "duplicated-for-attribute",
    title: "A single <label> element should only describe one form control",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H93/duplicated-for-attribute.ts"
  },
  {
    number: 23,
    ruleId: "duplicated-id-attribute",
    title: "Code <id> attribute should be unique",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/4/4.1/4.1.1/F77/duplicated-id-attribute.ts"
  },
  {
    number: 24,
    ruleId: "elements-not-allowed-in-head",
    title: "Invalid HTML elements in the HEAD section",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/elements-not-allowed-in-head/elements-not-allowed-in-head.ts"
  },
  {
    number: 25,
    ruleId: "empty-button-description",
    title: "Buttons must have visible, accessible content that describes their action. Empty or unreachable buttons hinder accessibility",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/4/4.1/4.1.2/H91/empty-button-description.ts"
  },
  {
    number: 26,
    ruleId: "empty-heading",
    title: "Heading element (like H1) exists but has no content",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.6/G130/empty-heading.ts"
  },
  {
    number: 27,
    ruleId: "empty-label-element",
    title: "Labels should always contain meaningful text describing the associated form control",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H44/empty-label-element.ts"
  },
  {
    number: 28,
    ruleId: "empty-link-element",
    title: "Links should have meaningful, descriptive content",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.4/H30/empty-link-element.ts"
  },
  {
    number: 29,
    ruleId: "empty-title-attribute",
    title: "Title attributes must not be empty",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/empty-title-attribute/empty-title-attribute.ts"
  },
  {
    number: 30,
    ruleId: "fieldset-no-legend",
    title: "Grouped form controls need a defined caption or description",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H71/fieldset-no-legend.ts"
  },
  {
    number: 31,
    ruleId: "flash-content",
    title: "Do not use Adobe Flash",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/flash-content/flash-content.ts"
  },
  {
    number: 32,
    ruleId: "flickering",
    title: "Avoid content that flashes more than 3 times per second",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.3/2.3.1/G19/flickering.ts"
  },
  {
    number: 33,
    ruleId: "font-style-italic",
    title: "Avoid excessive use of italic text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/font-style-italic/font-style-italic.ts"
  },
  {
    number: 34,
    ruleId: "group-elements-name-attribute",
    title: "Checkboxes should be grouped together",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H71/group-elements-name-attribute.ts"
  },
  {
    number: 35,
    ruleId: "h1-must-be",
    title: "Pages should have an H1",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/h1-must-be/h1-must-be.ts"
  },
  {
    number: 36,
    ruleId: "headings-hierarchy",
    title: "Headings must be in order and not skip (e.g., H1 to H3)",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/G141/headings-hierarchy.ts"
  },
  {
    number: 37,
    ruleId: "headings-sibling-unique",
    title: "All headings at the same level (e.g., H2) should have unique and meaningful text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/headings-sibling-unique/headings-sibling-unique.ts"
  },
  {
    number: 38,
    ruleId: "horizontal-rule",
    title: "Use horizontal rule HR sparingly",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/horizontal-rule/horizontal-rule.ts"
  },
  {
    number: 39,
    ruleId: "html-lang-attr",
    title: "Page needs to declare the language",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/3/3.1/3.1.1/html-lang-attr.ts"
  },
  {
    number: 40,
    ruleId: "identify-input-purpose",
    title: "Invalid definition of input purpose",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag21/1/1.3/1.3.5/identify-input-purpose.ts"
  },
  {
    number: 41,
    ruleId: "a-area-missing-alt",
    title: "Image map area must have a text alternative",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H24/a-area-missing-alt.ts"
  },
  {
    number: 42,
    ruleId: "img-adjacent-duplicate-text-link",
    title: "Adjacent text and images should link to the same destination",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H2/img-adjacent-duplicate-text-link.ts"
  },
  {
    number: 43,
    ruleId: "img-alt-duplicate-text-link",
    title: "A link and its image may not have duplicate text content",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H2/img-alt-duplicate-text-link.ts"
  },
  {
    number: 44,
    ruleId: "img-empty-alt-in-link",
    title: "Image inside of a link needs an alternative description",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H30/img-empty-alt-in-link.ts"
  },
  {
    number: 45,
    ruleId: "img-empty-alt-with-empty-title",
    title: "Decorative images should not have a title attribute",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H67/img-empty-alt-with-empty-title.ts"
  },
  {
    number: 46,
    ruleId: "incorrect-label-placement",
    title: "Labels must be positioned correctly relative to inputs",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H44/incorrect-label-placement.ts"
  },
  {
    number: 47,
    ruleId: "incorrect-technique-for-hiding-content",
    title: "Don't use the CSS text-indent to hide text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/incorrect-technique-for-hiding-content/incorrect-technique-for-hiding-content.ts"
  },
  {
    number: 48,
    ruleId: "input-image-missing-alt",
    title: "Image buttons must have an alternative description of their function",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H36/input-image-missing-alt.ts"
  },
  {
    number: 49,
    ruleId: "invalid-attribute-dir-value",
    title: "The dir attribute for writing direction must be set either ltr (left to right) or rtl (right to left) as appropriate for the language",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/invalid-attribute-dir-value/invalid-attribute-dir-value.ts"
  },
  {
    number: 50,
    ruleId: "label-duplicated-content-title",
    title: "Title and element content must be distinct and complementary",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/label-duplicated-content-title/label-duplicated-content-title.ts"
  },
  {
    number: 51,
    ruleId: "label-implicitly-associated",
    title: "Labels for form elements must be clear and sufficient",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H44/label-implicitly-associated.ts"
  },
  {
    number: 52,
    ruleId: "label-inappropriate-association",
    title: "Form fields need a label explaining what it is",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H44/label-inappropriate-association.ts"
  },
  {
    number: 53,
    ruleId: "legend-first-child-of-fieldset",
    title: "When using fieldset element to group related form controls, the legend element must be the first child",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/3/3.3/3.3.2/H71/legend-first-child-of-fieldset.ts"
  },
  {
    number: 54,
    ruleId: "link-with-unclear-purpose",
    title: "Links should have descriptive, meaningful text that makes sense even when taken out of context",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.9/F84/link-with-unclear-purpose/link-with-unclear-purpose.ts"
  },
  {
    number: 55,
    ruleId: "links-not-visually-evident-without-color-vision",
    title: "Links need to be understandable and distinguishable from their surrounding text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.1/F73/links-not-visually-evident-without-color-vision.ts"
  },
  {
    number: 56,
    ruleId: "links-same-content-different-url",
    title: "Multiple text links that look the same should also link to the same content (such as \"Read more\")",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.4/H30/links-same-content-different-url.ts"
  },
  {
    number: 57,
    ruleId: "main-element-only-one",
    title: "The main element should only be defined once on a page",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/main-element-only-one/main-element-only-one.ts"
  },
  {
    number: 58,
    ruleId: "main-landmark-must-be-top-level",
    title: "Code <main> should be toplevel landmark",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/main-landmark-must-be-top-level/main-landmark-must-be-top-level.ts"
  },
  {
    number: 59,
    ruleId: "meaningful-content-sequence",
    title: "Content must be in a meaningful reading order",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.2/G57/meaningful-content-sequence.ts"
  },
  {
    number: 60,
    ruleId: "minimum-font-size",
    title: "Body text size should be at least 16px",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/minimum-font-size/minimum-font-size.ts"
  },
  {
    number: 61,
    ruleId: "missing-alt-attribute",
    title: "Non-text content must have an alternative description",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/F65/missing-alt-attribute.ts"
  },
  {
    number: 62,
    ruleId: "missing-href-on-a",
    title: "A link needs a destination to function properly",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/missing-href-on-a/missing-href-on-a.ts"
  },
  {
    number: 63,
    ruleId: "missing-label",
    title: "Form controls need labels",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/3/3.3/3.3.2/H44/missing-label.ts"
  },
  {
    number: 64,
    ruleId: "missing-submit-button",
    title: "Forms must have a submit button",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/3/3.2/3.2.2/H32/missing-submit-button.ts"
  },
  {
    number: 65,
    ruleId: "misused-aria-on-focusable-element",
    title: "Aria attribute should not be applied to elements that are already focusable and have inherent accessibility properties",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/misused-aria-on-focusable-element/misused-aria-on-focusable-element.ts"
  },
  {
    number: 66,
    ruleId: "misused-input-attribute",
    title: "Use attributes on input elements properly and only when they are needed",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/misused-input-attribute/misused-input-attribute.ts"
  },
  {
    number: 67,
    ruleId: "misused-required-attribute",
    title: "The \"required\" and \"aria-required\" attributes should not be combined on the same element",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/misused-required-attribute/misused-required-attribute.ts"
  },
  {
    number: 68,
    ruleId: "misused-tabindex-attribute",
    title: "Set <tabindex> properly to match the correct reading order of content on the page",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.3/H4/misused-tabindex-attribute.ts"
  },
  {
    number: 70,
    ruleId: "motion-actuation",
    title: "Functionality must not be triggered by motion alone",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag21/2/2.5/2.5.4/G213/motion-actuation.ts"
  },
  {
    number: 71,
    ruleId: "navigation-landmark-restrictions",
    title: "The element must only contain region or search landmarks",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/navigation-landmark-restrictions/navigation-landmark-restrictions.ts"
  },
  {
    number: 72,
    ruleId: "no-headings",
    title: "Headings (h1-h6) are essential for organizing content and creating a hierarchy",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.10/no-headings.ts"
  },
  {
    number: 73,
    ruleId: "no-meta-http-equiv-refresh",
    title: "Pages must not automatically refresh or redirect without user control",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.2/2.2.1/F41/no-meta-http-equiv-refresh.ts"
  },
  {
    number: 74,
    ruleId: "object-missing-body",
    title: "Missing text alternative for the <object>",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H53/object-missing-body.ts"
  },
  {
    number: 75,
    ruleId: "obsolete-html-attributes",
    title: "Do not use obsolete attributes (e.g., <align>, <bgcolor>)",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/obsolete-html-attributes/obsolete-html-attributes.ts"
  },
  {
    number: 76,
    ruleId: "obsolete-html-elements",
    title: "Do not use obsolete HTML elements (e.g., <font>, <center>)",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/obsolete-html-elements/obsolete-html-elements.ts"
  },
  {
    number: 77,
    ruleId: "position-sticky",
    title: "Sticky positioning must not obscure content",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag21/1/1.4/1.4.10/position-sticky.ts"
  },
  {
    number: 78,
    ruleId: "positive-tabindex",
    title: "Do not use positive tabindex",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.3/H4/positive-tabindex.ts"
  },
  {
    number: 79,
    ruleId: "rtl-content",
    title: "Features must accommodate right-to-left languages",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/rtl-content/rtl-content.ts"
  },
  {
    number: 80,
    ruleId: "accessible-svg",
    title: "SVG content must have an accessible name",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/F65/accessible-svg.ts"
  },
  {
    number: 81,
    ruleId: "table-caption-summary-identical",
    title: "Table summary and caption content should be different",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H39/table-caption-summary-identical.ts"
  },
  {
    number: 82,
    ruleId: "table-missing-description",
    title: "Tables should include a description (using a  or an additional explanation)",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H39/table-missing-description.ts"
  },
  {
    number: 83,
    ruleId: "table-row-and-column-headers",
    title: "Tables should have  elements that define headers for each column or row",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H51/table-row-and-column-headers.ts"
  },
  {
    number: 84,
    ruleId: "target-size-minimum",
    title: "Interactive elements must have an area of at least 24 by 24 pixels",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag22/target-size-minimum/target-size-minimum.ts"
  },
  {
    number: 85,
    ruleId: "text-color-convey-information",
    title: "Information conveyed by color must also be available in text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.1/G14/text-color-convey-information.ts"
  },
  {
    number: 86,
    ruleId: "title-for-abbr",
    title: "Abbreviations need alternative text for explanation",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/3/3.1/3.1.4/H28/title-for-abbr.ts"
  },
  {
    number: 87,
    ruleId: "title-iframe",
    title: "Missing the title attribute on iframe",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/4/4.1/4.1.2/H64/title-iframe.ts"
  },
  {
    number: 88,
    ruleId: "unclear-anchor-url",
    title: "Links must have a clear, valid destination",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/unclear-uri-on-a/unclear-anchor-url.ts"
  },
  {
    number: 89,
    ruleId: "unclear-image-description",
    title: "Image descriptions (alt text) must be clear and concise",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/unclear-image-description/unclear-image-description.ts"
  },
  {
    number: 90,
    ruleId: "unclear-page-title",
    title: "The title HTML element should clearly describe the content or purpose of the page",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.2/H25/unclear-page-title.ts"
  },
  {
    number: 91,
    ruleId: "unsupported-role-on-element",
    title: "Do not use unsupported or incorrect role attribute on an element",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/unsupported-role-on-element/unsupported-role-on-element.ts"
  },
  {
    number: 92,
    ruleId: "video-audio-descriptions",
    title: "Audio, video, and other media need captions or descriptions",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.2/1.2.1/H96/video-audio-descriptions.ts"
  },
  {
    number: 93,
    ruleId: "zoom-disabled",
    title: "User must be able to zoom the page content",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.4/G142/zoom-disabled.ts"
  }
];
// Inject the Rule Search UI if not already present, then set up listeners and styles
document.addEventListener('DOMContentLoaded', () => {
  // Inject the Rule Search UI if not already present
  if (!document.getElementById("rule-search-wrapper")) {
    const wrapper = document.createElement("div");
    wrapper.id = "rule-search-wrapper";

    const label = document.createElement("label");
    label.setAttribute("for", "rule-search");
    label.id = "rule-search-label";
    label.textContent = "Search for a Rule by ID or Title:";

    const input = document.createElement("input");
    input.id = "rule-search";
    input.type = "text";

    const list = document.createElement("ul");
    list.id = "rule-list";
    list.setAttribute("role", "listbox");

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    wrapper.appendChild(list);

    document.body.insertBefore(wrapper, document.body.firstChild);
    // Add margin to wrapper to avoid crowding at the top
    wrapper.style.marginBottom = '1em';
  }

  // Now that the UI exists, set up logic and listeners
  const ruleSearchInput = document.getElementById("rule-search");
  const ruleList = document.getElementById("rule-list");

  if (!ruleSearchInput || !ruleList) {
    console.error("Rule search elements not found.");
    return;
  }

  // Dropdown styles for ruleList
  ruleList.style.display = 'none';
  ruleList.style.position = 'absolute';
  ruleList.style.zIndex = '9999';
  ruleList.style.background = 'white';
  ruleList.style.border = '1px solid #ccc';
  ruleList.style.listStyle = 'none';
  ruleList.style.padding = '0.5em';
  ruleList.style.marginTop = '0.2em';
  ruleList.style.maxHeight = '50vh';
  ruleList.style.overflowY = 'auto';
  ruleList.style.whiteSpace = 'nowrap';
  ruleList.style.width = 'max-content';
  ruleList.style.minWidth = ruleSearchInput.offsetWidth + 'px';
  // Ensure the input is visible and the rules dropdown stays functional
  ruleSearchInput.style.display = 'inline-block';
  ruleSearchInput.style.width = '300px';
  ruleList.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';

  const updateRuleList = (query) => {
    ruleList.innerHTML = "";

    const filtered = (window.siteLintRules || []).filter(rule =>
      rule.ruleId.toLowerCase().includes(query) ||
      rule.title.toLowerCase().includes(query)
    );

    filtered.forEach(rule => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${rule.number}. ${rule.ruleId}</strong>: ${rule.title} —
        <a href="${rule.codeLink}" target="_blank">Code</a>
      `;
      ruleList.appendChild(li);
    });

    ruleList.style.display = (filtered.length || query === "") ? "block" : "none";
  };

  ruleSearchInput.addEventListener("input", (e) => {
    updateRuleList(e.target.value.toLowerCase().trim());
  });

  ruleSearchInput.addEventListener("focus", () => {
    updateRuleList("");
  });

  ruleSearchInput.addEventListener("blur", () => {
    setTimeout(() => {
      ruleList.style.display = "none";
    }, 150); // allow time for interaction
  });
});