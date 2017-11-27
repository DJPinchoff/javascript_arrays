// Write a function that takes a sorted array of integers as an argument, and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.

function missing(arr) {
  var start = arr[0] + 1;
  var end = arr[arr.length - 1];
  var i;
  var missing = [];

  for (i = start; i < end; i++) {
    if (arr.includes(i)) {
      continue;
    } else {
      missing.push(i);
    }
  }

  return missing;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
