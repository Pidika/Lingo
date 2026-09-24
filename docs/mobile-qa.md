# Mobile and speech acceptance checks

Status: automated regression tests pass; physical iPhone and Android checks below are **not yet run**. Desktop browser automation in the earlier session was blocked by automatic approval review after an account usage limit. No native phone microphone or speaker was available for this pass.

Test the deployed site at https://lingo-iota-roan.vercel.app/ using a separate learner profile or export progress first. Record phone model, OS version, browser/version, language, lesson/day, expected result and actual result. Never clear an existing learner's browser data without a backup.

## Phone matrix

| Device | Browser | Layout | Model/slow voice | Recording | Speech check | Resume |
|---|---|---|---|---|---|---|
| iPhone | Safari | Pending | Pending | Pending | Pending | Pending |
| Android | Chrome | Pending | Pending | Pending | Pending | Pending |

Presence of a speech API does not guarantee that the browser's speech service is available. Record unsupported or unavailable results separately from incorrect speech.

## Ten-minute check on each phone

1. Open French day 2 from My journey. Move through phrases. Confirm usage and sound hints change with the phrase. Use Listen and Slow + pauses: slow mode should have a lower speaking rate and noticeable pauses. Rapidly select a different phrase; old audio must stop.
2. Open German day 117, phrase 3. Check portrait, landscape and larger text. The long sentence, buttons, dialog and expanded recording panel should wrap without horizontal scrolling. All controls must remain reachable by scrolling.
3. Reach Speak in an early lesson. Allow microphone access and record a short sample. Stop it, play it back, and record again. The replay must belong to the current attempt. Playing a recording must never count as passing a speaking check.
4. Start recording, then close the lesson or move to another phrase. The microphone indicator should stop. No old recording should appear on the next phrase.
5. Start recording with a permission prompt, close the lesson before answering, then grant permission. No recording should start in a different lesson. If the phone prevents navigation while its prompt is open, record this case as unavailable rather than passed.
6. Use Check my speech. Say the wrong phrase: it must not unlock progression. Say the model phrase: record the transcript and result. Try at least three French and three German phrases, including one with a number/time and one long phrase. Do not use text-to-speech as the test speaker.
7. Deny microphone permission and retry after re-enabling it. Test a network interruption where practical. Errors should explain the problem, leave the phrase unchecked and allow retry. If Stop and check receives no service response, the control should recover after approximately four seconds.
8. Switch apps while checking speech or recording. Returning should require a fresh microphone action; previously checked phrases should remain checked. No late result should unlock a different phrase.
9. Check one speaking phrase, advance and close the page. Reopen in the same browser and choose Resume. The lesson, stage and checked phrase count should remain. Repeat with the other language.
10. Export a backup and restore it in a separate test browser/profile. Confirm completed lessons and both languages' resume points. Cross-device transfer is manual, not account sync.

## Current automated coverage

Run `node --test tests/learning.test.cjs` from the repository root. Tests cover all 150 lesson stages, answer gates, number/time transcription equivalence, slow playback sequencing, microphone permission races, stale recorder callbacks, recorder startup failures, recognition errors, missing end events, page hiding, resume and backup restoration.

Tests mock browser media services. They do not certify pronunciation grading, accent fairness, acoustic quality, OS permission behaviour or phone layouts. Speech checks compare recognised words, not the learner's audio waveform with a reference recording.

## Small learner trial after phone checks

Use 3–5 consenting volunteers with varied ages and phone experience. Ask each to complete an early lesson, resume halfway through another, and try one later conversation checkpoint. Observe without coaching first. Record confusing labels, unintentional taps, false speech rejections, time spent and whether they can explain how progress is saved. Do not collect raw recordings or personal details by default.

Have a fluent French speaker and a fluent German speaker review representative lessons and flagged recognition transcripts. A real speaker review has not been performed in this development pass. Fix blocking errors before inviting more learners.

## API references used during the implementation review

- [MediaRecorder stop event](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/stop_event): recorded data and the stop callback arrive asynchronously.
- [SpeechRecognition.stop](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/stop): stopping requests a result from captured speech.
- [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia): microphone access is asynchronous and permission dependent.
