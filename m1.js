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

// Join array into string
var str = array.join('')
console.log(`Joined string: "${str}"`)

// Split by space char, then reverse and join back
str = str.split(' ').reverse().join(' ')
console.log(`Reversed joined string: "${str}"`)

// Split string by character
const result = str.split('')
console.log(`Final result: [${result}]`)
