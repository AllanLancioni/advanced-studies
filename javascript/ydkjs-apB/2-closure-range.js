// Exercise from the book You Don't Know JS Yet (YDKJSY) 
// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md

// The range(..) function takes a number as its first argument, representing the first number in a desired range of numbers. The second argument is also a number representing the end of the desired range (inclusive). If the second argument is omitted, then another function should be returned that expects that argument.

function range(start, end) {

  const createRangeArray = function (endRange) {
    const array = []
    for (let index = start; index <= endRange; index++)
      array.push(index)
    return array
  }

  return end ? createRangeArray(end) : createRangeArray
}

range(3, 3)    // [3]
range(3, 8)    // [3,4,5,6,7,8]
range(3, 0)    // []

var start3 = range(3)
var start4 = range(4)

start3(3)     // [3]
start3(8)     // [3,4,5,6,7,8]
start3(0)     // []

start4(6)     // [4,5,6]