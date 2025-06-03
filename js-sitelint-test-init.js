// All logic is wrapped in DOMContentLoaded and split into clear functions.
document.addEventListener('DOMContentLoaded', () => {
  definePageAndRuleArrays();
  renderNavigationDropdown();
  setupRuleSearchListeners();
  injectAuditorScript();
});

function definePageAndRuleArrays() {
  window.siteLintPages = [
  { value: "https://docs.google.com/spreadsheets/d/1p4zejQ4g_Hfiz_ine9-EwUppILYmX9msd9SwGlHSvgA/edit?gid=863730017#gid=863730017", label: "View the SiteLint Google spreadsheet", target: "_blank" },
  { value: "https://www.sitelint.com/docs/accessibility", label: "View the full list of SiteLint rules", target: "_blank" },
  { value: "https://sitelint-testing.github.io/axe-dev-tools/", label: "Switch to the axe Dev Tools testing suite", target: "_blank" },
  { value: "https://sitelint-testing.github.io/arc-toolkit/", label: "Switch to the ARC Toolkit testing suite", target: "_blank" },
  { value: "accessible-name-mismatch-element-description.html", label: "1. accessible name mismatch element description" },
  { value: "accessible-name-pm1097.html", label: "2. Accessible Name - PM-1097 - BOA logos" },
  { value: "alt-color-convey-information.html", label: "3. alt color convey information" },
  { value: "alt-text-filename.html", label: "4. alt text filename" },
  { value: "animation.html", label: "5. animation" },
  { value: "applet-missing-alt.html", label: "6. applet missing alt" },
  { value: "applet-missing-body.html", label: "7. applet missing body" },
  { value: "autocomplete-attribute-usage.html", label: "8. autocomplete attribute usage" },
  { value: "area-missing-alt.html", label: "9. area missing alt" },
  { value: "aria-attribute-conflict.html", label: "10. aria attribute conflict" },
  { value: "aria-describedby-association.html", label: "11. aria-describedby association" },
  { value: "aria-hidden-false.html", label: "12. aria hidden false" },
  { value: "aria-hidden-true-focusable-descendants.html", label: "13. aria hidden true focusable descendants" },
  { value: "aria-labelledby-association-empty-element.html", label: "14. aria-labelledby association empty element" },
  { value: "aria-labelledby-association.html", label: "15. aria-labelledby association" },
  { value: "aria-role-dialog.html", label: "16. aria role dialog" },
  { value: "audio-alternative.html", label: "17. audio alternative" },
  { value: "audio-video-captions.html", label: "18. audio video captions" },
  { value: "autoplay-audio-video.html", label: "19. autoplay audio video" },
  { value: "blink-element.html", label: "20. blink element" },
  { value: "broken-same-page-link.html", label: "21. broken same page link" },
  { value: "capital-letters.html", label: "22. capital letters" },
  { value: "captcha-google.html", label: "23. captcha google" },
  { value: "click-verb.html", label: "24. click verb" },
  { value: "color-contrast-aa.html", label: "25. color contrast aa" },
  { value: "color-contrast-aaa.html", label: "26. color contrast aaa" },
  { value: "color-contrast-state-pseudo-classes.html", label: "27. color contrast state pseudo classes" },
  { value: "color-name.html", label: "28. color name" },
  { value: "content-editable-missing-attributes.html", label: "29. content editable missing attributes" },
  { value: "content-wider-than-screen.html", label: "30. content wider than screen" },
  { value: "contentinfo-landmark-only-one.html", label: "31. contentinfo landmark only one" },
  { value: "css-images-convey-information.html", label: "32. css images convey information" },
  { value: "dynamic.html", label: "33. Dynamic Content" },
  { value: "duplicated-for-attribute.html", label: "34. duplicated for attribute" },
  { value: "duplicated-id.html", label: "35. duplicated id" },
  { value: "ebi-test.html", label: "36. ebi test" },
  { value: "empty-button-description.html", label: "37. empty button description" },
  { value: "empty-heading.html", label: "38. empty heading" },
  { value: "empty-label-element.html", label: "39. empty label element" },
  { value: "empty-link-element.html", label: "40. empty link element" },
  { value: "empty-title-attribute.html", label: "41. empty title attribute" },
  { value: "fieldset-no-legend.html", label: "42. fieldset no legend" },
  { value: "flash-content.html", label: "43. flash content" },
  { value: "font-style-italic.html", label: "44. font style italic" },
  { value: "general-alt.html", label: "45. general alt" },
  { value: "group-elements-name-attribute.html", label: "46. group elements name attribute" },
  { value: "h1-must-be-defined.html", label: "47. h1 must be defined" },
  { value: "h1-only-one.html", label: "48. h1 only one" },
  { value: "headings-hierarchy.html", label: "49. headings hierarchy" },
  { value: "headings-sibling-unique.html", label: "50. headings sibling unique" },
  { value: "horizontal-rule.html", label: "51. horizontal rule" },
  { value: "html-lang-attr.html", label: "52. html lang attr" },
  { value: "identify-input-purpose.html", label: "53. identify input purpose" },
  { value: "img-adjacent-duplicate-text-link.html", label: "54. img adjacent duplicate text link" },
  { value: "img-alt-duplicate-text-link.html", label: "55. img alt duplicate text link" },
  { value: "img-empty-alt-in-link.html", label: "56. img empty alt in link" },
  { value: "img-empty-alt-with-empty-title.html", label: "57. img empty alt with empty title" },
  { value: "inaccessible-svg.html", label: "58. inaccessible svg" },
  { value: "incorrect-label-placement-for-associated-input.html", label: "59. incorrect label placement for associated input" },
  { value: "incorrect-technique-for-hiding-content.html", label: "60. incorrect technique for hiding content" },
  { value: "input-image-missing-alt.html", label: "61. input image missing alt" },
  { value: "invalid-attribute-dir-value.html", label: "62. invalid attribute dir value" },
  { value: "label-duplicated-content-title.html", label: "63. label duplicated content title" },
  { value: "label-implicitly-associated.html", label: "64. label implicitly associated" },
  { value: "label-inappropriate-association.html", label: "65. label inappropriate association" },
  { value: "label-visually-hidden-only.html", label: "66. label visually hidden only" },
  { value: "legend-first-child-of-fieldset.html", label: "67. legend first child of fieldset" },
  { value: "link-button-space-key.html", label: "68. link button space key" },
  { value: "link-with-unclear-purpose.html", label: "69. link with unclear purpose" },
  { value: "links-language-destination.html", label: "70. links language destination" },
  { value: "links-new-window-mark.html", label: "71. links new window mark" },
  { value: "links-not-visually-evident-without-color-vision.html", label: "72. links not visually evident without color vision" },
  { value: "links-same-content-different-url.html", label: "73. links same content different url" },
  { value: "main-element-only-one.html", label: "74. main element only one" },
  { value: "main-landmark-must-be-top-level.html", label: "75. main landmark must be top level" },
  { value: "manifest-extension.html", label: "76. manifest extension" },
  { value: "minimum-font-size.html", label: "77. minimum font size" },
  { value: "missing-alt-attribute.html", label: "78. missing alt attribute" },
  { value: "missing-href.html", label: "79. missing href" },
  { value: "missing-label.html", label: "80. missing label" },
  { value: "missing-submit-button.html", label: "81. missing submit button" },
  { value: "misused-aria.html", label: "82. misused aria" },
  { value: "misused-input-attribute.html", label: "83. misused input attribute" },
  { value: "misused-required-attribute.html", label: "84. misused required attribute" },
  { value: "misused-tabindex-attribute.html", label: "85. misused tabindex attribute" },
  { value: "navigation-landmark-restrictions.html", label: "86. navigation landmark restrictions" },
  { value: "no-headings.html", label: "87. no headings" },
  { value: "no-meta-http-equiv-refresh.html", label: "88. no meta http-equiv refresh" },
  { value: "object-general-alt.html", label: "89. object general alt" },
  { value: "object-missing-body.html", label: "90. object missing body" },
  { value: "obsolete-html-attributes.html", label: "91. obsolete html attributes" },
  { value: "obsolete-html-elements.html", label: "92. obsolete html elements" },
  { value: "orientation.html", label: "93. orientation" },
  { value: "outline-zero.html", label: "94. outline zero" },
  { value: "overlay.html", label: "95. overlay" },
  { value: "position-sticky.html", label: "96. position sticky" },
  { value: "positive-tabindex.html", label: "97. positive tabindex" },
  { value: "reflow.html", label: "98. reflow" },
  { value: "role-application.html", label: "99. role application" },
  { value: "rtl-content.html", label: "100. rtl content" },
  { value: "same-target-anchor-text-more-than-once.html", label: "101. same target anchor text more than once" },
  { value: "svg-without-accessible-description.html", label: "102. svg without accessible description" },
  { value: "table-caption-summary-identical.html", label: "103. table caption summary identical" },
  { value: "table-missing-description.html", label: "104. table missing description" },
  { value: "table-row-and-column-headers.html", label: "105. table row and column headers" },
  { value: "target-size-minimum.html", label: "106. target size minimum" },
  { value: "text-color-convey-information.html", label: "107. text color convey information" },
  { value: "contrast-ratios.html", label: "108. Text size, style and contrast ratios" },
  { value: "title-for-abbr.html", label: "109. title for abbr" },
  { value: "title-iframe.html", label: "110. title iframe" },
  { value: "unclear-anchor-url.html", label: "111. unclear anchor url" },
  { value: "unclear-image-description.html", label: "112. unclear image description" },
  { value: "unclear-page-title.html", label: "113. unclear page title" },
  { value: "unsupported-role-on-element.html", label: "114. unsupported role on element" },
  { value: "video-audio-descriptions.html", label: "115. video audio descriptions" },
  { value: "zoom-disabled.html", label: "116. zoom disabled" },
  { value: "99problems.html", label: "117. 99 Problems" },
  { value: "multiple-languages.html", label: "118. multiple languages" }
  ];
  // Define the SiteLint rules array for rules dropdown
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
}

