# 3. In-product copy and communications

**DRAFT FOR COUNSEL. Last updated: TODO.** Render unresolved business inputs as TODO in review only; block public delivery. Runtime variables below are real values inserted by the application, not invented examples. Escape all user content. No email subject contains child health information. Templates are specifications, not configured vendor campaigns.

## Checkbox deck

All boxes initially false in DOM, client state and API. No bundled optional acceptance. Required privacy acknowledgments do not authorize optional disclosures. Each choice stores the exact label/helper, versions, scope and signature intent.

| Consent | Label | One-line helper | Status |
|---|---|---|---|
| Parent authority | I am 18 or older and am this child's parent or legal guardian with authority to enroll them. | This statement does not replace parental verification or natural-guardian waiver authority. | Required |
| Terms | I agree to the Terms of Use. | Read version {{VERSION}} before continuing. | Required |
| Privacy | I have read the Privacy Policy and Children's Privacy Policy. | This acknowledgment does not opt you into publicity or marketing. | Required |
| Waiver | I have read the full inherent-risk waiver and notice and voluntarily sign as this child's authorized natural guardian. | This covers inherent risks only, not BSTC's negligence as to a minor. | Required; uncertain authority goes to counsel |
| Concussion | I understand concussion risks and agree to immediate removal and written medical clearance before return. | A new informed consent is needed each year before participation. | Required |
| Emergency medical | I authorize emergency evaluation and treatment when needed for this child if I cannot be reached in time. | Staff will attempt to contact me; this is not a negligence release. | Required |
| Heat/SCA | I understand heat, lightning and sudden cardiac arrest precautions and agree to follow safety instructions. | Sessions may stop for unsafe conditions. | Required |
| Club media | I allow club-channel photos, video and voice of {{CHILD_NAME}} on the listed website, club social accounts and print materials. | Optional; public copies may persist; withdraw without affecting play. | Optional |
| Sponsor likeness | I allow {{CHILD_NAME}}'s likeness for {{SPONSOR}} / {{CAMPAIGN}}, including {{USE}}, on {{CHANNELS}} until {{END_DATE}}. | Separate permission; no generic sponsor authorization; base media consent required. | Optional; disabled with incomplete facts |
| Operational SMS | Send schedule, weather, cancellation and account texts to {{PHONE_NUMBER}}. | Automated messages may be used. Frequency varies. Msg & data rates may apply. Reply STOP to cancel, HELP for help. | Optional |
| Marketing email | Send BSTC news and offers to {{EMAIL}}. | Unsubscribe at any time; participation does not depend on this choice. | Optional |
| Marketing SMS | I agree that Brazilian Soccer Training Center INC may send marketing texts to {{PHONE_NUMBER}}, including through automated systems for selecting or dialing numbers. Consent is not required to buy or participate. | Frequency varies. Msg & data rates may apply. Reply STOP to cancel, HELP for help. | Optional; hidden and server-disabled pending FTSA review |
| VPC collection/use | After reading the direct notice, I authorize the described necessary collection and use for my child's program. | Complete the approved verification step; this checkbox alone is not verification. | Required before child collection |
| VPC optional disclosure | I separately authorize the optional public disclosure described in my selected media permission. | Necessary collection can proceed without this disclosure choice. | Optional; scope linked to media grant |

Electronic-signature copy: “Typing my full legal name and selecting Sign records my electronic signature for the choices I made. I can download the exact accepted documents. I may request an available accessible or paper process at info@bstcsoccer.com.” Counsel confirms ESIGN/UETA requirements, consumer electronic-delivery consent where applicable and any form requiring a different execution method. A signature is not automatically sufficient parental identity verification.

Buttons: `Read documents`, `Sign required forms`, `Continue without optional permissions`, `Review payment`, `Withdraw media permission`, `Request a copy`, `Request deletion`. No guilt-based labels or preselected upsells.

