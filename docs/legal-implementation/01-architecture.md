# 1. Architecture and implementation specification

**DRAFT — not a description of deployed functionality. Last updated / effective date: TODO.**

## Boundaries and defaults

Use a public marketing frontend, an authenticated parent/staff portal, an authorization-enforcing API, a relational database, private encrypted object storage, a queue/outbox and a job runner. Payment details go directly to hosted Stripe/Square checkout. The application stores processor references and amounts, never PAN, CVV or track data. Vendor webhooks terminate at authenticated, signature-verified endpoints. Browser redirects are not proof of payment.

One child record belongs to an authorized guardian group. Every child lookup, export, consent, enrollment and media operation checks this relationship on the server. Use UUIDs, database constraints, transactional state changes and deny-by-default authorization; unguessable IDs are not access control. Do not place child names, DOB, health information or tokens in URLs, payment metadata, analytics, ordinary logs or email subjects. Staff receive only assigned-team access.

Launch flags: `ANALYTICS_ENABLED=false`, `ADS_ENABLED=false`, `MARKETING_SMS_ENABLED=false`, `RECURRING_PAYMENTS_ENABLED=false`, `PUBLIC_LIVESTREAM_ENABLED=false`, `CHILD_SELF_SIGNUP_ENABLED=false`. Server configuration must reject attempts to enable prohibited features; hiding buttons alone is insufficient. Public media publishing is separately gated by verified consent and subject review.

Reject child SSNs, student/government IDs, biometrics, face templates, voiceprints, gait and precise GPS fields, including unexpected nested JSON/upload metadata. No face recognition or automatic tagging. Strip EXIF/location metadata from permitted photos. Do not retain adult ID images in the club database; prefer non-biometric verification. No player login, teen social login, child email/phone fields, player messaging or public child comments. Programs are intended for United States / Florida families.

## Routes and footer

Every public and portal page has accessible links in this order:

Privacy Policy · Children’s Privacy · Terms of Use · Cookie Notice · Photo & Media Policy · Concussion & Safety · Accessibility · Do Not Sell or Share · Contact

| Route | Purpose / access |
|---|---|
| `/privacy` | General notice; current legal version |
| `/privacy/children` | Children's online notice, retention and official vendors |
| `/terms` | Parent-only eligibility, fees, conduct and venue |
| `/cookies` | Verified cookie inventory |
| `/media-policy` | Optional permissions and withdrawal |
| `/safety` | Concussion, weather, reporting and screening summary |
| `/accessibility` | Assistance and accessibility statement |
| `/do-not-sell` | No sale/share policy, GPC and intake |
| `/contact` | Adult-only inquiry; no child data before verification |
| `/account` | Verified adult account; private |
| `/account/privacy` | Review/export, corrections, deletion and consent choices |
| `/register` | Adult account creation, notice and verification |
| `/enroll` | Verified parent; program/child-specific enrollment |
| `/tryout` | Parent-only free path; do not confuse existing `/tryouts` marketing route with enrollment |
| `/legal/waiver/:versionId` | Immutable waiver text; no signature or child data on public version page |
| `/legal/concussion/:versionId` | Immutable annual informed-consent text |
| `/roster/*`, child profile routes | Authorized staff/guardians only; no public contacts |

Private account, roster and child routes return `X-Robots-Tag: noindex, nofollow` on success and error responses, use `Cache-Control: private, no-store`, and stay out of sitemaps. Apply to bare paths and descendants, HTML, API responses and signed PDFs as appropriate. `robots.txt` disallows private paths but does not replace authentication.

## Roles and permissions

| Role | Allowed / prohibited |
|---|---|
| `parent_guardian` | Adult login; own household children; enroll, view consents, request rights; no other household access |
| `authorized_second_parent` | Adult verified invited guardian; scoped child access; cannot delete primary account or escalate own grants |
| `child_profile` | Data entity only; never an authentication principal, including ages 13–17 |
| `coach` | Assigned roster and parent communications; screening cleared and unexpired; no unrestricted health notes |
| `assistant_coach` | Same gates and team scope |
| `team_manager` | Minimum logistics/parent contacts; same gates |
| `team_parent_roster` | Approved roster contact scope; same gates |
| `photographer` | Approved upload/review tasks only; screening gate; no health or general roster export |
| `admin` | MFA required; approved administration; medical access needs separate grant; all privileged acts audited |
| `staff_medical_view` | Need-to-know health data for assigned children; decrypt/read/download logged; separate grant, not automatic for coaches |

