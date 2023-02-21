import { convexHull } from '../ConvexHullGraham'

const __COVERAGE__ = new Array(23).fill(false)
afterAll(() => {
  let message = ''
  for (let i = 0; i < 8; ++i) {
    if (!__COVERAGE__[i]) {
      message += 'Branch ' + i + ' was not covered.\n'
    }
  }
  console.log(message)
})

test('The ConvexHull of the following points is [{x: 0, y: 3}, {x: 4, y: 4}, {x: 3, y: 1}, {x: 0, y: 0}]', () => {
  const points = [
    { x: 0, y: 3 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 4, y: 4 },
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 3, y: 1 },
    { x: 3, y: 3 }]
  const res = convexHull(points, __COVERAGE__)
  expect(res).toEqual([{ x: 0, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 1 }, { x: 0, y: 0 }])
})

test('The ConvexHull of the following points is [{x: 1, y: 4}, {x: 9, y: 6}, {x: 7, y: 0}, {x: 0, y: 0}]', () => {
  const points = [
    { x: 4, y: 3 },
    { x: 1, y: 4 },
    { x: 2, y: 4 },
    { x: 0, y: 0 },
    { x: 9, y: 6 },
    { x: 1, y: 3 },
    { x: 4, y: 1 },
    { x: 7, y: 0 }]
  const res = convexHull(points, __COVERAGE__)
  expect(res).toEqual([{ x: 1, y: 4 }, { x: 9, y: 6 }, { x: 7, y: 0 }, { x: 0, y: 0 }])
})
