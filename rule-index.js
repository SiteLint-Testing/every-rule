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
    title: "",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/aria-role-dialog/aria-role-dialog.ts"
  },
  {
    number: 11,
    ruleId: "audio-alternative",
    title: "",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.2/1.2.1/G158/audio-alternative.ts"
  },
  {
    number: 12,
    ruleId: "audio-video-captions",
    title: "",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.2/1.2.1/H95/audio-video-captions.ts"
  },
  {
    number: 13,
    ruleId: "autoplay-audio-video",
    title: "",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.2/autoplay-audio-video.ts"
  },
  {
    number: 14,
    ruleId: "broken-same-page-link",
    title: "",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.1/2.1.1/broken-same-page-link.ts"
  },
  {
    number: 15,
    ruleId: "capital-letters-words",
    title: "",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/capital-letters-words/capital-letters-words.ts"
  },
  {
    number: 16,
    ruleId: "click-verb",
    title: "",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/2/2.4/2.4.4/click-verb.ts"
  },
  {
    number: 17,
    ruleId: "color-contrast-aa",
    title: "",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.3/G18/color-contrast-aa.ts"
  },
  {
    number: 18,
    ruleId: "color-contrast-aaa",
    title: "",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/wcag2/1/1.4/1.4.6/G17/color-contrast-aaa.ts"
  },
  {
    number: 19,
    ruleId: "content-editable-missing-attributes",
    title: "",
    testPage: "",
    docLink: "",
    codeLink: "https://bitbucket.org/sitelint/auditor/src/master/app/rules/auditor/accessibility/content-editable-missing-attributes/content-editable-missing-attributes.ts"
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