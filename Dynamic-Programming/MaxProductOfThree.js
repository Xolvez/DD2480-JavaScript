/**
 *  Given an array of numbers, return the maximum product
 *  of 3 numbers from the array
 *  https://wsvincent.com/javascript-three-sum-highest-product-of-three-numbers/
 * @param {number[]} arrayItems
 * @returns number
 */
export function maxProductOfThree(arrayItems) {
  const n = arrayItems.length
  // if size is less than 3, no triplet exists
  if (n < 3) throw new Error('Triplet cannot exist with the given array')
  const [max1, max2, max3] = getMaxElements(arrayItems)
  const [min1, min2] = getMinElements(arrayItems)
  const prod1 = max1 * max2 * max3
  const prod2 = max1 * min1 * min2
  return Math.max(prod1, prod2)
}

// Helper function, returns the three largest elements from arrayItems
function getMaxElements(arrayItems) {
  let max1 = arrayItems[0]
  let max2 = null
  let max3 = null
  const n = arrayItems.length
  for (let i = 1; i < n; i++) {
    if (arrayItems[i] > max1) {
      max3 = max2
      max2 = max1
      max1 = arrayItems[i]
    } else if (max2 === null || arrayItems[i] > max2) {
      max3 = max2
      max2 = arrayItems[i]
    } else if (max3 === null || arrayItems[i] > max3) {
      max3 = arrayItems[i]
    }
  }
  return [max1, max2, max3]
}

// Helper function, returns the two smallest elements from ArrayItems
function getMinElements(arrayItems) {
  let min1 = arrayItems[0]
  let min2 = null
  const n = arrayItems.length
  for (let i = 1; i < n; i++) {
    if (arrayItems[i] < min1) {
      min2 = min1
      min1 = arrayItems[i]
    } else if (min2 === null || arrayItems[i] < min2) {
      min2 = arrayItems[i]
    }
  }
  return [min1, min2]
}