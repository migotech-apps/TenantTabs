# TenantTabs third-party compliance materials

Repository: migotech-apps/TenantTabs, under third-party/extpay/
Public compliance location:
https://github.com/migotech-apps/TenantTabs/tree/main/third-party/extpay
PUBLIC THIRD-PARTY MATERIALS - NOT TENANTTABS RELEASE OR LEGAL APPROVAL

TenantTabs remains proprietary. This repository contains third-party library
source and compliance documentation, not TenantTabs application code, XPIs,
signing credentials, account records or private maintainer correspondence.
ExtPay.js 3.1.2 is used under LGPLv3; the embedded webextension-polyfill 0.7.0
remains subject to MPL-2.0. Historical upstream licence labels are preserved.
The publisher has resolved the ExtPay licence ambiguity; this statement does not
publish the private correspondence or waive other LGPL obligations.

Contents
- source/: exact preserved upstream source archives, pinned by commit.
- LICENSE-*.txt: full LGPLv3/GPLv3 and MPL-2.0 texts.
- source-provenance.json: source URLs, immutable identities and archive hashes.
- ExtPay-3.1.2-dependencies.json: all 70 locked ExtPay packages/integrities.
- build-instructions.txt: editable inputs and build instructions (not executed here).
- REPLACEMENT.txt: proposed LGPL section 4(d)(0) route and Firefox limitations.
- PERMISSION.txt: explicit limited application permission, for owner adoption.
- DISTRIBUTION-NOTICES.txt and NOTICES.txt: recipient notices, without private mail.
- RELEASE-SOURCE-MAP.json: unreleased Free/Pro reference mapping; no approved
  application hashes/URLs are invented. Complete these fields for each release.
- SHA256SUMS.txt: preserved identity inventory of the audited preparation snapshot.
  Later documentation corrections are not reflected in that unchanged inventory.

## Source and instructions

- [ExtPay source snapshot](source/ExtPay-3.1.2-source.zip)
- [Polyfill source snapshot](source/webextension-polyfill-0.7.0-source.zip)
- [Build instructions](build-instructions.txt)
- [Replacement instructions and unresolved questions](REPLACEMENT.txt)
- [Limited permission for adoption in delivered terms](PERMISSION.txt)
- [Third-party notices](NOTICES.txt)
- [LGPLv3](LICENSE-LGPL-3.0.txt), [GPLv3](LICENSE-GPL-3.0.txt), [MPL-2.0](LICENSE-MPL-2.0.txt)
- [Release-to-source mapping](RELEASE-SOURCE-MAP.json)

Use the source archives here or the pinned public upstream URLs in NOTICES.txt.
These third-party materials are publicly available without additional charge.
Link this source location prominently next to each authorised application download.
The publisher remains responsible for continued equivalent source access.

Publication is not compliance sign-off. A library-only public repository does not
by itself fulfil section 4(d)(0): recipients also need sufficient Corresponding
Application Code/materials and effective recombination permissions. Obtain any
proprietary application only through its separately authorised distribution.
If additional unpublished proprietary materials are required, distribution stays
blocked until their provision is authorised or another compliant route is agreed.

The original preparation did not build or sign extensions or libraries, change
Firefox configuration or run tests. Subsequent publication of these third-party
materials does not release TenantTabs application code or approve a release.
