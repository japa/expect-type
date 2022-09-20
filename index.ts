/*
 * @japa/expect-type
 *
 * (c) Japa
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { PluginFn } from '@japa/runner'
import { expectTypeOf as expectType } from 'expect-type'

export function expectTypeOf(): PluginFn {
  return function (_, __, { TestContext }) {
    TestContext.getter('expectType', () => expectType, true)
  }
}

declare module '@japa/runner' {
  interface TestContext {
    expectType: typeof expectType
  }
}
