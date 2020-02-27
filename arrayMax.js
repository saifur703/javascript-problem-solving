/**
 * System 1
 */
var arr = [88, 44, 12, 91, 32, 99];
var mx = arr[0];

for (var i = 0; i < arr.length; i++) {
  var el = arr[i];

  if (el > mx) {
    mx = el;
  }
}
console.log('Maximum Value of Array is: ', mx);

/**
 * System Math function
 */
var maxNumber = Math.max.apply(null, arr);
console.log('Max Number: ', maxNumber);
