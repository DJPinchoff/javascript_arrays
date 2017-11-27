// Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.

function forwardReverse(arr) {
  var i;
  var result = [];

  for (i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }

  for (i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

var digits = [1, 2, 3];
console.log(forwardReverse(digits)); // [1, 2, 3, 3, 2, 1]
