# Changelog

All notable changes to Node.js CLI Starter will be documented in this file.

The format is based on [Keep a Changelog][Keep a Changelog url], and this project adheres to [Semantic Versioning][Semantic Versioning url].

## [1.0.4] (21 December 2025)

### Added

1. Add JSDoc comments.

### Changed

1. Modularize app logic.
2. Update tests.

## [1.0.3] (21 November 2025)

### Changed

1. Rename assets/ts/index.ts → assets/ts/cli.ts.
2. Update "bin", "main", and "start" script in package.json to point to dist/cli.js.

Makes the CLI entry point name more explicit and avoids confusion with generic index files.

## [1.0.2] (19 November 2025)

### Fixed

1. Add `moduleNameMapper` in `jest.config.ts` to strip explicit `.js` extensions emitted by TypeScript when using `moduleResolution: "bundler"` or `"node16"`/`"nodenext"`. This prevents "Cannot find module './foo.js'" errors when running tests with Jest.

## [1.0.1] (31 October 2025)

### Changed

1. Renamed repository slug from `node-cli-starter` to `node-js-cli-starter`.

## [1.0.0] (31 October 2025)

### Added

1. .env file to store environment variables.
1. .gitignore file to ignore files and directories that Git should not track
1. .nvmrc file to specify the Node.js version to use.
1. app.ts file to define the application logic.
1. index.ts file to define the entry point of the application.
1. setup.ts file for project setup.
1. CHANGELOG.md file to track changes to the project.
1. jest.config.ts file to configure Jest.
1. jest.setup.ts file to configure Jest setup.
1. LICENSE file to define the project license.
1. package.json file to define project metadata and dependencies.
1. README.md file to document the project.
1. tsconfig.json file to configure TypeScript.
1. .nvmrc file to specify the Node.js version to use.
1. Bug report GitHub issue template for reporting bugs in the project.
1. Feature request GitHub issue template for suggesting new features.

<!-- References -->

[Keep a Changelog url]: https://keepachangelog.com/en/1.0.0/
[Semantic Versioning url]: https://semver.org/spec/v2.0.0.html
[1.0.3]: https://github.com/SherpadNdabambi/node-js-cli-starter/releases/tag/v1.0.3
[1.0.2]: https://github.com/SherpadNdabambi/node-js-cli-starter/releases/tag/v1.0.2
[1.0.1]: https://github.com/SherpadNdabambi/node-js-cli-starter/releases/tag/v1.0.1
[1.0.0]: https://github.com/SherpadNdabambi/node-js-cli-starter/releases/tag/v1.0.0
