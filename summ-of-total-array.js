/**
 *
 * sum of total Array
 */
function totalofArry(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
}
var numbers = [5, 11, 45];
var totalArrayResult = totalofArry(numbers);
console.log(totalArrayResult);

var friends = ['Alu', 'Bulu', 'culu', 'dulu', 'fulu'];
var allNames = '';
for (var i = 0; i < friends.length; i++) {
  var name = friends[i];
  allNames = allNames + name + ' ';
}
console.log(allNames);
