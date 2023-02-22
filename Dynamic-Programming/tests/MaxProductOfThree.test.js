import { maxProductOfThree } from '../MaxProductOfThree'

var __COVERAGE__ = new Array(9).fill(false)

 afterAll(() => {
   let message = ""
   for (let i = 0; i < 9; ++i) {
     if (!__COVERAGE__[i]) {
       message += "Branch " + i + " was not covered.\n"
     }
   }
   console.log(message)
 })

describe('MaxProductOfThree', () => {
  it('expects to throw error for array with only 2 numbers', () => {
    expect(() => {
      maxProductOfThree([1, 3], __COVERAGE__)
    }).toThrow('Triplet cannot exist with the given array')
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, 6, 5, 3, 1, -10], __COVERAGE__)).toBe(300)
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, -6, 5, 3, 1, -10], __COVERAGE__)).toBe(600)
  })
})
