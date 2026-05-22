import type { IIssueReport } from '../../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../../constants/audits';
import { AbstractRule } from '../../../abstract-rule';
import { LevelType } from '../../../../constants/levelType';
import { TextUtility } from '../../../../utils/text';
import { type IAbstractRuleConfig } from '../../../../interfaces/rule.interface';

export class VideoAudioDescriptions extends AbstractRule {
  protected override selector = 'video, audio';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.video_audio_descriptions,
    severity: $severity.high,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(mediaElements: HTMLVideoElement[]): void {
    const reportNode = (el: HTMLVideoElement): void => {
      // 1. Any caption/subtitle track is enough for WCAG A
      const hasCaptions: boolean = el.querySelector('track[kind="captions"], track[kind="subtitles"]') !== null;

      // 2. Audio-description track (AAA)
      const hasDescriptions: boolean = el.querySelector('track[kind="descriptions"]') !== null;

      // 3. Separate audio source used as alternative described soundtrack
      const hasAudioSource: boolean = el.querySelector('source[type^="audio/"]') !== null;

      if (hasCaptions === false && hasDescriptions ===false && hasAudioSource === false) {
        const report: IIssueReport = {
          messageTranslation: [
            {
              messageTranslationId: 'video_audio_descriptions_report_message',
              messageTranslationParams: [
                TextUtility.escape('<track kind="captions|subtitles|descriptions">'),
                TextUtility.escape('<source type="audio/…">')
              ]
            }
          ],
          node: el,
          requiresManualVerification: false,
          ruleId: this.ruleConfig.ruleId,
          skipReason: null
        };

        this.validator.report(report);
      }
    };

    for (const mediaElement of mediaElements) {
      reportNode(mediaElement);
    }
  }
}
