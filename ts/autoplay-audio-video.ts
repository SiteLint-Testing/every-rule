import type { IIssueReport } from '../../../interfaces/rule-issue.interface';
import { $auditRules, $severity, AuditStandards } from '../../../constants/audits';
import { AbstractRule } from '../../abstract-rule';
import { type IAbstractRuleConfig } from '../../../interfaces/rule.interface';
import { LevelType } from '../../../constants/levelType';

export class AutoplayAudioVideo extends AbstractRule {
  protected override selector: string = 'iframe[allow*="autoplay=1"], iframe[src*="autoplay=1"], [autoplay]';

  protected ruleConfig: IAbstractRuleConfig = {
    disabilitiesImpacted: [],
    level: LevelType.A,
    ruleId: $auditRules.autoplay_audio_video,
    severity: $severity.critical,
    standard: AuditStandards.wcag,
    standardMetaData: null
  };

  public validate(mediaElements: (HTMLMediaElement | HTMLIFrameElement)[]): void {
    const reportAutoPlay = (mediaElement: HTMLMediaElement | HTMLIFrameElement): any => {
      const problem: IIssueReport = {
        messageTranslation: [],
        node: mediaElement,
        requiresManualVerification: false,
        ruleId: this.ruleConfig.ruleId,
        skipReason: null
      };

      if (
        typeof (mediaElement as HTMLMediaElement).autoplay === 'boolean' &&
        (mediaElement as HTMLMediaElement).autoplay
      ) {
        problem.messageTranslation.push({
          messageTranslationId: 'autoplay_audio_video_report_message',
          messageTranslationParams: ['autoplay="true"']
        });
        this.validator.report(problem);
      } else if (mediaElement.nodeName.toLowerCase() === 'iframe') {
        problem.messageTranslation.push({
          messageTranslationId: 'autoplay_audio_video_report_message',
          messageTranslationParams: [(mediaElement as HTMLIFrameElement).allow]
        });
        this.validator.report(problem);
      }
    };

    mediaElements.forEach(reportAutoPlay);
  }
}
