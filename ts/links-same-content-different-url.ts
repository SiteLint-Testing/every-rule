import {
  $auditRules, $severity, AuditStandards, DisabilitiesImpacted
} from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

import { CommonUtility } from '../../../../utils/common';
import { DomUtility } from '../../../../utils/dom';
import { LevelType } from '../../../../constants/levelType';
import { TextUtility } from '../../../../utils/text';

interface ILinkData {
  element: HTMLAnchorElement;
  url: string; // original href
  canonicalUrl: string; // cleaned href used for comparison
  text: string; // visible text (for report)
  accessibleName: string;
}

// Module-level constant — no re-allocation per call
const TRACKING_PARAMS: string[] = ['utm_source', 'utm_medium', 'utm_campaign',
  'utm_term', 'utm_content', 'fbclid', 'gclid', 'msclkid'] as const;

export class LinksSameContentDifferenceUrl extends AbstractRule {
  protected override selector: string = 'a, area, [role=link]';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [DisabilitiesImpacted.cognitive, DisabilitiesImpacted.vision, DisabilitiesImpacted.screen_reader],
    level: LevelType.A,
    ruleId: $auditRules.links_same_content_different_url,
    severity: $severity.high,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  /* Remove common campaign params and ignore fragment on same base */
  private canonicaliseUrl(url: URL): string {
    const hasTracking: boolean = TRACKING_PARAMS.some((p) => {
      return url.searchParams.has(p);
    });

    if (hasTracking === false && url.hash === '') {
      return url.href;
    }

    const copy: URL = new URL(url);

    if (hasTracking) {
      for (const p of TRACKING_PARAMS) {
        copy.searchParams.delete(p);
      }
    }

    copy.hash = '';

    return copy.href;
  }

  private isContextuallyUnique(el: HTMLElement, cache: WeakMap<Element, boolean>): boolean {
    if (cache.has(el)) {
      return cache.get(el)!;
    }

    const result: boolean = Boolean(el.closest('article') || el.closest('li'));

    cache.set(el, result);

    return result;
  }

  private areContextuallyUnique(links: ILinkData[], cache: WeakMap<Element, boolean>): boolean {
    return links.every((link: ILinkData): boolean => {
      return this.isContextuallyUnique(link.element, cache);
    });
  }

  public validate(nodes: HTMLAnchorElement[]): void {
    if (nodes.length === 0) {
      return;
    }

    const accNameToLinks: Map<string, ILinkData[]> = new Map<string, ILinkData[]>();
    const contextCache: WeakMap<Element, boolean> = new WeakMap<Element, boolean>();

    for (const el of nodes) {
      const url: URL | null = CommonUtility.getURLDetails(el.href);

      if (url === null) {
        continue;
      }

      const visibleText: string = DomUtility.getText(el, true, true).trim();

      if (visibleText.length === 0) {
        continue;
      }

      const accessibleName: string = DomUtility.getSimpleAccessibleName(el).trim();

      if (accessibleName.length === 0) {
        continue;
      }

      const normalizedAccName: string = TextUtility.normalizeString(accessibleName.toLowerCase()).trim();
      const canonical: string = this.canonicaliseUrl(url);

      const data: ILinkData = {
        accessibleName,
        canonicalUrl: canonical,
        element: el,
        text: visibleText,
        url: url.href
      };

      let arr: ILinkData[] | undefined = accNameToLinks.get(normalizedAccName);

      if (arr === undefined) {
        arr = [];
        accNameToLinks.set(normalizedAccName, arr);
      }

      arr.push(data);
    }

    for (const [, links] of accNameToLinks) {
      if (links.length < 2) {
        continue;
      }

      const uniqueCanonical: Set<string> = new Set<string>();

      for (const link of links) {
        uniqueCanonical.add(link.canonicalUrl);
      }
      if (uniqueCanonical.size < 2) {
        continue;
      }

      if (this.areContextuallyUnique(links, contextCache)) {
        continue;
      }

      this.validator.report({
        messageTranslation: [{
          messageTranslationId: 'links_same_content_different_url_report_message',
          messageTranslationParams: [links.length.toString(), links[0]!.text, links[0]!.accessibleName]
        }],
        node: null,
        requiresManualVerification: true,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      });
    }
  }
}
