// System 1

var num1 = Number(12);
var num2 = Number(88);
var num3 = Number(45);

if (num1 > num2 && num1 > num3) {
  console.log('%s is bigger than %s and %s', num1, num2, num3);
} else if (num2 > num1 && num2 > num3) {
  console.log('%s is bigger than %s and %s', num2, num1, num3);
} else if (num3 > num1 && num3 > num2) {
  console.log('%s is bigger than %s and %s', num3, num1, num2);
} else {
  console.log('Numbers are equal OR Invalid Result! Please Try again.');
}

// System 2
var result = Math.max(num1, num2, num3);
console.log('The Large Number is: ', result);
