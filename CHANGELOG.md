# Changelog

All notable changes to this repository should be documented in this file.

The format is based on Keep a Changelog and this project currently tracks changes under an Unreleased section.

## [Unreleased]

### Added
- Added concise repository-specific agent guidance in [`AGENTS.md`](AGENTS.md) and mode-specific files under [`.kilocode/rules-code/AGENTS.md`](.kilocode/rules-code/AGENTS.md), [`.kilocode/rules-debug/AGENTS.md`](.kilocode/rules-debug/AGENTS.md), [`.kilocode/rules-ask/AGENTS.md`](.kilocode/rules-ask/AGENTS.md), and [`.kilocode/rules-architect/AGENTS.md`](.kilocode/rules-architect/AGENTS.md).
- Initialized Carbon Memory durable wiki pages under [`docs/maintainer-wiki/index.md`](docs/maintainer-wiki/index.md).
- Initialized volatile memory-bank files under [`.kilocode/rules/memory-bank/brief.md`](.kilocode/rules/memory-bank/brief.md), [`.kilocode/rules/memory-bank/context.md`](.kilocode/rules/memory-bank/context.md), and [`.kilocode/rules/memory-bank/active.md`](.kilocode/rules/memory-bank/active.md).
- Added initial Understand fallback artifacts at [`.understand-anything/intermediate/scan-result.json`](.understand-anything/intermediate/scan-result.json), [`.understand-anything/knowledge-graph.json`](.understand-anything/knowledge-graph.json), [`.understand-anything/meta.json`](.understand-anything/meta.json), and [`.understand-anything/config.json`](.understand-anything/config.json).

### Changed
- Updated [`.gitignore`](.gitignore) to include local memory-bank and understanding-artifact paths required by the current workspace rules.
