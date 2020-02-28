// Count Word
var word = 'Hello  Bangladesh! How are you?';

var count = 0;
for (var i = 0; i < word.length; i++) {
  var char = word[i];

  if (char == ' ' && word[i - 1] != ' ') {
    count++;
  }
}
count++;
console.log(count);

// Count "a" letter
var sentence = 'I am hardworking. I am serious. I am sure I will do it';
var count = 0;
for (var i = 0; i < sentence.length; i++) {
  var letter = sentence[i];
  if (letter == 'a') {
    count++;
  }
}
console.log(count);
