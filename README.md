<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/ts-npm-package-boilerplate/main/.github/images/favicon512x512-npm.png" align="center" alt=":package: ts-npm-package-boilerplate" />
 <h2 align="center">:package: ts-npm-package-boilerplate</h2>
 <p align="center">TypeScript NPM Module Boilerplate</p>
  <p align="center">
    <a href="https://github.com/hebertcisco/ts-npm-package-boilerplate/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/ts-npm-package-boilerplate?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/ts-npm-package-boilerplate/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/ts-npm-package-boilerplate?style=flat&color=336791" />
    </a>
    <a href="https://www.npmjs.com/package/ts-npm-package-boilerplate">
      <img alt="npm weekly downloads" src="https://img.shields.io/npm/dw/ts-npm-package-boilerplate?style=flat&color=336791" />
    </a>
    <a href="https://www.npmjs.com/package/ts-npm-package-boilerplate">
      <img alt="npm total downloads" src="https://img.shields.io/npm/dt/ts-npm-package-boilerplate?color=336791&label=Total%20downloads" />
    </a>
    <a href="https://github.com/hebertcisco/ts-npm-package-boilerplate/releases">
      <img alt="GitHub release" src="https://img.shields.io/github/release/hebertcisco/ts-npm-package-boilerplate.svg?style=flat&color=336791" />
    </a>
    <br />
    <a href="https://codecov.io/gh/hebertcisco/ts-npm-package-boilerplate">
      <img alt="codecov" src="https://codecov.io/gh/hebertcisco/ts-npm-package-boilerplate/branch/main/graph/badge.svg?token=Q9fr548J0D" />
    </a>
    <br />
    <a href="https://github.com/hebertcisco/ts-npm-package-boilerplate/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/hebertcisco/ts-npm-package-boilerplate/issues/new/choose">Request Feature</a>
  </p>

<h3 align="center">Tested on</h3>
<p align="center">
  <a href="https://www.apple.com/macos/">
    <img alt="macOS" src="https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white&style=flat" />
  </a>
  <a href="https://ubuntu.com/download">
    <img alt="Ubuntu" src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white&style=flat" />
  </a>
  <a href="https://www.microsoft.com/windows/">
    <img alt="Windows" src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white&style=flat" />
  </a>
</p>

<p align="center">Did you like the project? Please consider a <a href="https://www.buymeacoffee.com/hebertcisco">donation</a> to help improve!</p>

<p align="center"><strong>TypeScript NPM Module Boilerplate</strong> ✨</p>

---

## Table of Contents

- Overview
- Features
- Prerequisites
- Quick Start
- Usage
- Scripts
- Project Structure
- CI/CD
- Publishing
- Contributing
- License

## Overview

Starter template for building and publishing typed Node.js libraries to npm using TypeScript, Jest, ESLint, and Prettier. It ships with sensible defaults, CI workflows, coverage upload to Codecov, and a minimal example implementation.

## Features

- TypeScript build with declaration output to `lib/`.
- Jest test setup with `ts-jest` and coverage.
- ESLint + Prettier configured for TS.
- GitHub Actions for tests/coverage and npm publish on release.
- Prepublish hooks to lint and test before publishing.

## Prerequisites

- Node.js 18+ (LTS recommended).
- npm 9+.

## Quick Start

Option A — Use as template (recommended):

1. Click “Use this template” on GitHub to create your repo.
2. Clone your new repo and install dependencies:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

Option B — Clone this repository directly:

```bash
git clone https://github.com/hebertcisco/ts-npm-package-boilerplate
cd ts-npm-package-boilerplate
npm install
# Optional: reset git history
rm -rf .git && git init && git add . && git commit -m "Initial commit"
```

Then update `package.json` fields: `name`, `version`, `description`, `author`, `repository`, `bugs`, and `homepage`.

Edit the icon on Figma if you want:

<a href="https://www.figma.com/file/vpevGX3j9tmtW8OyLQ9eUm/ts-npm-package-boilerplate-icon?node-id=0%3A1">
   <img alt="Figma Icon" src="https://raw.githubusercontent.com/hebertcisco/ts-npm-package-boilerplate/main/.github/images/figma-badge.png"/>
</a>

## Usage

This template includes a simple `Uuid` helper as an example. After building, the entry point is `lib/index.js` with types in `lib/index.d.ts`.

Example:

```ts
import uuid from 'ts-npm-package-boilerplate';
// or: import { Uuid } from 'ts-npm-package-boilerplate';

const id = uuid.v4();
console.log(id); // 3f52c6f8-7a8e-4c04-b4a0-bf5f7d3e9f0a
```

During development (from this repo):

```ts
import uuid from './src';
```

## Scripts

- `npm run build`: Compile TypeScript to `lib/`.
- `npm test`: Run tests with Jest.
- `npm run lint`: Lint code with ESLint.
- `npm run lint:fix`: Fix lint issues.
- `npm run format`: Format with Prettier.

Important lifecycle hooks:

- `prepare`: Runs `npm run build` so the package is built before pack/publish.
- `prepublishOnly`: Runs tests and linting before `npm publish`.
- `version`: Formats and stages changes when bumping version with `npm version`.

## Project Structure

- `src/`: Source code (TypeScript).
- `src/helpers/uuid.ts`: Example implementation.
- `src/__tests__/`: Jest tests.
- `lib/`: Compiled JS + type definitions (generated).

## CI/CD

GitHub Actions are included:

- `.github/workflows/coverage.yml`: Runs tests on Node 18/20/22 and uploads coverage to Codecov. Set `CODECOV_TOKEN` secret for private repos.
- `.github/workflows/npm-publish.yml`: On GitHub release creation, builds and publishes to npm. Set `NPM_TOKEN` secret with publish rights.

## Publishing

1. Ensure you are logged in: `npm login`.
2. Update `package.json` metadata and ensure `files` includes what you want to publish.
3. Bump version: `npm version patch|minor|major`.
4. Publish: `npm publish`.

Alternatively, create a GitHub Release and let the publish workflow handle it (requires `NPM_TOKEN`).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Check the issues page:
<https://github.com/hebertcisco/ts-npm-package-boilerplate/issues>

## Show your support

Give a ⭐️ if this project helps you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
  <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2025 [@hebertcisco](https://github.com/hebertcisco).

This project is [MIT](LICENSE) licensed.
