# 4. Data map, official tools, cookies and retention

**DRAFT. Last updated: TODO.** This inventory is a target, not proof of deployed processing. Resolve provider identities, actual cookies and necessity before publication. No provider is approved merely because named below.

## Data map

| Field/category | Source | Purpose | COPPA / Florida note | Vendor / recipients | Retention | Parent control |
|---|---|---|---|---|---|---|
| Parent name/email/phone/address | Adult | Account, verification, program contact | Adult data; minimize pre-verification | Portal/approved host; appropriate message vendor | Active account; proposed removal 12 months after last season or earlier valid request, excluding narrow evidence | Review/correct/delete; communication choices |
| Password hash / auth tokens | Adult/system | Secure login | Never disclose/hash exports; no child login | Portal/auth service TODO | Revoke tokens promptly; remove hash on account deletion | Reset/revoke sessions |
| Child first/last name, DOB | Verified guardian | Identity and age grouping | Collect only after scoped VPC product gate; never public DOB/last name | Portal; assigned cleared staff; FYSA only if required and approved | 12 months after season, except minimum justified evidence | Review/correct/delete/refuse |
| Optional gender / jersey size | Guardian | Requested program/kit | Gender optional; no secondary profiling | Portal; minimum staff | 12 months after season | Correct/delete optional field |
| School | None at launch | No current purpose | Hidden and server-rejected; reassess school contract separately | None | Not collected | No requirement to supply |
| Child email/phone, IDs, SSN, biometrics, live GPS | Prohibited | None | Reject including unexpected payload fields | None | Never collected; remediate accidental receipt | Report accidental collection |
| Guardian relationship/authority | Adult/approved review | Authorized decisions | Do not equate every guardian to statutory natural guardian | Restricted portal staff | While relationship needed; minimum evidence with consent | Correct/challenge access |
| VPC evidence / direct-notice delivery | Approved verifier | Verify parent/scope | No bare checkbox/last4 as verification; no raw child IDs | Restricted portal/verification provider TODO | Minimum necessary evidence with approved consent schedule | Review; alternate approved method |
| Emergency adult contact | Guardian | Reach responsible adult | Parent confirms authority; adult contact only | Portal/authorized team safety staff | 12 months after season or earlier loss of need | Update/remove with suitable replacement |
| Health notes / medical PDF | Guardian/authorized practitioner | Safety/accommodation/clearance | Sensitive; optional notes; field/object encryption and access log | Restricted medical grant, approved storage; emergency providers when needed | Season end except scoped incident/claim/legal hold | Review/correct/delete subject narrow justified hold |
| Program/team/attendance | Portal/staff | Deliver requested program | No behavioral advertising profile | Assigned staff/approved portal | 12 months after season | Review/correct/delete |
| Waiver/concussion/consent/PDF | Adult + server | Evidence of specific decisions | Immutable versions, child scope, purpose limits | Private legal evidence storage | Proposed 7 years from acceptance; necessity/counsel review | Copy/withdraw prospective optional use; explain retained proof |
| Consent IP/UA/signature | Server/adult | Signature evidence/fraud investigation | Restricted legal evidence, distinct from general logs | Restricted evidence store | Necessary evidence only under approved 7-year proposal | Copy/review; minimize exports |
| Payment reference/amount/currency | Processor | Receipt, reconciliation, tax/accounting | No PAN/CVV; avoid child details in metadata | Stripe or Square; portal finance | Proposed 7 years from transaction | Receipt/correction/request; narrow retention explained |
| Photo/video/voice/public first name + team | Approved staff/guardian | Separately chosen media uses | Every identifiable subject authorized; no face tagging | Approved club channels, VEOPLAY; sponsor only separate scoped approval | 3 years from capture or earlier withdrawal; stop future use immediately | Separate consent/withdraw/takedown |
| Parent marketing preferences | Adult | Chosen email/SMS | No child recipients; separate from play | Constant Contact / SimpleTexting | Until unsubscribe; minimal suppression thereafter | Immediate unsubscribe/STOP |
| Screening result/ref/expiry/training | Approved screening process | Gate adult contact/access | Broader protective role scope; raw reports restricted | Approved screening provider TODO; safeguarding lead | Applicable AHCA/league/legal schedule; verify 5-year statutory documentation floor where applicable | Adult staff rights through approved process |
| Privacy requests | Adult/system | Fulfill rights | Authority verification; no child-ID demands | Privacy team and necessary vendor tasks | Proposed 3 years after closure with minimal proof; counsel necessity review | Track/challenge result |
| Incident/legal hold | Staff/counsel | Safety/investigation/required retention | Sensitive access; no blanket indefinite hold | Restricted incident team/counsel/required authorities | Scoped approved term and periodic review TODO | Request access/deletion; explain lawful limits |
| IP/security/access logs | System | Security and troubleshooting | No request bodies/medical details; essential use only | Approved hosting/security tooling | 90 days unless scoped incident evidence | Request rights; explain security limitations |
| Cookie/GPC preference | Browser/adult | Session/security/privacy choice | No ad ID; GPC honors opt-out | First-party service | Session or proposed preference 12 months; actual inventory TODO | Change preferences; GPC remains honored |

