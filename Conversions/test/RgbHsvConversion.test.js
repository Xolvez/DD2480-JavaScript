import { approximatelyEqualHsv, hsvToRgb, rgbToHsv } from '../RgbHsvConversion'

describe('hsvToRgb', () => {
  // Expected RGB-values taken from https://www.rapidtables.com/convert/color/hsv-to-rgb.html
  it('should calculate the correct RGB values', () => {
    expect(hsvToRgb(0, 0, 0)).toEqual([0, 0, 0])
    expect(hsvToRgb(0, 0, 1)).toEqual([255, 255, 255])
    expect(hsvToRgb(0, 1, 1)).toEqual([255, 0, 0])
    expect(hsvToRgb(60, 1, 1)).toEqual([255, 255, 0])
    expect(hsvToRgb(120, 1, 1)).toEqual([0, 255, 0])
    expect(hsvToRgb(240, 1, 1)).toEqual([0, 0, 255])
    expect(hsvToRgb(300, 1, 1)).toEqual([255, 0, 255])
    expect(hsvToRgb(180, 0.5, 0.5)).toEqual([64, 128, 128])
    expect(hsvToRgb(234, 0.14, 0.88)).toEqual([193, 196, 224])
    expect(hsvToRgb(330, 0.75, 0.5)).toEqual([128, 32, 80])
  })
})

describe('rgbToHsv', () => {
  // "approximatelyEqualHsv" needed because of small deviations due to rounding for the RGB-values
  it('should calculate the correct HSV values', () => {
    expect(approximatelyEqualHsv(rgbToHsv(0, 0, 0), [0, 0, 0])).toEqual(true)
    expect(approximatelyEqualHsv(rgbToHsv(255, 255, 255), [0, 0, 1])).toEqual(true)
    expect(approximatelyEqualHsv(rgbToHsv(255, 0, 0), [0, 1, 1])).toEqual(true)
    expect(approximatelyEqualHsv(rgbToHsv(255, 255, 0), [60, 1, 1])).toEqual(true)
    expect(approximatelyEqualHsv(rgbToHsv(0, 255, 0), [120, 1, 1])).toEqual(true)
    expect(approximatelyEqualHsv(rgbToHsv(0, 0, 255), [240, 1, 1])).toEqual(true)
    expect(approximatelyEqualHsv(rgbToHsv(255, 0, 255), [300, 1, 1])).toEqual(true)
    expect(approximatelyEqualHsv(rgbToHsv(64, 128, 128), [180, 0.5, 0.5])).toEqual(true)
    expect(approximatelyEqualHsv(rgbToHsv(193, 196, 224), [234, 0.14, 0.88])).toEqual(true)
    expect(approximatelyEqualHsv(rgbToHsv(128, 32, 80), [330, 0.75, 0.5])).toEqual(true)
  })
})
test('hsvToRgb_throw', () => {
  expect(() => {
    hsvToRgb(-10, 0, 0)
  }).toThrow('hue should be between 0 and 360')
  expect(() => {
    hsvToRgb(377, 0, 0)
  }).toThrow('hue should be between 0 and 360')

  expect(() => {
    hsvToRgb(5, 3, 0)
  }).toThrow('saturation should be between 0 and 1')
  expect(() => {
    hsvToRgb(0, -4, 0)
  }).toThrow('saturation should be between 0 and 1')

  expect(() => {
    hsvToRgb(0, 0, -9)
  }).toThrow('value should be between 0 and 1')
  expect(() => {
    hsvToRgb(0, 0, 3)
  }).toThrow('value should be between 0 and 1')
})

test('rgbToHsv_throw', () => {
  expect(() => {
    rgbToHsv(-10, 0, 0)
  }).toThrow('red should be between 0 and 255')
  expect(() => {
    rgbToHsv(377, 0, 0)
  }).toThrow('red should be between 0 and 255')

  expect(() => {
    rgbToHsv(5, -31, 0)
  }).toThrow('green should be between 0 and 255')
  expect(() => {
    rgbToHsv(0, 256, 0)
  }).toThrow('green should be between 0 and 255')

  expect(() => {
    rgbToHsv(0, 0, -9)
  }).toThrow('blue should be between 0 and 255')
  expect(() => {
    rgbToHsv(0, 0, 256)
  }).toThrow('blue should be between 0 and 255')
})