function renderNavigationDropdown() {
  // Create a single wrapper for nav content
  const navWrapper = document.createElement('div');
  navWrapper.id = 'siteLint-nav-wrapper';

  // --- Pages Dropdown Section ---
  const pagesDropdownWrapper = document.createElement('div');
  pagesDropdownWrapper.id = 'pages-dropdown-wrapper';
  pagesDropdownWrapper.className = 'dropdown-wrapper';

  // Label for pages dropdown
  const pagesLabel = document.createElement('label');
  pagesLabel.htmlFor = 'filter';
  pagesLabel.setAttribute('tabindex', '0');
  pagesLabel.textContent = 'Filter navigation options:';
  pagesLabel.className = 'dropdown-label';

  // Pages select dropdown
  const pagesSelect = document.createElement('select');
  pagesSelect.id = 'filter';
  pagesSelect.className = 'dropdown-select';
  (window.siteLintPages || []).forEach(page => {
    const option = document.createElement('option');
    option.value = page.value;
    option.textContent = page.label;
    pagesSelect.appendChild(option);
  });
  // On change, navigate to the selected page (open in new tab if target is _blank)
  pagesSelect.addEventListener('change', function () {
    const selectedIndex = pagesSelect.selectedIndex;
    const page = window.siteLintPages[selectedIndex];
    if (page && page.value) {
      if (page.target === '_blank') {
        window.open(page.value, '_blank');
      } else {
        window.location.href = page.value;
      }
    }
  });
  pagesDropdownWrapper.appendChild(pagesLabel);
  pagesDropdownWrapper.appendChild(pagesSelect);

  // --- Rule Search Section ---
  const ruleWrapper = document.createElement('div');
  ruleWrapper.id = 'rule-search-wrapper';
  ruleWrapper.className = 'dropdown-wrapper';

  // Label for rule search
  const ruleLabel = document.createElement('label');
  ruleLabel.id = 'rule-search-label';
  ruleLabel.setAttribute('for', 'rule-search');
  ruleLabel.textContent = 'Search for a Rule by ID or Title:';
  ruleLabel.className = 'dropdown-label';

  // Rule search input
  const ruleInput = document.createElement('input');
  ruleInput.type = 'text';
  ruleInput.id = 'rule-search';
  ruleInput.setAttribute('aria-labelledby', 'rule-search-label');
  ruleInput.setAttribute('placeholder', 'Type rule ID or title...');
  ruleInput.className = 'rule-search-input';

  // Wrapper for results
  const ruleResultWrapper = document.createElement('div');
  ruleResultWrapper.id = 'rule-results';
  ruleResultWrapper.className = 'rule-results';

  // Dropdown list for rules
  const ruleList = document.createElement('ul');
  ruleList.id = 'rule-list';
  ruleList.setAttribute('role', 'listbox');
  ruleList.className = 'rule-list';
  ruleList.style.display = 'none';
  ruleResultWrapper.appendChild(ruleList);

  // Compose rule search UI
  ruleWrapper.appendChild(ruleLabel);
  ruleWrapper.appendChild(ruleInput);
  ruleWrapper.appendChild(ruleResultWrapper);

  // Compose navigation UI
  navWrapper.appendChild(pagesDropdownWrapper);
  navWrapper.appendChild(ruleWrapper);

  // Insert navWrapper at the top of the body
  document.body.insertBefore(navWrapper, document.body.firstChild);
}