Any adult with direct minor contact, even an admin or medical viewer, also needs current screening. Evaluate `screening_status == cleared AND screening_expires_on > local_today` on login AND every protected request; expire at midnight America/New_York and revoke active sessions. Missing expiry or training evidence fails closed. A job is a backstop, not the authorization mechanism. No unscreened person may be presented as an active coach or assigned to direct contact. Treat volunteers and 1099 contractors alike for these product gates.

## Flows A–D and consent order

### A. Paid enrollment

1. Adult enters name, own email/phone and mailing address; use Florida state default but permit an out-of-state camp parent's true address. Verify email. Ask age-18+/parent authority without collecting a child profile. Passwords use Argon2id or reviewed bcrypt; magic links are single-use and short-lived.
2. Present and send the direct children's notice before child-data collection. Identify proposed fields, purposes, vendors, optional disclosures and rights. Record notice version, delivery status and verification scope. Obtain explicit adult acknowledgments.
3. **Default:** complete an approved independent non-payment parental verification before any child profile or child-specific legal form is saved. A signed-and-returned form or trained verification interaction is a proposed method, subject to counsel and operational review. A checkbox, last four card digits or email verification alone leaves VPC `pending`.
4. Add child name, DOB, optional gender and jersey size; hide school by default. Select program; collect emergency adult contact. Health notes are optional, encrypted and staff-only. No unneeded child photo required to play.
5. Present separate unchecked parent authority, Terms, Privacy/Children's Privacy, inherent-risk waiver, annual concussion, emergency medical and heat/lightning/SCA acknowledgments. The waiver is signed by a natural guardian or routed to counsel if authority is uncertain; generic legal-guardian status does not automatically establish authority under the statutory natural-guardian waiver provision. Never let a sibling or team parent sign for a child merely because they have portal access.
6. Offer separate unchecked media, nested sponsor-likeness, operational SMS and marketing email. Marketing SMS remains hidden and server-disabled. Show exactly which optional third-party/public disclosures each permission allows. No “accept all” across optional permissions.
7. Server validates current versions, scope, authority, VPC and required consents, renders PDF evidence, atomically finalizes the consent set and records a durable outbox event. Then create hosted checkout with amount/currency from server program pricing. Validate signed webhook; deduplicate processor event IDs; mark payment successful and enrollment `paid` only after verified result.
8. Send confirmation, processor receipt and authenticated signed-document download links. Send/repeat the direct notice when the first under-13 profile or first enrollment completes, without replacing the earlier notice. Delivery failures are visible to staff. No roster access before required safety and consent gates.

**Optional card-first VPC design, disabled until counsel approves:** create an adult-only order for a program, show direct notice and obtain parental consent, then use a real transaction that notifies the primary account holder. No child profile/child health payload may be saved before verified payment. Associate child-specific consents afterward; until then mark the order as incomplete and do not authorize participation. Disclose the unfinished-registration refund/cancellation process before charging (TODO). This is deliberately different from collecting child data first and hoping a later payment cures it. The normal checkout endpoint below requires a completed waiver; any card-first verification endpoint must be separately designed and reviewed, not an undocumented bypass.

### B. Free clinic, tryout, waitlist or guest

Follow A steps 1–6 and 8 without charging. Before verification, collect only minimal adult contact and generic program interest. No child profile, photo, jersey photo, health note or school payload is accepted. After approved non-payment VPC, child-specific requirements apply before physical participation, including annual concussion and waiver. Record `method=electronic_attestation_no_payment` plus a separate successful verification record and its actual method. That legacy method label records the clickwrap channel; it must never independently set `verified=true`. Incomplete verification means adult-only interest remains pending. Delete abandoned consent-initiation records after 30 days as a proposed maximum, reviewed by counsel.

### C. Another child

Reuse verified adult identity only within the documented verification scope. Each new child needs their own notice/scope check, waiver, concussion, medical and heat/SCA decisions. All media choices start false; never clone sibling decisions. Material changes or insufficient verification scope require renewed verification/consent. Each child and enrollment references its own consent set.

### D. Withdrawal, requests and custody

