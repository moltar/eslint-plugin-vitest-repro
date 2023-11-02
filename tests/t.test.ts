import { expect, test } from 'vitest'

test('a', () => {
  Object.assign({}, {} ?? {})

  expect(true).toBeTruthy()
})
