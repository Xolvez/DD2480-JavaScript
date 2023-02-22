/*
*
* @file
* @title Composite Simpson's rule for definite integral evaluation
* @author: [ggkogkou](https://github.com/ggkogkou)
* @brief Calculate definite integrals using composite Simpson's numerical method
*
* @details The idea is to split the interval in an EVEN number N of intervals and use as interpolation points the xi
* for which it applies that xi = x0 + i*h, where h is a step defined as h = (b-a)/N where a and b are the
* first and last points of the interval of the integration [a, b].
*
* We create a table of the xi and their corresponding f(xi) values and we evaluate the integral by the formula:
* I = h/3 * {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
*
* That means that the first and last indexed i f(xi) are multiplied by 1,
* the odd indexed f(xi) by 4 and the even by 2.
*
* N must be even number and a<b. By increasing N, we also increase precision
*
* More info: [Wikipedia link](https://en.wikipedia.org/wiki/Simpson%27s_rule#Composite_Simpson's_rule)
*
*/
function integralEvaluation (N, a, b, func, branchesTaken) {
  function validateInput () {
    // Check if N is an even integer
    const isNEven = N % 2 === 0

    if (!Number.isInteger(N) || Number.isNaN(a) || Number.isNaN(b)) { throw new TypeError('Expected integer N and finite a, b') }
    if (!isNEven) { throw Error('N is not an even number') }
    if (N <= 0) { throw Error('N has to be >= 2') }

    // Check if a < b
    if (a > b) { throw Error('a must be less or equal than b') }
  }

  validateInput()

  if (a === b) {
    branchesTaken[0] = true
    return 0
  } else {
    branchesTaken[1] = true
  }

  // Calculate the step h
  const h = (b - a) / N

  // Find interpolation points
  let xi = a // initialize xi = x0
  const pointsArray = []

  // Find the sum {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
  let temp
  for (let i = 0; i < N + 1; i++) {
    branchesTaken[2] = true

    if (i === 0 || i === N) {
      branchesTaken[3] = true
      temp = func(xi)
    } else if (i % 2 === 0) {
      branchesTaken[4] = true
      temp = 2 * func(xi)
    } else {
      branchesTaken[5] = true
      temp = 4 * func(xi)
    }

    pointsArray.push(temp)
    xi += h
  }

  // Calculate the integral
  let result = h / 3
  temp = 0
  for (let i = 0; i < pointsArray.length; i++) {
    branchesTaken[6] = true
    temp += pointsArray[i]
  }

  result *= temp

  if (Number.isNaN(result)) {
    branchesTaken[7] = true
    throw Error('Result is NaN. The input interval doesn\'t belong to the functions domain')
  } else {
    branchesTaken[8] = true
  }

  return result
}

export { integralEvaluation }
