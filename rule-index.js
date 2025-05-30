window.siteLintRules = [
  {
    number: 1,
    ruleId: "accessible-name-mismatch-element-description",
    title: "Element's accessible name must not contradict its visible label",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag21/2/2.5/2.5.3/accessible-name-mismatch-element-description.ts"
  },
  {
    number: 2,
    ruleId: "alt-text-include-filename",
    title: "Don't use image filenames as alt text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/F30/alt-text-include-filename.ts"
  },
  {
    number: 3,
    ruleId: "animation",
    title: "Animation must be stoppable, or less than 5 seconds, or essential",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.2/2.2.2/F16/animation.ts"
  },
  {
    number: 4,
    ruleId: "applet-missing-alt",
    title: "Applets must contain fallback text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H35/applet-missing-alt.ts"
  },
  {
    number: 5,
    ruleId: "aria-describedby-association",
    title: "aria-describedby attribute must reference a valid ID",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/ARIA1/aria-describedby-association.ts"
  },
  {
    number: 6,
    ruleId: "aria-hidden-false",
    title: "aria-hidden='false' must not be used",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/aria-hidden-false/aria-hidden-false.ts"
  },
  {
    number: 7,
    ruleId: "aria-hidden-true-focusable-descendants",
    title: "aria-hidden='true' elements must not contain focusable content",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/4/4.1/4.1.2/aria-hidden-true-focusable-descendants/aria-hidden-true-focusable-descendants.ts"
  },
  {
    number: 8,
    ruleId: "aria-labelledby-association",
    title: "aria-labelledby attribute must reference a valid ID",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.4/aria-labelledby-association.ts"
  },
  {
    number: 9,
    ruleId: "aria-labelledby-association-empty-element",
    title: "Empty elements must not use aria-labelledby",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.4/aria-labelledby-association-empty-element.ts"
  },
  {
    number: 10,
    ruleId: "aria-role-dialog",
    title: "Dialogs must use role='dialog'",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/aria-role-dialog/aria-role-dialog.ts"
  },
  {
    number: 11,
    ruleId: "audio-alternative",
    title: "Audio-only content must have a transcript",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.2/1.2.1/G158/audio-alternative.ts"
  },
  {
    number: 12,
    ruleId: "audio-video-captions",
    title: "Videos with audio must have captions",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.2/1.2.1/H95/audio-video-captions.ts"
  },
  {
    number: 13,
    ruleId: "autoplay-audio-video",
    title: "Auto-playing audio or video must be under 3 seconds or have controls",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.2/autoplay-audio-video.ts"
  },
  {
    number: 14,
    ruleId: "broken-same-page-link",
    title: "Anchor links must point to valid IDs on the same page",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.1/2.1.1/broken-same-page-link.ts"
  },
  {
    number: 15,
    ruleId: "capital-letters-words",
    title: "Avoid using all capital letters in words",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/capital-letters-words/capital-letters-words.ts"
  },
  {
    number: 16,
    ruleId: "click-verb",
    title: "Link text should not include the word 'click'",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.4/click-verb.ts"
  },
  {
    number: 17,
    ruleId: "color-contrast-aa",
    title: "Text must meet WCAG AA color contrast requirements",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.3/G18/color-contrast-aa.ts"
  },
  {
    number: 18,
    ruleId: "color-contrast-aaa",
    title: "Text must meet WCAG AAA color contrast requirements",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.6/G17/color-contrast-aaa.ts"
  },
  {
    number: 19,
    ruleId: "content-editable-missing-attributes",
    title: "Contenteditable elements must include ARIA roles and keyboard handlers",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/content-editable-missing-attributes/content-editable-missing-attributes.ts"
  },
  {
    number: 20,
    ruleId: "contentinfo-landmark-only-one",
    title: "Only one contentinfo landmark is allowed",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/contentinfo-landmark-only-one/contentinfo-landmark-only-one.ts"
  },
  {
    number: 21,
    ruleId: "aria-attribute-conflict",
    title: "Conflicting ARIA attributes must not be used together",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/aria-attribute-conflict/aria-attribute-conflict.ts"
  },
  {
    number: 22,
    ruleId: "duplicated-for-attribute",
    title: "Multiple labels must not point to the same 'for' attribute",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H93/duplicated-for-attribute.ts"
  },
  {
    number: 23,
    ruleId: "duplicated-id-attribute",
    title: "ID attributes must be unique",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/4/4.1/4.1.1/F77/duplicated-id-attribute.ts"
  },
  {
    number: 24,
    ruleId: "elements-not-allowed-in-head",
    title: "Disallowed elements must not appear inside <head>",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/elements-not-allowed-in-head/elements-not-allowed-in-head.ts"
  },
  {
    number: 25,
    ruleId: "empty-button-description",
    title: "Buttons must have discernible text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/4/4.1/4.1.2/H91/empty-button-description.ts"
  },
  {
    number: 26,
    ruleId: "empty-heading",
    title: "Avoid empty headings",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.6/G130/empty-heading.ts"
  },
  {
    number: 27,
    ruleId: "empty-label-element",
    title: "Label elements must contain or reference text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H44/empty-label-element.ts"
  },
  {
    number: 28,
    ruleId: "empty-link-element",
    title: "Links must contain text or accessible content",
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
    title: "&lt;fieldset&gt; elements must include a &lt;legend&gt;",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H71/fieldset-no-legend.ts"
  },
  {
    number: 31,
    ruleId: "flash-content",
    title: "Avoid using Flash content",
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
    title: "Avoid italic text unless necessary",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/font-style-italic/font-style-italic.ts"
  },
  {
    number: 34,
    ruleId: "group-elements-name-attribute",
    title: "Form groups must have a name attribute",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H71/group-elements-name-attribute.ts"
  },
  {
    number: 35,
    ruleId: "h1-must-be",
    title: "The page must include an &lt;h1&gt; heading",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/h1-must-be/h1-must-be.ts"
  },
  {
    number: 36,
    ruleId: "headings-hierarchy",
    title: "Headings must follow a logical hierarchy",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/G141/headings-hierarchy.ts"
  },
  {
    number: 37,
    ruleId: "headings-sibling-unique",
    title: "Headings at the same level must be unique",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/headings-sibling-unique/headings-sibling-unique.ts"
  },
  {
    number: 38,
    ruleId: "horizontal-rule",
    title: "Avoid using &lt;hr&gt; for purely decorative purposes",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/horizontal-rule/horizontal-rule.ts"
  },
  {
    number: 39,
    ruleId: "html-lang-attr",
    title: "Set the language of the document using the html 'lang' attribute",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/3/3.1/3.1.1/html-lang-attr.ts"
  },
  {
    number: 40,
    ruleId: "identify-input-purpose",
    title: "Common input fields must include autocomplete attributes",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag21/1/1.3/1.3.5/identify-input-purpose.ts"
  },
  {
    number: 41,
    ruleId: "a-area-missing-alt",
    title: "<area> elements must have alt text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H24/a-area-missing-alt.ts"
  },
  {
    number: 42,
    ruleId: "img-adjacent-duplicate-text-link",
    title: "Avoid repeating image text next to the link",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H2/img-adjacent-duplicate-text-link.ts"
  },
  {
    number: 43,
    ruleId: "img-alt-duplicate-text-link",
    title: "Don't duplicate image alt text in adjacent links",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H2/img-alt-duplicate-text-link.ts"
  },
  {
    number: 44,
    ruleId: "img-empty-alt-in-link",
    title: "Linked images must not have empty alt attributes",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H30/img-empty-alt-in-link.ts"
  },
  {
    number: 45,
    ruleId: "img-empty-alt-with-empty-title",
    title: "Avoid using both empty alt and empty title on images",
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
    title: "Avoid hiding content using inaccessible techniques",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/incorrect-technique-for-hiding-content/incorrect-technique-for-hiding-content.ts"
  },
  {
    number: 48,
    ruleId: "input-image-missing-alt",
    title: "Image inputs must have alt text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H36/input-image-missing-alt.ts"
  },
  {
    number: 49,
    ruleId: "invalid-attribute-dir-value",
    title: "The 'dir' attribute must have a valid value",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/invalid-attribute-dir-value/invalid-attribute-dir-value.ts"
  },
  {
    number: 50,
    ruleId: "label-duplicated-content-title",
    title: "Labels must not duplicate the title attribute",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/label-duplicated-content-title/label-duplicated-content-title.ts"
  },
  {
    number: 51,
    ruleId: "label-implicitly-associated",
    title: "Label elements must be explicitly associated with a form field",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H44/label-implicitly-associated.ts"
  },
  {
    number: 52,
    ruleId: "label-inappropriate-association",
    title: "Label elements must only be associated with valid form fields",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H44/label-inappropriate-association.ts"
  },
  {
    number: 53,
    ruleId: "legend-first-child-of-fieldset",
    title: "&lt;legend&gt; must be the first child of &lt;fieldset&gt;",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/3/3.3/3.3.2/H71/legend-first-child-of-fieldset.ts"
  },
  {
    number: 54,
    ruleId: "link-with-unclear-purpose",
    title: "Links must have a clear purpose",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.9/F84/link-with-unclear-purpose/link-with-unclear-purpose.ts"
  },
  {
    number: 55,
    ruleId: "links-not-visually-evident-without-color-vision",
    title: "Link styles must not rely on color alone",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.1/F73/links-not-visually-evident-without-color-vision.ts"
  },
  {
    number: 56,
    ruleId: "links-same-content-different-url",
    title: "Links with the same text must go to the same destination",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.4/H30/links-same-content-different-url.ts"
  },
  {
    number: 57,
    ruleId: "main-element-only-one",
    title: "Only one &lt;main&gt; element is allowed per page",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/main-element-only-one/main-element-only-one.ts"
  },
  {
    number: 58,
    ruleId: "main-landmark-must-be-top-level",
    title: "&lt;main&gt; landmark must be top-level and not nested",
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
    title: "Text must not be smaller than 9px",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/minimum-font-size/minimum-font-size.ts"
  },
  {
    number: 61,
    ruleId: "missing-alt-attribute",
    title: "Images must include alt text",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/F65/missing-alt-attribute.ts"
  },
  {
    number: 62,
    ruleId: "missing-href-on-a",
    // PATCHING STRATEGY: Always escape angle brackets in titles for HTML elements.
    title: "&lt;a&gt; tags must include an href attribute",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/missing-href-on-a/missing-href-on-a.ts"
  },
  {
    number: 63,
    ruleId: "missing-label",
    title: "Form fields must have labels",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/3/3.3/3.3.2/H44/missing-label.ts"
  },
  {
    number: 64,
    ruleId: "missing-submit-button",
    title: "Forms must include a submit button",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/3/3.2/3.2.2/H32/missing-submit-button.ts"
  },
  {
    number: 65,
    ruleId: "misused-aria-on-focusable-element",
    title: "ARIA attributes must be used correctly on focusable elements",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/misused-aria-on-focusable-element/misused-aria-on-focusable-element.ts"
  },
  {
    number: 66,
    ruleId: "misused-input-attribute",
    title: "Input attributes must match the input type",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/misused-input-attribute/misused-input-attribute.ts"
  },
  {
    number: 67,
    ruleId: "misused-required-attribute",
    title: "Avoid using both required and aria-required on the same element",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/misused-required-attribute/misused-required-attribute.ts"
  },
  {
    number: 68,
    ruleId: "misused-tabindex-attribute",
    title: "Avoid misusing the tabindex attribute",
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
    title: "Navigation landmarks must follow landmark restrictions",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/navigation-landmark-restrictions/navigation-landmark-restrictions.ts"
  },
  {
    number: 72,
    ruleId: "no-headings",
    title: "Pages must include at least one heading",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.10/no-headings.ts"
  },
  {
    number: 73,
    ruleId: "no-meta-http-equiv-refresh",
    title: "Do not use meta refresh to reload pages automatically",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.2/2.2.1/F41/no-meta-http-equiv-refresh.ts"
  },
  {
    number: 74,
    ruleId: "object-missing-body",
    title: "Object elements must include fallback content",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/H53/object-missing-body.ts"
  },
  {
    number: 75,
    ruleId: "obsolete-html-attributes",
    title: "Avoid using obsolete HTML attributes",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/obsolete-html-attributes/obsolete-html-attributes.ts"
  },
  {
    number: 76,
    ruleId: "obsolete-html-elements",
    title: "Avoid using obsolete HTML elements",
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
    title: "Avoid positive tabindex values",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.3/H4/positive-tabindex.ts"
  },
  {
    number: 79,
    ruleId: "rtl-content",
    title: "Use dir='rtl' only when content is intended to be right-to-left",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/rtl-content/rtl-content.ts"
  },
  {
    number: 80,
    ruleId: "accessible-svg",
    title: "SVGs must include a role and a title or desc element",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.1/1.1.1/F65/accessible-svg.ts"
  },
  {
    number: 81,
    ruleId: "table-caption-summary-identical",
    title: "Table captions and summaries must not be identical",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H39/table-caption-summary-identical.ts"
  },
  {
    number: 82,
    ruleId: "table-missing-description",
    title: "Tables must have a caption or summary description",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H39/table-missing-description.ts"
  },
  {
    number: 83,
    ruleId: "table-row-and-column-headers",
    title: "Tables must use proper row and column headers",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.3/1.3.1/H51/table-row-and-column-headers.ts"
  },
  {
    number: 84,
    ruleId: "target-size-minimum",
    title: "Touch targets must be at least 24px by 24px",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag22/target-size-minimum/target-size-minimum.ts"
  },
  {
    number: 85,
    ruleId: "text-color-convey-information",
    title: "Color must not be the only method to convey information",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.1/G14/text-color-convey-information.ts"
  },
  {
    number: 86,
    ruleId: "title-for-abbr",
    title: "Abbreviations must use a title attribute to define their meaning",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/3/3.1/3.1.4/H28/title-for-abbr.ts"
  },
  {
    number: 87,
    ruleId: "title-iframe",
    title: "iframes must include a descriptive title",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/4/4.1/4.1.2/H64/title-iframe.ts"
  },
  {
    number: 88,
    ruleId: "unclear-anchor-url",
    title: "Anchor link URLs must be descriptive",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/unclear-uri-on-a/unclear-anchor-url.ts"
  },
  {
    number: 89,
    ruleId: "unclear-image-description",
    title: "Image alt text must clearly describe the image",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/unclear-image-description/unclear-image-description.ts"
  },
  {
    number: 90,
    ruleId: "unclear-page-title",
    title: "Pages must have clear and descriptive titles",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.2/H25/unclear-page-title.ts"
  },
  {
    number: 91,
    ruleId: "unsupported-role-on-element",
    title: "Do not use ARIA roles on unsupported elements",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/unsupported-role-on-element/unsupported-role-on-element.ts"
  },
  {
    number: 92,
    ruleId: "video-audio-descriptions",
    title: "Videos must include audio descriptions for meaningful content",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.2/1.2.1/H96/video-audio-descriptions.ts"
  },
  {
    number: 93,
    ruleId: "zoom-disabled",
    title: "User zoom must not be disabled",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.4/G142/zoom-disabled.ts"
  }
];
const updateRuleList = (query) => {
  const list = document.getElementById("rule-list");
  list.innerHTML = "";

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
    list.appendChild(li);
  });

  list.style.display = filtered.length ? "block" : "none";
};

document.getElementById("rule-search").addEventListener("input", (e) => {
  updateRuleList(e.target.value.toLowerCase().trim());
});

document.getElementById("rule-search").addEventListener("focus", () => {
  updateRuleList("");
});