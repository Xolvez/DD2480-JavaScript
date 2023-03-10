import { maxProductOfThree } from '../MaxProductOfThree'

describe('MaxProductOfThree', () => {
  it('expects to throw error for array with only 2 numbers', () => {
    expect(() => {
      maxProductOfThree([1, 3])
    }).toThrow('Triplet cannot exist with the given array')
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, 6, 5, 3, 1, -10])).toBe(300)
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, -6, 5, 3, 1, -10])).toBe(600)
  })
  it('expects to return 600 as the maximum product', () => {
    expect(maxProductOfThree([-6, 10, 5, 3, 1, -10])).toBe(600)
  })
  it('expects to return 0 as the maximum product', () => {
    expect(maxProductOfThree([0, 0, 0, 0, 0, 0])).toBe(0)
  })
})
