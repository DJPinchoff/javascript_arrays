// Write a function named splice that accepts three arguments: an Array, a start index, and the number of values to remove. The function should remove values from the original Array, starting with the first index and removing the specified number of values. The function should return the removed values in a new Array.

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function splice(array, start, num) {
  var removedItems = [];
  var i;

  for (i = start; i < array.length; i++) {
    if (i < start + num) {
      push(removedItems, array[i]);
    }

    array[i] = array[i + num];
  }

  array.length = array.length - num;
  return removedItems;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                // [1, 2, 8]
