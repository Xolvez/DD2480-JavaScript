const pad = (num, padlen) => {
  const pad = new Array(1 + padlen).join(0)
  return (pad + num).slice(-pad.length)
}

const hexLookup = (bin) => {
  let binary = bin
  if (binary.length < 4) {
    binary = pad(binary, 4)
  }
  let index = 0
  index += (binary[0] - '0') << 3
  index += (binary[1] - '0') << 2
  index += (binary[2] - '0') << 1
  index += (binary[3] - '0')
  return "0123456789ABCDEF"[index]
}

const binaryToHex = (binaryString) => {
  /*
  Function for converting Binary to Hex

  1. The conversion will start from Least Significant Digit (LSB) to the Most Significant Bit (MSB).
  2. We divide the bits into sections of 4-bits starting from LSB to MSB.
  3. If the MSB get less than 4 bits, then we pad 0s to the front of it.

  For Example:
  Binary String = '1001101'

  1. Divide it to 2 parts => ['100', '1101']
  2. Pad 0s the MSB so it'll be => ['0100', '1101']
  3. Use the lookup table and merge them, therefore the result is 4D.

  */

  let result = ''
  binaryString = binaryString.split('')
  for (let i = binaryString.length - 1; i >= 0; i = i - 4) {
    if (i >= 3) {
      result += hexLookup(binaryString.slice(i - 3, i + 1).join(''))
    } else {
      result += hexLookup(binaryString.slice(0, i + 1).join(''))
    }
  }
  return result.split('').reverse().join('')
}

export default binaryToHex
