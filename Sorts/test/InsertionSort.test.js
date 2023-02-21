import { insertionSortAlternativeImplementation, insertionSort } from '../InsertionSort'

describe('insertionSortAlternativeImplementation', () => {
  it('expects to work with empty array', () => {
    expect(insertionSortAlternativeImplementation([])).toEqual([])
  })

  it('expects to return input array when array.length is less than 2', () => {
    const input = [3]
    expect(insertionSortAlternativeImplementation(input)).toEqual(input)
  })

  it('expects to return array sorted in ascending order', () => {
    expect(insertionSortAlternativeImplementation([14, 11])).toEqual([11, 14])
    expect(insertionSortAlternativeImplementation([21, 22, 23])).toEqual([21, 22, 23])
    expect(insertionSortAlternativeImplementation([1, 3, 2, 3, 7, 2])).toEqual([1, 2, 2, 3, 3, 7])
    expect(insertionSortAlternativeImplementation([1, 6, 4, 5, 9, 2])).toEqual([1, 2, 4, 5, 6, 9])
  })
})

describe('insertionSort', () => {
  it('expects to work with empty array', () => {
    const unsorted = []
    const sorted = []
    // Sort in place
    insertionSort(unsorted)
    expect(unsorted).toEqual(sorted)
  })

  it('expects to leave array of length 1 the same', () => {
    const unsorted = [1]
    const sorted = [1]
    // Sort in place
    insertionSort(unsorted)
    expect(unsorted).toEqual(sorted)
  })
})

describe('insertionSort, random arrays compared to Array.sort', () => {
  const minLength = 2
  const maxLength = 100
  const minValue = -50
  const maxValue = 50
  const numberOfTests = 100

  for (let i = 0; i < numberOfTests; i++) {
    // Create the array
    const unsorted = []
    const length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength)
    // Fill the array
    for (let j = 0; j < length; j++) {
      const value = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
      unsorted.push(value)
    }

    // Copy the unsorted array, and sort it with Array.sort
    const sorted = [...unsorted].sort((a, b) => a - b)
    // Sort the array with the function
    insertionSort(unsorted)

    expect(unsorted).toEqual(sorted)
  }
})
