import { integralEvaluation } from '../SimpsonIntegration'

test('Should return the integral of f(x) = sqrt(x) in [1, 3] to be equal 2.797434', () => {
  const result = integralEvaluation(16, 1, 3, (x) => { return Math.sqrt(x) })
  expect(Number(result.toPrecision(7))).toBe(2.797434)
})

test('Should return the integral of f(x) = sqrt(x) + x^2 in [1, 3] to be equal 11.46410161', () => {
  const result = integralEvaluation(64, 1, 3, (x) => { return Math.sqrt(x) + Math.pow(x, 2) })
  expect(Number(result.toPrecision(10))).toBe(11.46410161)
})

test('Should return the integral of f(x) = log(x) + Pi*x^3 in [5, 12] to be equal 15809.9141543', () => {
  const result = integralEvaluation(128, 5, 12, (x) => { return Math.log(x) + Math.PI * Math.pow(x, 3) })
  expect(Number(result.toPrecision(12))).toBe(15809.9141543)
})

describe('integralEvaluation in SimpsonIntegration.js', () => {
  it('Should throw error when N is odd', () => {
    expect(() => integralEvaluation(65, 1, 3, (x) => { return Math.sqrt(x) + Math.pow(x, 2) })).toThrow('N is not an even number')
  })

  it('Should throw error when N is not a number', () => {
    expect(() => integralEvaluation('not a number', 1, 3, (x) => { return Math.sqrt(x) + Math.pow(x, 2) })).toThrow('Expected integer N and finite a, b')
  })

  it('Should throw error when a is of type Number but NaN', () => {
    expect(() => integralEvaluation(64, NaN, 3, (x) => { return Math.sqrt(x) + Math.pow(x, 2) })).toThrow('Expected integer N and finite a, b')
  })

  it('Should throw error when b is of type Number but NaN', () => {
    expect(() => integralEvaluation(64, 1, NaN, (x) => { return Math.sqrt(x) + Math.pow(x, 2) })).toThrow('Expected integer N and finite a, b')
  })

  it('Should throw error when N is not an integer', () => {
    expect(() => integralEvaluation(64.5, 1, 3, (x) => { return Math.sqrt(x) + Math.pow(x, 2) })).toThrow('Expected integer N and finite a, b')
  })

  it('Should throw error when N < 2', () => {
    expect(() => integralEvaluation(0, 1, 3, (x) => { return Math.sqrt(x) + Math.pow(x, 2) })).toThrow('N has to be >= 2')
  })

  it('Should throw error when a > b', () => {
    expect(() => integralEvaluation(64, 3, 1, (x) => { return Math.sqrt(x) + Math.pow(x, 2) })).toThrow('a must be less or equal than b')
  })

  it('Should return 0 when a === b', () => {
    expect(integralEvaluation(64, 1, 1, (x) => { return Math.sqrt(x) + Math.pow(x, 2) })).toEqual(0)
  })

  it('Should throw error when the interval is outside the domain of the function', () => {
    expect(() => integralEvaluation(64, -100, -5, (x) => { return Math.sqrt(x) })).toThrow('Result is NaN. The input interval doesn\'t belong to the functions domain')
  })
})
