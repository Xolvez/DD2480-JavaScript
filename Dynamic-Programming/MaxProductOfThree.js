/**
 *  Given an array of numbers, return the maximum product
 *  of 3 numbers from the array
 *  https://wsvincent.com/javascript-three-sum-highest-product-of-three-numbers/
 * @param {number[]} arrayItems
 * @returns number
 */
export function maxProductOfThree (arrayItems, __COVERAGE__) {
  // if size is less than 3, no triplet exists
  const n = arrayItems.length
  if (n < 3) {
    __COVERAGE__[0] = true
    throw new Error('Triplet cannot exist with the given array') 
  }
  __COVERAGE__[1] = true
  let max1 = arrayItems[0]
  let max2 = null
  let max3 = null
  let min1 = arrayItems[0]
  let min2 = null
  for (let i = 1; i < n; i++) {
    __COVERAGE__[2] = true
    if (arrayItems[i] > max1) {
      __COVERAGE__[3] = true
      max3 = max2
      max2 = max1
      max1 = arrayItems[i]
    } else if (max2 === null || arrayItems[i] > max2) {
      __COVERAGE__[4] = true
      max3 = max2
      max2 = arrayItems[i]
    } else if (max3 === null || arrayItems[i] > max3) {
      __COVERAGE__[5] = true
      max3 = arrayItems[i]
    }
    if (arrayItems[i] < min1) {
      __COVERAGE__[6] = true
      min2 = min1
      min1 = arrayItems[i]
    } else if (min2 === null || arrayItems[i] < min2) {
      __COVERAGE__[7] = true
      min2 = arrayItems[i]
    }
  }
  __COVERAGE__[8] = true
  const prod1 = max1 * max2 * max3
  const prod2 = max1 * min1 * min2
  return Math.max(prod1, prod2)
}
