# reuv

[![GitHub Actions](https://github.com/rx-ts/reuv/workflows/CI/badge.svg)](https://github.com/rx-ts/reuv/actions/workflows/ci.yml)
[![Codacy Grade](https://img.shields.io/codacy/grade/2390c30584cb4862803839883687c328)](https://www.codacy.com/gh/rx-ts/reuv)
[![Codecov](https://img.shields.io/codecov/c/gh/rx-ts/reuv)](https://codecov.io/gh/rx-ts/reuv)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Frx-ts%2Freuv%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![GitHub release](https://img.shields.io/github/release/rx-ts/reuv)](https://github.com/rx-ts/reuv/releases)
[![David Dev](https://img.shields.io/david/dev/rx-ts/reuv.svg)](https://david-dm.org/rx-ts/reuv?type=dev)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/atlassian/changesets)

> A simple mono library boilerplate.

## Packages

This repository is a monorepo managed by [changesets][] what means we actually publish several packages to npm from same codebase, including:

| Package                              | Description                                  | Version                                                                                                                                                                                                            | (Peer) Dependencies                                                                                                                                                                                                                                                                                       |
| ------------------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`@reuv/core`](/packages/@reuv/core) | Sharable core library between React and Vue. | [![npm](https://img.shields.io/npm/v/@reuv/core.svg)](https://www.npmjs.com/package/@reuv/core) [![View changelog](https://img.shields.io/badge/changelog-explore-brightgreen)](https://changelogs.xyz/@reuv/core) | [![David Peer](https://img.shields.io/david/peer/rx-ts/reuv.svg?path=packages/@reuv/core)](https://david-dm.org/rx-ts/reuv?path=packages/@reuv/core&type=peer) [![David](https://img.shields.io/david/rx-ts/reuv.svg?path=packages/@reuv/core)](https://david-dm.org/rx-ts/reuv?path=packages/@reuv/core) |
| [`reuv`](/packages/reuv)             | Sharable libraries between React and Vue.    | [![npm](https://img.shields.io/npm/v/reuv.svg)](https://www.npmjs.com/package/reuv) [![View changelog](https://img.shields.io/badge/changelog-explore-brightgreen)](https://changelogs.xyz/reuv)                   | [![David Peer](https://img.shields.io/david/peer/rx-ts/reuv.svg?path=packages/reuv)](https://david-dm.org/rx-ts/reuv?path=packages/reuv&type=peer) [![David](https://img.shields.io/david/rx-ts/reuv.svg?path=packages/reuv)](https://david-dm.org/rx-ts/reuv?path=packages/reuv)                         |

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[changesets]: https://GitHub.com/atlassian/changesets
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
