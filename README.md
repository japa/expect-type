# @japa/expect-type
> Write assertions for TypeScript types

[![gh-workflow-image]][gh-workflow-url] [![npm-image]][npm-url] ![][typescript-image] [![license-image]][license-url] [![snyk-image]][snyk-url]

The `expect-type` plugin of Japa helps you write assertions against the TypeScript types. There is no runtime behavior with the `expect-type` plugin and you need to compile your code to view the assertion errors.

The plugins wraps [expect-type](https://www.npmjs.com/package/expect-type) under the hood.

#### [Complete API documentation](https://japa.dev/docs/plugins/expect-type)

## Installation
Install the package from the npm registry as follows:

```sh
npm i @japa/expect-type

yarn add @japa/expect-type
```

## Usage
You can use this package with the `@japa/runner` as follows.

```ts
import { expectTypeOf } from '@japa/expect-type'
import { configure } from '@japa/runner'

configure({
  plugins: [expectTypeOf()]
})
```

Once done, you will be able to access the `expectTypeOf` property on the test context.

```ts
test('test title', ({ expectTypeOf }) => {
  expectTypeOf({ foo: 'bar' }).toEqualTypeOf<{ foo: string }>()
})
```

[gh-workflow-image]: https://img.shields.io/github/workflow/status/japa/expect-type/test?style=for-the-badge
[gh-workflow-url]: https://github.com/japa/expect-type/actions/workflows/test.yml "Github action"

[npm-image]: https://img.shields.io/npm/v/@japa/expect-type/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@japa/expect-type/v/latest "npm"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript

[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/japa/expect-type?style=for-the-badge

[snyk-image]: https://img.shields.io/snyk/vulnerabilities/github/japa/expect-type?label=Snyk%20Vulnerabilities&style=for-the-badge
[snyk-url]: https://snyk.io/test/github/japa/expect-type?targetFile=package.json "snyk"
