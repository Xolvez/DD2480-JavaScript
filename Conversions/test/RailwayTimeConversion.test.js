import { RailwayTimeConversion } from '../RailwayTimeConversion'

test('The RailwayTimeConversion of 07:05:45AM is 07:05:45', () => {
  const res = RailwayTimeConversion('07:05:45AM')
  expect(res).toEqual('07:05:45')
})

test('The RailwayTimeConversion of 07:05:45PM is 19:05:45', () => {
  const res = RailwayTimeConversion('07:05:45PM')
  expect(res).toEqual('19:05:45')
})

test('The RailwayTimeConversion of 10:20:00AM is 10:20:00', () => {
  const res = RailwayTimeConversion('10:20:00AM')
  expect(res).toEqual('10:20:00')
})

test('The RailwayTimeConversion of 11:20:00PM is 23:20:00', () => {
  const res = RailwayTimeConversion('11:20:00PM')
  expect(res).toEqual('23:20:00')
})
test('The RailwayTimeConversion of 12:10:01PM is 00:00:00', () => {
  const res = RailwayTimeConversion('12:10:01PM')
  expect(res).toEqual('12:10:01')
})
test('The RailwayTimeConversion of 12:10:01AM is 00:10:01', () => {
  const res = RailwayTimeConversion('12:10:01AM')
  expect(res).toEqual('00:10:01')
})
