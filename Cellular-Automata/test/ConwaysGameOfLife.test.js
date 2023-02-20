import { newGeneration } from '../ConwaysGameOfLife'

var __COVERAGE__ = new Array(22).fill(false)

afterAll(() => {
  let message = ""
  for (let i = 0; i < 22; ++i) {
    if (!__COVERAGE__[i]) {
      message += "Branch " + i + " was not covered.\n"
    }
  }
  var branches_covered = __COVERAGE__.filter(Boolean).length
  var branch_coverage = branches_covered / 22 * 100
  message += "Total branch coverage: " + branches_covered + " out of 22, ie " + branch_coverage + " %"
  console.log(message)
})

describe('newGeneration', () => {
  it('should produce the next generation according to the rules', () => {
    const res = newGeneration([[0, 1, 0], [0, 1, 0], [0, 1, 0]], __COVERAGE__)
    expect(res)
      .toEqual([[0, 0, 0], [1, 1, 1], [0, 0, 0]])
  })
})