`/account/privacy` permits separate withdrawal of media, sponsor use, email marketing and operational SMS; shows the marketing-SMS control only if that product is actually enabled. Record append-only withdrawal events, update suppression immediately, invalidate pending media jobs and cached public URLs, then run vendor takedowns. Future uses stop immediately; target takedown of controlled site/social copies within 10 business days, with hourly retries. Previously distributed print cannot be recalled; do not promise removal of third-party copies beyond control.

For deletion, verify requester authority without demanding prohibited child IDs. Freeze public display immediately. Delete unnecessary child data and vendor copies; narrowly retain justified waiver/payment records or scoped holds with dates and reasons. A guardian dispute goes to admin/counsel; do not silently destroy another guardian's operational records or delay indefinitely. Keep a dated interim decision and response clock. An authorized second parent cannot delete the primary adult's account. Never condition statutory rights on paying a debt. Child-submitted information discovered contrary to the model is isolated and promptly deleted across vendors unless counsel identifies a narrow preservation duty; do not convert it to a valid account by retrospective consent.

## Canonical SQL-like data model

All tables include `created_at timestamptz` and `updated_at timestamptz`. Use immutable records for legal versions and acceptance evidence; `updated_at` does not authorize rewriting evidence. Foreign keys restrict deletion when justified retained evidence exists; avoid blanket cascade deletion of legal records. Separate identity fields from retained evidence so unnecessary data can be removed. All request scoping is checked server-side.

| Table | Fields beyond timestamps; constraints |
|---|---|
| `users` | `id PK, email UNIQUE, phone, password_hash nullable, name, address_json, role, email_verified_at, status, mfa_enrolled_at`; no child role allowed to log in |
| `children` | `id PK, primary_parent_user_id FK, first_name, last_name, dob, gender_optional nullable, jersey_size, public_display_name, school_collected boolean DEFAULT false`; display name generated from first name + team only; no school text field at launch |
| `child_guardians` | `child_id FK, user_id FK, relationship, is_primary, can_enroll, can_delete_request, authority_verified_at`; unique pair and one primary; invite/authority evidence stored separately |
| `programs` | `id, name, type, price_minor, currency, season_start, season_end, active, required_consent_policy_id`; publish cancellation terms |
| `sessions` | `id, program_id, starts_at, ends_at, facility_id, status, cancellation_reason`; facility location is not tracking a child's live location |
| `enrollments` | `id, child_id, parent_user_id, program_id, status, consent_set_id, season_end, participation_hold`; unique active child/program as appropriate |
| `legal_documents` | `id, type, version, semver, title, body_markdown, body_hash, effective_at, retired_at, counsel_review_ref, publication_status`; unique type/version; immutable body; no implicit re-binding |
| `consent_sets` | `id, user_id, child_id, enrollment_id nullable, state, finalized_at, verification_id, request_hash`; state pending/finalized/failed; enforce required set completeness |
| `consents` | `id, consent_set_id, user_id, child_id nullable, enrollment_id nullable, type, legal_document_id, accepted, accepted_at, ip, user_agent, checkbox_label_snapshot, page_url, pdf_asset_id, gpc_present, method, document_hash, parent_signature_name, verification_id`; server stamps trusted IP/UA/time/hash; declines recorded without treating them as grants |
| `consent_events` | `id, consent_id, action, effective_at, actor_user_id, reason`; append-only grant/withdrawal/supersession; latest effective event defines active permission |
| `vpc_verifications` | `id, user_id, scope_json, status, verification_method, provider_ref, evidence_asset_id, notice_document_id, notice_delivered_at, verified_at, reviewed_by`; no raw government ID/card data; status pending/verified/failed/revoked |
| `media_assets` | `id, child_id nullable, url PRIVATE by default, taken_at, public DEFAULT false, requires_media_consent DEFAULT true, expires_at, review_status, publication_targets`; child_id alone is insufficient for group media |
| `media_subjects` | `media_asset_id, child_id nullable, external_subject_ref nullable, permission_evidence_id, reviewed_by`; every identifiable subject, including opponents, must have evidence; unknown subject blocks publication |
| `emergency_contacts` | `id, child_id, name, relationship, phone`; adult contacts; parent confirms authority to provide |
| `health_notes` | `id, child_id, season_id, ciphertext, key_id, last_accessed_by, last_accessed_at, medical_pdf_asset_id nullable`; private encrypted objects; no plaintext replicas or logs |
| `payments` | `id, processor, processor_payment_id, amount, currency, parent_user_id, enrollment_id, status`; unique processor/payment ID; refund ledger references payment; NO pan/cvv/full track |
| `subscriptions` | `id, parent_user_id, status, current_period_end, cancel_at, cancel_url_disclosed`; disabled at launch; no endpoint may activate |
| `coaches_staff` | `id, user_id, role, screening_status, screening_vendor, screening_ref, screening_expires_on, safesport_or_league_training_at, assigned_team_ids`; raw background reports restricted outside roster database |
| `cookie_preferences` | `user_or_device_id, essential true, analytics false, ads false, gpc, updated_at`; database check ads=false; minimal first-party identifier, no advertising ID |
| `data_requests` | `id, user_id, child_id, kind, status, due_at, closed_at, notes, identity_verified_at, vendor_task_ids`; restricted notes; 30-day target, 45-day internal ceiling unless shorter applicable rule; scope-specific legal deadlines tracked separately |
| `audit_log` | `id, actor_id, action, entity, entity_id, ip, at, meta_json`; no raw health/body/token/payment content; operational logs purge at 90 days |
| `incidents` | `id, detected_at, contained_at, determined_at, reason_to_believe_at, notify_individuals_by, notify_ag_required, counsel_notified_at, owner_role, legal_hold_id`; do not wait for formal determination if earlier reason-to-believe starts clock |
| `vendor_inventory` | `id, legal_name, service, approved_purposes, data_categories, dpa_status, dpa_ref, security_review_at, subprocessors, deletion_process, contact`; approval required before data transfer |
| `legal_holds` | `id, entity_scope, reason, authority_ref, owner_role, review_at, released_at`; narrow, reviewable and no indefinite blanket child archive |
| `idempotency_keys` | `user_id, operation, key_hash, request_hash, result_ref, expires_at`; unique user/operation/key; different payload with same key returns409 |
| `outbox` | `id, type, aggregate_id, payload_reference, status, attempts, next_attempt_at`; minimal payload; no unencrypted health notes; retry/dead-letter visible |
| `webhook_events` | `vendor, event_id UNIQUE per vendor, verified_at, processed_at, result`; minimize raw retained payload |
| `concussion_holds` | `id, child_id, removed_at, incident_ref, clearance_asset_id, authorized_review_at, released_at`; medical evidence encrypted, independent from annual consent |

