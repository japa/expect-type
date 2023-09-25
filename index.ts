/*
 * @japa/expect-type
 *
 * (c) Japa
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { TestContext } from '@japa/runner/core'
import type { PluginFn } from '@japa/runner/types'
import { expectTypeOf as expectType } from 'expect-type'

export function expectTypeOf(): PluginFn {
  return function () {
    TestContext.macro('expectTypeOf', expectType)
  }
}

declare module '@japa/runner/core' {
  interface TestContext {
    expectTypeOf: typeof expectType
  }
}
