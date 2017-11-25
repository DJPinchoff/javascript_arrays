// Write a function lastIndexOf that accepts two arguments: an Array and a value. The function should return the index of the last element that contains the value, or -1 if the value is not present.

function lastIndexOf(array, value) {
  var i;

  for (i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1