Admin `policy_versions` is a changelog view over legal documents and publication/review events, including who approved, effective dates, hashes and superseded versions. Store hashes with SHA-256 over canonical content; preserve raw content and renderer version. No content hash sent by the browser is trusted.

### Required enums

| Enum | Values |
|---|---|
| `enrollment.status` | `draft`, `consented`, `paid`, `waitlist`, `withdrawn`, `refunded`; free confirmed participation also needs an explicit `confirmed_at`, never fake a payment |
| `legal_documents.type` | `privacy`, `children_privacy`, `terms`, `waiver`, `concussion`, `media`, `sms_ops`, `sms_mkt`, `medical`, `heat_sca`; add versioned `parent_attestation`, `email_marketing`, `coppa_notice`, `do_not_sell` so no consent references a missing document |
| `consents.method` | `payment_card_plus_ack`, `electronic_attestation_no_payment`, `admin_attestation`; method is distinct from verified identity and legally sufficient authority |
| `screening_status` | `not_started`, `pending`, `cleared`, `failed`, `expired` |
| `data_requests.kind` | `access`, `correct`, `delete`, `portability`, `opt_out_sale`, `withdraw_media` |

| Consent type | Scope / required status |
|---|---|
| `parent_guardian_attestation` | Adult + child authority; required, not standalone VPC |
| `terms` | Adult enrollment; required |
| `privacy_and_children` | Both current document versions referenced; required acknowledgment, not blanket consent |
| `inherent_risk_waiver` | Child/program; required authorized natural-guardian signature |
| `concussion` | Child + participation year; required before practice/tryout |
| `emergency_medical` | Child/program; required |
| `heat_sca` | Child/program; required |
| `media_club_channels` | Child + named channels; optional; public disclosure requires appropriate separate VPC scope |
| `media_sponsor_likeness` | Child + named sponsor/campaign/use/term; optional; requires media permission; generic future sponsor consent insufficient |
| `sms_operational` | Adult number; optional |
| `sms_marketing` | Adult number; optional; disabled until reviewed |
| `email_marketing` | Adult email; optional |
| `coppa_vpc` | Child or pre-profile parent scope; verified evidence required, separate nonessential disclosure grants tracked |
| `do_not_sell_opt_out` | Adult/device/GPC signal; no sale begins regardless of preference |

