# BSTC legal and product implementation package

**DRAFT FOR A FLORIDA-LICENSED ATTORNEY — prepared September 23, 2026. Last updated / public effective date: TODO.**

This is an implementation specification and a set of proposed policies, not evidence that the software implements them. Public-facing text in this folder is conditional on implementation and counsel review. Do not copy it onto production until its promises are verified. This consolidated draft supersedes the September 15 package in the uploaded ZIP for this workstream; the older combined Markdown and Word files are not current.

Read in this order:

1. [Architecture, roles, flows, schema, APIs and jobs](01-architecture.md)
2. [Legal documents, WISP and incident runbook](02-legal-documents.md)
3. [Checkboxes, emails and SMS](03-microcopy-emails-sms.md)
4. [Data map, vendors, cookies and retention](04-data-map-cookies-retention.md)
5. [QA, launch blockers and attorney review](05-qa-launch-attorney.md)
6. [Falsehoods the site must never tell](06-falsehoods.md)

[Implementation status](implementation-status.md) separates repository evidence from proposed controls. [Source review](sources-and-decisions.md) records legal corrections and source limitations. The locked notice is also provided as a [plain-text fixture](locked-waiver-notice.txt); it is not a signed waiver.

## Business facts and unresolved publication inputs

| Item | Draft value / decision |
|---|---|
| Legal entity | Brazilian Soccer Training Center INC |
| Brand | Brazilian Soccer Training Center |
| Stated URL | https://www.bstcsoccer.com |
| Domain transition | Owner selected bstcsoccer.store for a new deployment. Canonical legal/portal URL: TODO; do not silently replace the existing Wix domain. |
| Principal postal address | TODO, TODO, FL TODO. The practice park address is not automatically the legal mailing address. |
| Venue | Miami-Dade County, Florida |
| Operator phone | 786.522.7577 — confirmed by Matthew; click-to-call: tel:+17865227577. |
| Privacy / support / safety | privacy@bstcsoccer.com / info@bstcsoccer.com / safety@bstcsoccer.com; mailbox delivery and ownership must be tested. |
| Programs / ages | Florida teams, clinics, camps and private/group soccer training, indoor/outdoor; approximately ages 4–14. All under-18 accounts remain parent-managed. |
| Affiliation | FYSA, as supplied; current affiliation and required forms must be verified. |
| Independent sanctioning authority | UNKNOWN; use stricter screening and safety rules pending counsel determination. |
| Payments / registration | Stripe and Square intended; custom registration portal. Neither integration is established by this package. |
| Official video | VEOPLAY as supplied; exact vendor legal entity, product, URL and privacy settings: TODO. Do not assume a similarly named service is the same vendor. |
| Email / SMS | Constant Contact intended for marketing; SimpleTexting intended for SMS. Transactional email provider: TODO; reported Resend configuration requires verification. |
| Hosting | Current marketing source came from Higgsfield. Namecheap Stellar Plus is reported purchased. Production marketing, portal, database, object storage and backup providers: TODO. |
| Analytics / advertising | None at launch; no ad pixels, behavioral profiling, targeted ads or sale of data. |
| Refund policy | Owner supplied “After First Day of Practice.” Proposed interpretation: no refunds after the first day, subject to mandatory rights. Exact cutoff, pre-start refunds and club cancellations: TODO; confirm before charging. |
| Monthly plans | NO. Subscription machinery stays disabled. |
| Coaches | 1099 as supplied; no employment-classification conclusion is made. |
| Media / streams | Public photos permitted only with separate consent. Streaming disabled until official-tool and all-subject consent checks work. |
| Languages | English. Spanish only after true counsel-reviewed translations of every required document; never auto-translate the locked notice. |
| Insurance | INSURANCE_NOTE: TODO. Do not invent coverage or absence of coverage. |

## Governing drafting decisions

Parent-only collection does not by itself establish COPPA applicability; counsel must evaluate the actual audience and collection. As a protective product choice, use the verification and minimization controls in this package for child profiles anyway. An email check, ordinary checkbox or last four card digits is not sufficient evidence of verifiable parental consent. The proposed non-payment path needs a supported verification method and evidence.

The direct notice precedes verification and child-data collection. A receipt sent after enrollment is an additional record, not the first notice. If card payment is the verification method, do not collect the child profile first. The default launch approach is independent verification before any child profile, including paid flows, until the alternate card-first flow is approved.

Use 16px waiver body and **24px notice** on screen: the eight-pixel difference equals six points. A 22px notice is only 4.5 points larger than 16px and does not satisfy the requested five-point difference. In PDFs use 12pt body / 18pt notice. Preserve the supplied locked wording; counsel must recheck the official text at publication.

All unspecified business inputs remain TODO. Legal time limits, applicability thresholds, screening processes and retention justifications require Florida counsel review. Publication, payment activation, marketing SMS and streaming remain gated on the checklist; committing these drafts does not enable those services.
