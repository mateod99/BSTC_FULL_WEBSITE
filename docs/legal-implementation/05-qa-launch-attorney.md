# 5. QA, launch blockers and Florida attorney checklist

**DRAFT. Last updated: TODO.** All application tests below are **NOT RUN / pending implementation**. Documentation consistency checks do not establish portal security, legal enforceability or production readiness. Use synthetic adults/children and processor test mode; never real child data in test fixtures.

## Required acceptance tests

| ID | Setup / action | Required result and evidence |
|---|---|---|
| QA01 | Unverified-email adult calls child-create with under-13 DOB | Rejected server-side; no child row, object, queue payload or logged child body; verified email alone still insufficient without scoped VPC |
| QA02 | Free tryout submits photo/health fields before completed consent/verification, including direct API and nested fields | 400/403 as appropriate; no upload URL or persisted payload; forbidden school/jersey-photo fields rejected too |
| QA03 | Request paid checkout without required waiver acceptance | 400; no processor checkout session; browser manipulation cannot bypass |
| QA04 | Open enrollment, inspect DOM and submit omitted/false media | All optional defaults false in DOM/state/API; no media grant inferred |
| QA05 | Query public gallery with consented, unconsented, withdrawn and unknown group subjects | Only assets where every identifiable subject is actively authorized appear; CDN/direct URLs also suppressed |
| QA06 | Cleared coach expires today; reuse existing session/token | Roster login/request denied; sessions revoked; clock tested in America/New_York |
| QA07 | Coach attempts child email/phone recipient or foreign household recipient | Schema/authorization rejects; only authorized parent recipients resolve; no child message queued |
| QA08 | Build production with META_PIXEL_ID or GTAG_ADS set (including empty configured keys under fail-closed policy) | Build fails before bundle/deploy; inspect all equivalent ad identifiers and injected tags, not only these names |
| QA09 | Anonymous and signed-in requests send Sec-GPC: 1 | GPC=true and opt-out persisted, ads remains false; conservative merge on login; no later request clears signal |
| QA10 | Deliver signed marketing STOP twice while sends queued | One logical suppression event, immediate queue/send-time suppression; no marketing after STOP; verify within 15-day outer bound and sender-wide semantics |
| QA11 | Concurrent identical consents/batch with same Idempotency-Key; retry after timeout | One finalized set; same result; changed payload/key conflict409; no duplicate PDFs/charges |
| QA12 | Accept waiver; inspect stored immutable PDF and web computed styles | Exact locked notice, signer/version/hash/scope retained; PDF notice>=body+5pt; web16px/24px; accessible tags/order; storage failure blocks checkout |
| QA13 | GET /account, nested account/roster/child routes, including error responses | X-Robots-Tag noindex,nofollow; auth enforced, no-store; no private sitemap entries |
| QA14 | Valid child deletion with retained waiver/payment evidence and no health hold | Unneeded health/public photos deleted; limited justified waiver/payment retained with reason/expiry; vendors/caches/backups tracked; no blanket account-data retention |
| QA15 | Parent adds second child after first child's media opt-in | Second child media false; new child-specific waiver/concussion/medical/media choices; no inherited grant |
| QA16 | Inspect rendered launch HTML, browser requests, scripts and deployed tag settings | Analytics absent; no ad pixels, hidden embeds or session replay; production configuration matches notice |

## Additional failure/security/accessibility cases

| ID | Case | Expected outcome |
|---|---|---|
| QA17 | Email/checkbox/last4-only free verification | VPC stays pending; child-create denied; approved method/evidence required |
| QA18 | Direct notice email fails | Visible retry/escalation; no reliance on an undelivered required notice; child collection gated under approved flow |
| QA19 | Cross-household IDOR for children, PDF/export, consents, payments or requests | Deny; no data leakage; scoped audit event |
| QA20 | Staff without medical grant, including admin by default | Cannot decrypt/read/export health data; legitimate medical access audited |
| QA21 | Forged/replayed/out-of-order processor webhook; edited price | Invalid signatures rejected; one ledger event; server pricing; redirect cannot mark paid |
| QA22 | Expired concussion year or unresolved suspected concussion | Participation blocked despite paid enrollment/old consent; only reviewed written clearance releases injury hold |
| QA23 | Superseded legal text or tampered browser hash | Server uses immutable stored version; stale acceptance rejected/reviewed; old proof never rewritten |
| QA24 | Unqualified STOP with operational/marketing same sender | Both suppressed per sender rules; no alternate-number bypass; allowed confirmation only |
| QA25 | Media revoked while publication job or stream is pending | Immediate veto at publish/delivery time; all-subject recheck; takedown retries and deadline alert |
| QA26 | Second-parent deletion dispute | Freeze public display, restrict disputed access, counsel review with clock; no primary-account deletion |
| QA27 | No media consent / unavailable sponsor details | Play remains available; sponsor box disabled; streams off |
| QA28 | End season with and without scoped health hold | Delete eligible encrypted notes/objects; retain only held scope with review date; release job purges later |
| QA29 | Restore pre-deletion backup | Deletion/withdrawal tombstones replay before access; no resurrected child records or media |
| QA30 | Keyboard/screen reader/200–400% zoom, mobile, checkout and PDFs | Labels/errors/focus/reflow work; waiver full text readable; accessible alternative for scroll gate; verify WCAG target manually |
| QA31 | Missing TODO identity/vendor/refund facts or unapproved policy | Publication/payment release gate fails; no draft represented as final |
| QA32 | Malicious file, EXIF GPS, giant upload or embedded script | Reject/quarantine safely; strip location metadata; no public access before approval |
| QA33 | Direct marketing-SMS/recurring-plan activation at launch | Server rejects regardless of hidden UI; no vendor campaign created |
| QA34 | Rate-limit auth/privacy endpoints and recovery | Abuse throttled without exposing account existence; rights requests have accessible alternative |
| QA35 | Actual private API headers/cookies/security config | TLS, host-only session, Secure/HttpOnly/SameSite, CSRF, CORS, MFA and no-store verified |

