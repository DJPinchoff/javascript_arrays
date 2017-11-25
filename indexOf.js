// Write a function indexOf that accepts two arguments: an Array and a value. The function should return the index of the first element that contains the value, or -1 if the value is not present.

function indexOf(array, value) {
  var foundIndex = -1;
  var i;

  for (i = 0; i < array.length; i++) {
    if (array[i] === value) {
      foundIndex = i;
      break;
    }
  }

  return foundIndex;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1