function setupRuleSearchListeners() {
  const input = document.getElementById('rule-search');
  const ruleList = document.getElementById('rule-list');
  if (!input || !ruleList) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    ruleList.innerHTML = '';
    const filtered = (window.siteLintRules || []).filter(rule =>
      rule.ruleId.toLowerCase().includes(query) ||
      rule.title.toLowerCase().includes(query)
    );
    filtered.forEach(rule => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${rule.ruleId}</strong>: ${rule.title}<br/>
        <a href="${rule.testPage}" target="_blank">🧪 Test Page</a> |
        <a href="${rule.docLink}" target="_blank">📄 Docs</a> |
        <a href="${rule.codeLink}" target="_blank">💻 Code</a>
      `;
      ruleList.appendChild(li);
    });
    ruleList.style.display = filtered.length ? 'block' : 'none';
  });

  // Hide dropdown on blur or click outside
  input.addEventListener('blur', () => {
    // Delay to allow click event on dropdown items
    setTimeout(() => { ruleList.style.display = 'none'; }, 100);
  });
  document.addEventListener('mousedown', (event) => {
    if (
      !input.contains(event.target) &&
      !ruleList.contains(event.target)
    ) {
      ruleList.style.display = 'none';
    }
  });
  // Optionally, show dropdown again on focus if input has value
  input.addEventListener('focus', () => {
    if (input.value.trim() && ruleList.childElementCount > 0) {
      ruleList.style.display = 'block';
    }
  });
}

function injectAuditorScript() {
  const s = document.createElement('script');
  s.defer = true;
  s.id = 'auditor_app';
  s.dataset.autorun = '';
  s.dataset.cfasync = 'false';
  s.src = 'https://stage-auditor.sitelint.com/auditor.bundle.js?tokenId=f1c099211379e038cff26cbdeaaf9918eb39aea3978c0648935080e02f36f950';
  document.getElementsByTagName('script')[0]?.parentNode.insertBefore(s, null);
}