Attach evidence to each case: build SHA, environment, test data IDs, date, operator, expected/actual, screenshots/log references without child PI, and defect link. A pass expires after material code/config/vendor change.

## Launch blockers — no registration/payment/public-policy launch while any apply

- Operator identity/address/contact contains TODO, canonical domain uncertain.
- Ad/analytics pixels or IDs appear in runtime, build environment, injected tags or vendor configuration.
- Child self-signup, teen social login, child messaging or unsafe unverified intake exists.
- Locked notice is altered, hidden, collapsible, clipped or less than five points larger than waiver body.
- Accepted documents lack immutable versioned PDF snapshots, signature evidence or accessible copies.
- Marketing SMS enabled without reviewed FTSA/TCPA copy, sender registration, evidence and tested suppression.
- Unscreened/expired adult is active as coach or can contact minors/access a roster.
- Public roster/media exposes last name with photo, school, DOB, contact or medical information; unauthorized media has no reliable takedown path.
- Live streaming lacks all-subject media permissions and approved official-tool configuration.
- Privacy/vendor statements differ from actual providers or settings; required contracts/security assurances absent.
- No adopted WISP, assigned security owner, incident response or verified restoration plan.
- No working privacy-request intake and rights/deletion workflow.
- Health notes/medical uploads stored in plaintext or available to excessive roles.
- Free or paid child collection proceeds before the required verification/notice; checkbox/last4 falsely treated as VPC.
- Payment can proceed without required waivers/safety consents; webhook/idempotency/ownership controls missing.
- Refund terms, insurance statement, FYSA forms, DCF/SafeSport reporting contacts or screening process remain unresolved.
- Guardian dispute handling, legal holds, retention jobs or public-cache revocation unimplemented.
- Material keyboard/screen-reader/PDF barriers remain or claims lack current test evidence.

These blockers are unresolved until named owners attach evidence. A documentation commit does not close them. Marketing-site deployment also needs accurate notices for its actual intake, trackers and images even if payment is elsewhere.

## Florida attorney review checklist

- Confirm current Fla. Stat. § 744.301(3)(b) wording, notice typography and electronic execution; review whether each signer is a natural guardian with authority. Preserve locked wording unless official law differs, then version and document the change.
- Determine BSTC's independent-sanctioning-authority status under § 943.0438; review current Level 2/AHCA/FYSA process, training, all direct-contact roles, timing, disqualification notices, exemption process and records. Protective gates apply beyond the minimum statutory role definition.
- Evaluate COPPA scope from actual audience/collection, including passive identifiers; parent-supplied data alone does not establish applicability. Review the current amended rule, notices, reasonable security assurances and separate nonessential-disclosure permission.
- Approve paid verification transaction conditions and non-payment method; reject unverified electronic attestation or last4-only as sufficient proof. Resolve notice/collection order and scope for second children and new public uses.
- Review FTSA/TCPA operational vs marketing classification, exact prior written consent, 10DLC, current revocation rules, vendor sender-wide STOP and timelines. Keep marketing SMS off until approved.
- Confirm FDBR thresholds and § 501.1735 scope; retain protective under-18 minimization/no-harm/no-targeted-ad defaults without claiming legal coverage solely from child data.
- Confirm FIPA clocks from determination OR reason to believe, Department of Legal Affairs trigger, third-party-agent notice, exceptions, contents and other jurisdictions. Current reviewed trigger: 500 Florida individuals; recheck at incident/publish time.
- Review annual concussion form and current statute/league return-to-play requirements; validate heading limits, heat/lightning/SCA protocol and emergency reporting. Do not apply high-school EKG rules to ordinary academy players.
- Review media vs sponsor-likeness, public streams, multi-subject/opponent permissions, withdrawal/print caveat and actual channels.
- Confirm no recurring plans; reassess disclosures/cancel method before introducing them.
- Resolve precise refund cutoff, pre-start refunds, cancellations, injury exceptions and insurance disclosure without inventing coverage.
- Review guardian authority, second-parent permissions and disputed deletion; retain only necessary evidence and avoid debt-based privacy restrictions.
- Approve each retention period, including seven-year proposals, sensitive health deletion, minor-claim issues, backups and screening requirements; reject indefinite blanket retention.
- Review contracts/DPAs and actual legal roles for all official vendors, including hosting, databases, storage, video, payment, email/SMS, verification and screening.
- Default omit arbitration, class-action waivers and jury waivers; any later proposal is OPTIONAL — COUNSEL and separate change review.
- Confirm English-only launch; approve all true translations before Spanish forms are offered, including statutory text.
- Confirm private club facts; re-evaluate FERPA and § 1006.1494 if school-purpose contracts begin; no school-official exception assumed.
- Confirm Florida/US audience; if national marketing expands, assess CCPA and other state laws. Do not add a full GDPR package without relevant facts.
- Review electronic signature/consumer electronic-delivery consent under ESIGN/UETA, document access, audit evidence and accessible alternatives.
- Approve final operator address, phone, canonical domain, privacy/safety mailbox ownership and actual vendor list; require source and production review before publication.
