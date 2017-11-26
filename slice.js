// Write a function named slice that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array.

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function slice(array, start, end) {
  var result = [];
  var i;

  for (i = start; i < end; i++) {
    push(result, array[i]);
  }

  return result;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
