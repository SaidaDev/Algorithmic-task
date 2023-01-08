/**
 * Shift items in array to the left
 * @param {string[]} arr source array containing characters
 * @param {number} length the length of shifted block
 * @param {number} num how many items to shift
 * @returns void
 */
const shift = (arr, length, num) => {
  // Repeat shift num times
  for (let i = 0; i < num; i++) {
    // Store first item
    const temp = arr[0]
    // Shift all items one step to the left
    for (let i = 1; i < length; i++) {
      arr[i - 1] = arr[i]
    }
    // Fill in first item into last position
    arr[length - 1] = temp
  }
}

/**
 * Gets number of characters in the first word in the array
 * @param {string[]} arr source array containing characters
 * @returns number of characters
 */
const getFirstWordLength = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      return i
    }
  }

  return arr.length
}

/**
 * Gets number of characters in the last word in the array
 * @param {string[]} arr source array containing characters
 * @returns number of characters
 */
const getLastWordLength = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ' ') {
      return arr.length - 1 - i
    }
  }

  return arr.length
}

const array = [
  'c',
  'a',
  't',
  ' ',
  'd',
  'o',
  'g',
  ' ',
  'a',
  'p',
  'p',
  'l',
  'e',
  ' ',
  'f',
  'i',
  'n',
  'e',
  ' ',
  'f',
  'o',
  'x',
]
console.log(`Given: [${array}]`)

let lastWordLength = getLastWordLength(array)
let totalLength = array.length

// Repeat until we shift all characters excluding last word
while (totalLength > lastWordLength) {
  // Shift by first word length
  let wordLength = getFirstWordLength(array)
  shift(array, totalLength, wordLength)
  totalLength -= wordLength

  // Shift by space char word length
  wordLength = 1
  shift(array, totalLength, wordLength)
  totalLength -= wordLength
}

console.log(`Final result: [${array}]`)
