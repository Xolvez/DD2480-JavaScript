import { fibonacciSearch } from '../FibonacciSearch'

test('fibonacciSearch([10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100], 90, arr.length) => 9', () => {
  const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]
  const target = 90
  const res = fibonacciSearch(arr, target, arr.length)
  expect(res).toEqual(9)
})

test('fibonacciSearch([1, 11, 55, 56, 78, 82, 104], 104, arr.length) => 6', () => {
  const arr = [1, 11, 55, 56, 78, 82, 104]
  const target = 104
  const res = fibonacciSearch(arr, target, arr.length)
  expect(res).toEqual(6)
})

test('fibonacciSearch([40, 45, 50, 80, 82, 85, 90, 100]. 190, arr.length) => -1', () => {
  const arr = [40, 45, 50, 80, 82, 85, 90, 100]
  const target = 190
  const res = fibonacciSearch(arr, target, arr.length)
  expect(res).toEqual(-1)
})

test('fibonacciSearch([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 0, arr.length) => 5', () => {
  const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
  const target = 0
  const res = fibonacciSearch(arr, target, arr.length)
  expect(res).toEqual(5)
})

test('fibonacciSearch([1], 1, arr.length) => 0', () => {
  const arr = [1]
  const target = 1
  const res = fibonacciSearch(arr, target, arr.length)
  expect(res).toEqual(0)
})
