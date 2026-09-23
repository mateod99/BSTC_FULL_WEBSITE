# Implementation status and delivery boundary

**DRAFT — source audit September 23, 2026.** Baseline: website commit `047fca4f649a54532bcb6eb06fdb00d46fe2611f`, imported from Higgsfield revision `32c81f437020326eab2cf7aac88fb983c6b8b3b7`.

This delivery adds a reviewable implementation package. It does not install a registration backend or change the live Higgsfield/Wix/Namecheap deployment. The separate `BSTCPaymentPortal` repository has not been audited as part of this package. “Specified” below never means “working in production.”

| Area | Evidence in marketing source | Remaining work |
|---|---|---|
| Public marketing pages | Home, about, programs, travel, tryouts and contact routes exist. | Validate deployed source and reconcile domain/phone. |
| Prior requested content | Matthew/Marina emails and training schedule are in the imported source. | Keep GitHub and deployed Higgsfield revisions synchronized deliberately. |
| Legal pages | `/privacy` and `/terms` exist as short pages. Footer links only these two policies. | Replace only after review; build all remaining policy routes and full footer. |
| Contact intake | `app/src/routes/contact.tsx` collects player name and age and opens a `mailto:` draft; it does not establish verified consent or successful delivery. | Convert initial inquiries to adult-only minimal contact; direct enrollment to a verified portal. No child photo/health/school in free-form text. Never show mail launch as confirmed receipt. |
| Parent account / children | No registration, account or child-profile routes in the inspected marketing routes. | Implement authentication, VPC, ownership, guardian invitations and age gates in portal. |
| Waiver / consents / PDFs | No acceptance storage or PDF pipeline established by this source. | Versioned legal registry, immutable signed evidence, tagged PDF rendering and authenticated downloads. |
| Payments | This is not the payment portal. | Audit both processor integrations, webhook validation, idempotency and consent gates. |
| Public media | Marketing source includes image assets; consent provenance is not demonstrated by asset existence. | Inventory every identifiable child, document active consent, disable unverified public use, review vendor copies and caches. |
| Screening / safety | No role authorization or screening backend established here. | Server gates on every request; screening evidence, concussion holds and annual renewals. |
| Privacy / GPC / STOP | No demonstrated privacy-request service or carrier webhook. | Implement intake, request ownership, suppression, deletion orchestration and deadlines. |
| Cookies / tracking | A source snapshot is not a production network audit. | Inventory runtime cookies, embeds, injected scripts, CDN logs and environment; verify absence of analytics and ad IDs. |
| Security / jobs | No evidence that the WISP's operational controls, deletion jobs or restoration drills are in place. | Adopt WISP, select owners, deploy controls and record results. |
| Tests | Acceptance cases provided in this package are specifications. | Execute against integrated staging; retain reproducible evidence. No portal tests are claimed passed. |

## Build sequence

1. Resolve identity, domain, refund, insurance, vendor and counsel inputs. Inventory existing public media and contact intake immediately.
2. Audit the payment repository and choose one identity/child/consent source of truth. Keep marketing pages separate from private data. Use a portal origin with host-only cookies, explicit redirect allowlists and no shared child-data storage in the marketing frontend.
3. Build parent verification, authorization, immutable legal versions, PDF acceptance evidence, private object storage and privacy-request intake. Add screening gates before staff access.
4. Integrate processor webhooks, outbox email, vendor suppression and jobs. Exercise failure/retry/deletion/restore paths with synthetic families.
5. Implement footer/routes and publish accurate policies only when the matching controls and facts are verified. Complete accessibility, legal and production network checks.
6. Deploy through the chosen host using secrets outside Git; verify DNS/TLS independently. GitHub upload does not establish hosting or automatic synchronization.

No real child data should be placed in development seeds, screenshots, issue bodies, test recordings, support logs or this public repository.
