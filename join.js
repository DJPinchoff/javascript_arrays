// Write a function named join that accepts two arguments: an Array and a String. The function should coerce each value in the Array to a String, and then join those values together using the second argument as a separator. You may assume that a separator will always be passed.

function join(array, separator) {
  var i;
  var result = '';

  for (i = 0; i < array.length - 1; i++) {
    result += String(array[i]) + separator;
  }

  result += String(array[array.length - 1]);
  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
