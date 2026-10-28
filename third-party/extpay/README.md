# TenantTabs — Third-Party Licences and Source Materials

TenantTabs includes ExtPay.js 3.1.2 under LGPLv3 and webextension-polyfill 0.7.0 under MPL-2.0.

TenantTabs' original application code remains proprietary. Recipients retain the rights granted by the applicable third-party licences.

## Licence and Source Materials

Complete licence texts, the corresponding third-party source archives and applicable build materials are provided in this directory.

- `NOTICES.txt` identifies the third-party components and provides pinned upstream source references.
- `source-provenance.json` identifies the corresponding source archives.
- `SHA256SUMS.txt` provides checksums for the audited distribution materials.
- `build-instructions.txt` and `REPLACEMENT.txt` describe library modification and replacement procedures.
- `PERMISSION.txt` describes replacement permissions already carried in the published XPI's `vendor/NOTICE.txt`.
- `RELEASE-SOURCE-MAP.json` identifies public Firefox 1.0.0, its XPI checksum and corresponding library source archives. Its internal Pro reference remains unreleased.

## Public Compliance Location

TenantTabs provides its third-party licence notices, corresponding library source archives and supporting compliance materials at:

https://github.com/migotech-apps/TenantTabs/tree/main/third-party/extpay

This public location should also be referenced in the documentation accompanying the distributed extension.

## Proprietary Application Code

TenantTabs' proprietary application source code is not published in this repository.

The corresponding application is provided through its authorised distribution channels. Third-party source materials are made available separately to support recipients' rights under the applicable open-source licences.

## Modification and Replacement

Recipients may exercise the rights granted by the applicable third-party licences.

Instructions for modifying and replacing the covered libraries are provided in `build-instructions.txt` and `REPLACEMENT.txt`.

Modifying a signed Firefox XPI invalidates its signature. Temporary development loading is session-limited, and permanent installation on standard Firefox release or beta versions normally requires Mozilla signing.

These materials do not guarantee access to Mozilla signing keys or approval for a modified extension.

## Published release and replacement rights

TenantTabs 1.0.0 is [published on Firefox Add-ons](https://addons.mozilla.org/en-GB/firefox/addon/tenanttabs/). The XPI contains editable application JavaScript, HTML, manifest and assets. Static inspection supports replacement of `vendor/ExtPay.js` without an application rebuild for the LGPLv3 Section 4(d)(0) route. The bundled notice permits replacement, recombination, installation, execution and reverse engineering needed to debug library changes, overriding conflicting application terms to that extent.

LGPLv3 Section 4(e) applies only when GPLv3 Section 6 requires installation information. No transfer of possession/use of a User Product has been identified for this standalone extension download to an existing browser, so no additional installation information has been identified for this distribution. Distribution with a User Product or under different terms requires reassessment.

Temporary loading does not establish satisfaction of every possible installation obligation. These findings describe inspected materials and the current distribution; they do not constitute legal certification. See `REPLACEMENT.txt` for the procedure and signing limitations. `SHA256SUMS.txt` remains the original preparation inventory, not a current checksum manifest for revised documents.
