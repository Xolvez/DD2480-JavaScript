/**
 * Flashsort is a distribution sorting algorithm showing linear
 * computational complexity O(n) for uniformly distributed
 * data sets and relatively little additional memory requirement.
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Flashsort
 */

export function flashSort (arr, __COVERAGE__) {
  let max = 0; let min = arr[0]
  const n = arr.length
  const m = ~~(0.45 * n)
  const l = new Array(m)

  for (let i = 1; i < n; ++i) {
    __COVERAGE__[0] = true
    if (arr[i] < min) {
      __COVERAGE__[1] = true
      min = arr[i]
    } else {
      __COVERAGE__[2] = true
    }
    if (arr[i] > arr[max]) {
      __COVERAGE__[3] = true
      max = i
    } else {
      __COVERAGE__[4] = true
    }
  } if (!(1 < n)) {
    __COVERAGE__[5] = true
  }

  if (min === arr[max]) {
    __COVERAGE__[6] = true
    return arr
  } else {
    __COVERAGE__[7] = true
  }

  const c1 = (m - 1) / (arr[max] - min)

  for (let k = 0; k < m; k++) {
    __COVERAGE__[8] = true
    l[k] = 0
  } if (!(0 < m)) {
    __COVERAGE__[9] = true
  }

  for (let j = 0; j < n; ++j) {
    __COVERAGE__[10] = true
    const k = ~~(c1 * (arr[j] - min))
    ++l[k]
  }

  for (let p = 1; p < m; ++p) {
    __COVERAGE__[11] = true
    l[p] = l[p] + l[p - 1]
  } if (!(1 < m)) {
    __COVERAGE__[12] = true
  }

  let hold = arr[max]
  arr[max] = arr[0]
  arr[0] = hold

  // permutation
  let move = 0; let t; let flash
  let j = 0
  let k = m - 1

  while (move < (n - 1)) {
    __COVERAGE__[13] = true
    while (j > (l[k] - 1)) {
      __COVERAGE__[14] = true
      ++j
      k = ~~(c1 * (arr[j] - min))
    } if (!(j > (l[k] - 1))) {
      __COVERAGE__[15] = true
    }
    if (k < 0) {
      __COVERAGE__[16] = true
      break
    } else {
      __COVERAGE__[17] = true
    }
    flash = arr[j]
    while (j !== l[k]) {
      __COVERAGE__[18] = true
      k = ~~(c1 * (flash - min))
      hold = arr[t = --l[k]]
      arr[t] = flash
      flash = hold
      ++move
    } if (!(j !== l[k])) {
      __COVERAGE__[19] = true
    }
  }

  // insertion
  for (j = 1; j < n; j++) {
    __COVERAGE__[20] = true
    hold = arr[j]
    let i = j - 1
    while (i >= 0 && arr[i] > hold) {
      __COVERAGE__[21] = true
      arr[i + 1] = arr[i--]
    } if (!(i >= 0 && arr[i] > hold)) {
      __COVERAGE__[22] = true
    }
    arr[i + 1] = hold
  }
  return arr
}

/**
* Implementation of Flash Sort
*/
// const array = [3, 0, 2, 5, -1, 4, 1, -2]
// flashSort(array)
