# AGENTS.md

This file provides guidance to agents when working with code in this repository.

- The repo is Go-first, but the browser UI must be built from [`client/webserver/site/package.json`](client/webserver/site/package.json); root [`build.sh`](build.sh) always rebuilds that bundle before compiling [`client/cmd/bisonw`](client/cmd/bisonw/main.go).
- Root `make test` runs [`run_tests.sh`](run_tests.sh), which is stricter than a plain `go test`: it first runs `go generate -x ./client/webserver/site`, race-tests only `.` + [`dex/testing/loadbot`](dex/testing/loadbot) + [`client/cmd/bisonw-desktop`](client/cmd/bisonw-desktop), then compile-checks many tag-specific packages and finally runs `golangci-lint -c ./.golangci.yml run`.
- Single Go test: use `go test ./path/to/pkg -run TestName`; if you need parity with CI for touched core code, add `-race -short` because that is what [`run_tests.sh`](run_tests.sh) uses.
- Frontend checks are directory-specific in [`client/webserver/site/package.json`](client/webserver/site/package.json): `npm run lint` = TypeScript compile + ESLint + custom i18n lint; there is no real npm test script.
- The custom i18n guard in [`client/webserver/site/scripts/i18n-lint.mjs`](client/webserver/site/scripts/i18n-lint.mjs) fails on orphaned translation keys and on dynamic `t(variable)` calls unless the file/count and constructed keys are registered in its allowlist.
- Frontend import alias `@` resolves to [`client/webserver/site/src`](client/webserver/site/src) via both [`client/webserver/site/tsconfig.json`](client/webserver/site/tsconfig.json) and [`client/webserver/site/webpack/common.js`](client/webserver/site/webpack/common.js).
- Frontend lint intentionally permits existing loose patterns: [`client/webserver/site/eslint.config.mjs`](client/webserver/site/eslint.config.mjs) disables `no-explicit-any`, `no-use-before-define`, semicolon/indent stylistic enforcement, and preserves legacy JSX formatting. Match surrounding style instead of “fixing” it.
- Webpack treats `.module.scss` as CSS modules but keeps plain `.scss` global; `css-loader` has `url: false` in both paths, so CSS asset URLs are intentionally not rewritten in [`client/webserver/site/webpack/common.js`](client/webserver/site/webpack/common.js).
- Dev watch mode polls the filesystem (`watchOptions.poll = true`) in [`client/webserver/site/webpack/common.js`](client/webserver/site/webpack/common.js); preserve that unless you are fixing watch reliability.
- Local run gotcha: [`run.sh`](run.sh) fast-fails if another `bisonw` instance already holds the DB lock, instead of waiting for BoltDB timeout.
- Dev web runs intentionally use [`--no-embed-site`](run.sh) in [`run.sh`](run.sh); production packaging embeds the built site and [`pkg.sh`](pkg.sh) verifies embedded files with `go list -f '{{ .EmbedFiles }}' decred.org/dcrdex/client/webserver`.

