// System 1
function reverseText(str) {
  var reverse = '';
  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    reverse = char + reverse;
  }
  return reverse;
}
var text = reverseText('Hello World');
console.log(text);

// System 2
var sentence = 'I am hardworking. I am serious. I am sure I will do it';
var reverse = sentence
  .split('')
  .reverse()
  .join('');
console.log(reverse);