For a combined privacy acknowledgment attach both legal-document IDs through a `consent_documents(consent_id,legal_document_id)` relation. One singular `legal_document_id` is the primary reference, not an excuse to omit the children's version. Account-level communications choices do not grant child media rights. Administrative attestation may document a reviewed signed form; it cannot override a missing parent's decision.

## API contracts

All JSON endpoints reject unknown fields, bound payload sizes, validate content types, enforce HTTPS and produce safe structured errors. Authenticate via host-only Secure/HttpOnly session cookie; CSRF protection for state changes; strict CORS allowlist. Check ownership, current screening and role scope on every request. Never log request bodies from child/health/consent endpoints. Server rate limits: proposed auth 5 attempts/minute/IP plus account backoff; privacy intake 5/hour/account with accessible alternative; tune without blocking legitimate rights. No account-existence leaks.

| Endpoint | Request / authorization / result |
|---|---|
| `POST /api/auth/register` | Adult fields only; rate-limited; returns generic202 and verification event; no child payload |
| `POST /api/auth/verify-email` | Single-use expiring token; records verified email; does not mark VPC verified |
| `POST /api/vpc/start` | Verified adult, notice version, chosen approved method; sends direct notice before collecting child data |
| `POST /api/vpc/complete` | Trusted verification service or reviewed staff workflow; authenticated evidence; browser cannot assert success |
| `POST /api/children` | Verified email AND successful scoped VPC; allowed child fields only; ownership from session;201; invalid authority403; unknown forbidden fields400 |
| `POST /api/enrollments` | Own child + valid program; server pricing; draft201; participation denied until consent/safety rules pass |
| `POST /api/consents/batch` | Authenticated user, child/enrollment context, array `{type, legal_document_id, accepted}`; `Idempotency-Key` required; server stamps IP/UA/hash/PDF; declines explicit; required acceptance missing400; stale version409; foreign child403 |
| `POST /api/checkout/session` | Completed required consent set including waiver, verified VPC, own enrollment; `Idempotency-Key`; amounts from DB; returns checkout URL; no free-flow card requirement; invalid consent400 |
| `POST /api/payments/:processor/webhook` | Verify signature over raw body and event age using vendor rules; unique event; transaction/outbox; reject spoof; return success only after durable recording |
| `GET /api/account/children/:id` | Guardian scope; minimum fields; medical data only authorized adult/medical grants; no-store |
| `GET /api/account/privacy/export` | Adult reauthentication; asynchronous export job202 or authenticated short-lived download; own scope only; no email attachment of roster/medical archive |
| `POST /api/account/privacy/requests` | Verified adult/kind/child;202 plus request ID and target date; safe unauthenticated alternative for account-access problems; no request must vanish on queue failure |
| `POST /api/account/media/withdraw` | Own child and scope; immediate append-only event/suppression;202 with takedown task; sponsor permission also withdrawn if base permission withdrawn |
| `POST /api/sms/stop` | Authenticated account action OR signature-verified carrier callback; normalize number; suppress immediately, cancel queued sends, deduplicate and log; no login required for carrier STOP |
| `GET /api/legal/:type/current` | Published reviewed version only; returns ID/hash/body/effective date; immutable version endpoint also needed |
| `GET /robots.txt` | Public disallow rules for private routes; separate X-Robots-Tag headers still required |

Consent batch transaction: reserve idempotency key → validate authority/version/scope → persist pending set → render/store accessible PDFs using immutable exact content → finalize rows and outbox atomically. If PDF storage fails, consent is not finalized and checkout remains blocked. A recovery worker cleans orphan objects and retries the same set without duplicate accepts. Object keys are private and downloads authenticated; attach or deliver secure receipt copies without publicly exposing signatures. Each acceptance PDF contains signer, child scope, checkbox labels, document text/hash/version, timestamp, signature intent, renderer version and evidence reference. Include IP/UA in restricted evidence; do not unnecessarily expose it in parent-facing email.

