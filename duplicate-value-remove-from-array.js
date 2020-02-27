/**
 * Duplicate Value Remove from Array
 */

var arr = [33, 1, 2, 3, 1, 2, 3, 4, 33];

var uniqeValue = [];

for (var i = 0; i < arr.length; i++) {
  element = arr[i];

  var index = uniqeValue.indexOf(element);

  if (index == -1) {
    uniqeValue.push(element);
  }
}
console.log(uniqeValue);
function add(a, b) {
  return a + b;
}
