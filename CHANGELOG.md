# Changelog

All notable changes to this repository should be documented in this file.

The format is based on Keep a Changelog and this project currently tracks changes under an Unreleased section.

## [Unreleased]

### Added
- Added concise repository-specific agent guidance in [`AGENTS.md`](AGENTS.md) and mode-specific files under [`.kilocode/rules-code/AGENTS.md`](.kilocode/rules-code/AGENTS.md), [`.kilocode/rules-debug/AGENTS.md`](.kilocode/rules-debug/AGENTS.md), [`.kilocode/rules-ask/AGENTS.md`](.kilocode/rules-ask/AGENTS.md), and [`.kilocode/rules-architect/AGENTS.md`](.kilocode/rules-architect/AGENTS.md).
- Initialized Carbon Memory durable wiki pages under [`docs/maintainer-wiki/index.md`](docs/maintainer-wiki/index.md).
- Initialized volatile memory-bank files under [`.kilocode/rules/memory-bank/brief.md`](.kilocode/rules/memory-bank/brief.md), [`.kilocode/rules/memory-bank/context.md`](.kilocode/rules/memory-bank/context.md), and [`.kilocode/rules/memory-bank/active.md`](.kilocode/rules/memory-bank/active.md).
- Added initial Understand fallback artifacts at [`.understand-anything/intermediate/scan-result.json`](.understand-anything/intermediate/scan-result.json), [`.understand-anything/knowledge-graph.json`](.understand-anything/knowledge-graph.json), [`.understand-anything/meta.json`](.understand-anything/meta.json), and [`.understand-anything/config.json`](.understand-anything/config.json).
- Added a SpeXchange v1 frontend identity and ROD/LTC-only UI skeleton in [`client/webserver/site/src/pages/SpeXchangeSkeletonPage.tsx`](client/webserver/site/src/pages/SpeXchangeSkeletonPage.tsx), with placeholder shells for [`CreateOfferPage()`](client/webserver/site/src/pages/CreateOfferPage.tsx:1), [`MyOffersPage()`](client/webserver/site/src/pages/MyOffersPage.tsx:1), [`ActiveSwapsPage()`](client/webserver/site/src/pages/ActiveSwapsPage.tsx:1), and [`HistoryPage()`](client/webserver/site/src/pages/HistoryPage.tsx:1).
- Added frontend proof artifacts at [`visual-proof/spexchange-shell-create-offer.png`](visual-proof/spexchange-shell-create-offer.png), [`visual-proof/spexchange-active-swaps-skeleton.png`](visual-proof/spexchange-active-swaps-skeleton.png), and [`visual-proof/spexchange-v1-frontend-proof.html`](visual-proof/spexchange-v1-frontend-proof.html).

### Changed
- Updated [`.gitignore`](.gitignore) to include local memory-bank and understanding-artifact paths required by the current workspace rules.
- Updated the SpeXchange shell navigation and product framing to surface the SpeXchange brand, ROD/LTC-only scope, and the v1 placeholder workflow across Market, Create Offer, My Offers, Active Swaps, Wallets, and History in [`client/webserver/site/src/pages/SpeXchangeSkeletonPage.tsx`](client/webserver/site/src/pages/SpeXchangeSkeletonPage.tsx).
- Updated the Windows i18n lint path handling to normalize file paths before allowlist matching in [`client/webserver/site/scripts/i18n-lint.mjs`](client/webserver/site/scripts/i18n-lint.mjs).