## Retention constants and deletion rules

| Constant | Proposed adopted rule | Clock / safeguards |
|---|---|---|
| `ROSTER_MONTHS_AFTER_SEASON` | 12 | Season end; delete routine identity/contact/participation copies |
| `WAIVER_YEARS` | 7 | Acceptance; counsel confirms necessity and minor-claim issues; not all child data |
| `PAYMENT_YEARS` | 7 | Transaction; minimum accounting evidence |
| `HEALTH_END_OF_SEASON` | true | Delete notes/medical uploads; narrow active incident/claim exception |
| `PHOTO_YEARS` | 3 | Capture date, or earlier withdrawal for future use; do not restart on re-enrollment |
| `MARKETING_UNTIL_UNSUB` | true | Unsubscribe stops marketing; minimal suppression evidence persists only as necessary |
| `LOG_DAYS` | 90 | Event timestamp; separate immutable legal evidence schedule |
| `SCREENING` | Applicable AHCA/league/law | Final schedule TODO; current reviewed statute specifies at least 5 years for designated records if applicable |
| `BACKUP_DAYS` | Proposed 35 | Verify actual provider rotation; no ordinary access; replay deletions on restore |
| `VPC_PENDING_DAYS` | Proposed 30 | Delete abandoned adult-only initiation; review reasonable period with counsel |

Proposals are not claimed legally mandatory. Counsel must reconcile necessity, limitation periods, accounting duties and rights. No deletion job blindly removes evidence under a valid scoped hold; no hold becomes an excuse for indefinite retention. Vendor deletions and public caches are tracked. Tombstones contain minimum IDs and actions, not deleted child content. Counts and completion evidence must not reconstruct removed health records.

## Vendor inventory / public appendix inputs

| Intended service | Data minimized to | Required evidence before activation |
|---|---|---|
| Custom BSTC portal | Guardian/child/program/consent data by role | Owner, hosting stack, security/access/deletion controls and actual endpoints |
| Stripe | Adult checkout details, amount and opaque order reference | Exact legal entity/account, privacy contact/link, contract/DPA role, webhook setup, qualifying transaction-notification behavior |
| Square | Same, if actually offered | Same review independently; unused processor need not receive data |
| VEOPLAY | Only approved, scoped footage and necessary access metadata | Exact vendor/product identity TODO; contract, privacy link/contact, retention, deletion and face-recognition/auto-tagging disabled; all-subject consent |
| Constant Contact | Opted-in adult email/name/preferences | Contract/DPA, unsubscribe tests, tracking configuration, exact operator identity/contact/link |
| SimpleTexting | Opted-in adult number, category and minimum message | DPA, registered sender/campaign, operational classification, STOP/HELP tests, no marketing until reviewed |
| Higgsfield | Current marketing hosting/source and technical requests | Actual production role, logs, cookies, subprocessors and data terms; not assumed to host private portal |
| Namecheap | Intended hosting; data only if deployed there | Confirm hosting suitability, account, access/security/backups and exact production role |
| Transactional email / auth / database / storage / backups | Minimum service-specific fields | Provider TODO; reported Resend setup must be audited before listing as live; exact identities, contacts and privacy links |
| FYSA / league | Only verified required eligibility/roster fields | Verify affiliation, mandate, role, sharing terms, retention and parent notice |
| Screening / VPC provider | Adult verification information only as necessary | Approved method, legal role, contract/security/deletion, evidence and no prohibited child data |

For each row admin tracks DPA status (`not_reviewed`, `requested`, `approved`, `expired`, `not_applicable_with_counsel_reason`), approval owner/date, permitted purpose, subproviders, deletion path, incident contact and renewal date. Do not call every vendor a subprocessor without checking its legal role. Public notice must match actual use and include required operator contact details; this unfinished table blocks publication.

## Proposed cookie inventory

| Name/category | Purpose | Owner/context | Duration | Flags / status |
|---|---|---|---|---|
| Session/auth name TODO | Adult login | Host-only portal | Session; idle/absolute limits TODO | Secure, HttpOnly, SameSite reviewed |
| CSRF mechanism TODO | Request integrity | First party | Session | Secure; browser-readable token only if architecture requires, never the session secret |
| Routing cookie if used | Necessary traffic routing | Approved host | Short session | Actual name/flags TODO; omit if absent |
| Preference/GPC name TODO | Remember privacy choice | First party | Proposed 12 months | Secure, SameSite; no advertising identifier |
| Stripe/Square checkout storage | Payment/security | Hosted checkout only | Actual provider inventory TODO | No made-up names or lifetimes |
| Analytics / ads | None | None at launch | None | Prohibited; assert absence in network/build checks |

Inspect cookies, local/session storage, IndexedDB, embedded frames, network requests and server/CDN configuration. A source search alone cannot prove production absence. Record names, domains, provider, purpose, expiry and first-set context. Essential-only deployment requires no cookie wall; footer notice remains. First-party analytics later requires review and opt-in, and stays absent from child-profile responses.