Errors: “Verify your email before adding a child.” “Complete parental verification before entering child details.” “The required waiver has not been signed.” “This document changed. Review the new version; your earlier signature stays unchanged.” “We could not save your document copy. Your enrollment is not ready for payment; please retry.” “This action is not available for your account.” Never echo forbidden health fields into errors/logs.

## Email delivery rules

Transactional messages use verified sender/domain and approved vendor TODO. SPF/DKIM/DMARC and delivery failures must be checked. Account links are single-use/short-lived; document downloads require authorization. Never send roster exports or medical attachments to personal email. Marketing email uses Constant Contact only after separate opt-in, accurate subject/sender, postal address TODO and working unsubscribe; suppress immediately, within applicable CAN-SPAM timing at latest. Transactional templates contain no promotional upsell.

### Verify email

Subject: Verify your BSTC parent account

Hello {{PARENT_NAME}}, confirm your email to continue: {{VERIFY_URL}}. This link expires at {{EXPIRY}} and works once. Verification of this email does not complete parental verification. If you did not request an account, ignore this message or contact info@bstcsoccer.com. Do not reply with child or medical information.

### Payment receipt

Subject: Your BSTC payment receipt

We received {{AMOUNT}} {{CURRENCY}} for order {{ORDER_ID}} through {{PROCESSOR}} on {{DATE}}. View your receipt: {{AUTHENTICATED_RECEIPT_URL}}. This email contains no full card number. Registration status: {{VERIFIED_STATUS}}. A receipt alone does not authorize participation if required forms or safety clearance remain incomplete. Questions: info@bstcsoccer.com.

### Enrollment confirmation

Subject: BSTC enrollment confirmed

Hello {{PARENT_NAME}}, enrollment {{ENROLLMENT_ID}} is confirmed for {{PROGRAM}}. Review the schedule and your selected choices in {{ACCOUNT_URL}}. Your accepted Terms, Privacy notices, waiver, concussion, medical and safety documents are available at {{DOCUMENTS_URL}} as exact PDF copies. Optional media/SMS/email choices: {{CHOICE_SUMMARY}}. You can change optional choices in {{PRIVACY_URL}}. First session: {{SESSION_DATE_TIME_LOCATION}}. Refund terms: {{FINAL_REFUND_POLICY_LINK}}. Support: info@bstcsoccer.com. Do not include health notes or a full roster in this email.

### COPPA direct parent notice — send BEFORE child collection

Subject: Review how BSTC will use your child's information

Hello {{PARENT_NAME}}, you requested registration with Brazilian Soccer Training Center INC, TODO, TODO, FL TODO; phone TODO (supplied 786-552-7577); privacy@bstcsoccer.com. We collected your adult contact to send this notice and request parental permission. Please review it before providing child details.

With your verified permission we will collect your child's name, birthdate, jersey size, program/team and necessary participation records, your relationship to the child and emergency adult contact. Gender and relevant health notes are optional; health information is restricted. We keep consent evidence and essential security/session identifiers. We use this information for registration, age grouping, schedules, safety, payment, parent communication and honoring choices. Children do not have accounts or communicate through the service.

Intended providers are the custom registration tool, Stripe and Square for payment, Constant Contact for opted-in parent marketing email, SimpleTexting for opted-in texts and VEOPLAY for separately authorized video. Approved hosting, storage/database, backup and transactional-email operators are TODO and must be identified before this notice is sent. Vendors receive minimum necessary data under reviewed safeguards. We do not sell child data or use targeted ads.

Your child's information is not made public without separate permission. Optional club media may appear on {{APPROVED_CLUB_CHANNELS}} with first name and team only; public copies may persist. Sponsor-likeness and live-stream uses need their additional scoped permissions. You may consent to necessary collection/use without optional disclosure; declining publicity does not affect play.

Routine rosters expire 12 months after season end; health records at season end except a narrow incident/claim hold. Proposed waiver/essential consent evidence retention is seven years from acceptance and payment evidence seven years from transaction, pending counsel's necessity review. Media expires three years from capture or earlier for future use on withdrawal. Marketing ends at unsubscribe except suppression evidence; ordinary logs expire after 90 days. Holds and backups follow the published, verified schedule. We do not keep information indefinitely for possible future use.