Preserve original accepted versions permanently for their approved retention term. Superseding a document generates a request for new consent when necessary, never rewrites old consent foreign keys. Required consent validity is evaluated by child/program/year/version policy; annual concussion expires regardless of whether the text changed.

### GPC and media authorization

At ingress, `Sec-GPC: 1` sets `gpc=true`, records opt-out and keeps `ads=false` and targeted advertising/sale/share disabled. Support anonymous preferences without forcing login; merge conservatively on login and do not clear GPC on logout. Store only a minimal first-party preference identifier. Reject contradictory advertising opt-in. No analytics at launch; later approved first-party analytics requires opt-in and must be absent from child-profile contexts and responses that set a child-profile cookie. Prefer no child-profile cookie at all.

Public media predicate: asset public flag AND reviewed status AND unexpired AND no withdrawal/hold AND **every identifiable subject** has active scoped club-media consent and verified disclosure authority. Sponsor usage adds campaign-specific permission. Resolve active events at request time; `accepted=true` on a historic row is insufficient. For public streams validate all participating/visible subjects and opposing-team permissions; otherwise remain off. Revoke cached delivery, not just a database flag. No third-party embeds on player pages; approved click-to-load parent action still requires notice, applicable permission and vendor approval.

## Jobs and operational controls

| Schedule | Job and observable completion |
|---|---|
| Nightly | Expire staff screening; deactivate roles/sessions; alert safeguarding owner; request-time checks already enforce expiry |
| Nightly | Delete ended-season health notes and encrypted medical objects unless scoped open incident/claim hold; record category/count proof without copying health content |
| Nightly | Purge operational/access logs older than90 days; do not confuse retained signature evidence with general logs |
| Nightly | Purge eligible roster/contacts after12 months, media after3 years, abandoned verification after30 days; scoped hold/consent withdrawal can shorten or suspend applicable category |
| Hourly | Takedown retry across CDN, site, official social/video vendor; immediate suppression already in effect; alert before10-business-day ceiling |
| Hourly | Privacy-request deadline monitor, outbox retries, failed PDF/email/vendor deletion alerts, expired export links |
| Weekly | Report superseded legal consents and upcoming concussion/screening expiry; no silent re-binding |
| Daily / quarterly | Encrypted backups under approved bounded retention; quarterly isolated restoration test and deletion replay; evidence recorded |
| Annual and material change | WISP/child-data risk review, vendor review, consent-purpose and retention necessity review; track responsible role and due dates |

Jobs use leases/idempotent operations, bounded retries, metrics and dead-letter escalation. Backups are inaccessible for ordinary use; proposed rolling expiry35 days, subject to verified provider capabilities. Restore replays deletion/withdrawal tombstones before any restored service becomes available. Consent/payment records retained for seven years require category-specific necessity review; do not use that period for all child data.

## Accessibility and security acceptance

WCAG2.1 AA target on public pages, portal, checkout handoffs and PDFs: proper labels/landmarks, 4.5:1 ordinary text contrast, visible keyboard focus, usable zoom/reflow, alt text, errors announced in live regions, no color-only status and keyboard-only completion. Required waiver text stays in normal document flow, fully expanded; page scrolling is allowed, a tiny internal scroll box is not. Scroll-to-enable is a UI aid with keyboard/screen-reader equivalent; explicit signature remains required and the server never treats scrolling as consent.

Waiver CSS: `.waiver-body {font-size:16px}` and `.statutory-notice {font-size:24px;font-weight:700;letter-spacing:normal;color:#111;background:#fff;white-space:normal}`. Test computed sizes at breakpoints, print and zoom; avoid inherited scaling that shrinks the notice. PDF body12pt/notice18pt, tagged headings, reading order, selectable text and language metadata. Do not claim a PDF accessible solely because it is generated from HTML.

TLS1.2+; modern TLS preferred. Encryption at rest and field/object-level authenticated encryption for medical data with managed keys and rotation. Admin MFA required; SSO recommended. Separate dev/staging/production keys, least privilege, malware scanning/quarantine for uploads, safe MIME validation, file-size limits, no public buckets, no roster forwarding to personal email. WISP and breach procedures in Part2 are operational requirements with evidence owners.