You may review/correct information, request deletion, refuse further collection/use or withdraw optional permissions at {{PRIVACY_URL}} or privacy@bstcsoccer.com. We verify your authority, explain narrowly retained records and discuss any participation effect of withdrawing necessary data. Read the full notice and provider list at {{CHILDREN_PRIVACY_URL}}.

To authorize the described collection/use, visit {{VERIFICATION_URL}}, choose the separate permissions you want and complete {{APPROVED_VERIFICATION_METHOD}}. A checkbox or email confirmation alone does not complete verification. If you do not proceed, no child profile is created and abandoned consent-initiation contact expires after the approved period (proposed 30 days). You can contact privacy@bstcsoccer.com for help. A copy of this notice is sent again after the first under-13 profile/enrollment completes; that later copy does not replace this advance notice.

### Roster change

Subject: Your BSTC program assignment changed

There is an update to enrollment {{ENROLLMENT_ID}}. Sign in at {{ACCOUNT_URL}} to review the assignment and schedule. This email does not include other families' contact information. Questions: info@bstcsoccer.com.

### Session canceled

Subject: BSTC session canceled — {{DATE}}

The {{PROGRAM}} session at {{TIME}} on {{DATE}} is canceled because of {{GENERAL_REASON}}. Do not attend that session. Check {{SCHEDULE_URL}} for the next update. Any makeup or refund follows the disclosed program policy. For an emergency, call 911.

### Privacy request received

Subject: BSTC privacy request {{REQUEST_ID}} received

We received your {{REQUEST_KIND}} request on {{DATE}}. We may ask you to verify authority through a secure process; do not email a child's ID or medical details. Target response date: {{TARGET_DATE}}. We will explain any lawful limitation. Track the request at {{REQUEST_URL}} or contact privacy@bstcsoccer.com.

### Privacy request closed

Subject: Update on BSTC privacy request {{REQUEST_ID}}

Your request has been reviewed. Result: {{SAFE_SUMMARY}}. View the secure details at {{REQUEST_URL}}, including completed deletions, vendor actions, remaining restricted backup rotation and any limited retained records with reasons and expiry/review dates. If you believe the result is incorrect, contact privacy@bstcsoccer.com for review. Do not label a request fully deleted while vendor tasks remain outstanding.

### Marketing email footer

Brazilian Soccer Training Center INC · TODO, TODO, FL TODO. You receive these offers because you opted in. Unsubscribe: {{ONE_CLICK_UNSUBSCRIBE_URL}}. Preferences: {{PREFERENCES_URL}}. Support: info@bstcsoccer.com. A missing physical address blocks marketing sends.

## SMS templates

Operational: “BSTC: {{PROGRAM}} on {{DATE}} at {{TIME}} is canceled due to {{REASON}}. Updates: {{OFFICIAL_URL}}. Msg & data rates may apply. Reply STOP to cancel, HELP for help.” No child name, health detail or promotion.

Marketing — disabled: “BSTC: {{COUNSEL_APPROVED_OFFER}}. Details: {{OFFICIAL_URL}}. Msg & data rates may apply. Reply STOP to cancel, HELP for help.” Requires new approved written opt-in, number/signer/evidence, sender registration and send-time suppression checks.

STOP confirmation: “BSTC: You are unsubscribed from texts from this sender. No more texts will be sent unless you opt in again. Manage preferences at {{OFFICIAL_URL}}.” Send only if allowed by current carrier/vendor rules; no promotional content.

HELP: “BSTC help: info@bstcsoccer.com, phone TODO. Message frequency varies. Msg & data rates may apply. Reply STOP to cancel.” Suppression rules determine whether a response is allowed; never reactivate through HELP.

Vendor message types must distinguish operational and marketing. An ambiguous or sender-wide STOP suppresses all messages for that sender. A separate category opt-out can leave another category active only if the parent intended it and carrier rules and law permit it. Carrier suppression always wins; do not bypass it with another sender.
