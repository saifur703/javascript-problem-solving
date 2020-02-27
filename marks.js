var yourResult = '77';
var marks = parseInt(Number(yourResult));

if (marks < 0 && marks > 100) {
  console.log('Invalid Result! Try Again.');
} else if (marks <= 32 && marks >= 0) {
  console.log('F');
} else if (marks >= 33 && marks <= 39) {
  console.log('D');
} else if (marks >= 40 && marks <= 49) {
  console.log('C');
} else if (marks >= 50 && marks <= 59) {
  console.log('B');
} else if (marks >= 60 && marks <= 69) {
  console.log('A-');
} else if (marks >= 70 && marks <= 79) {
  console.log('A');
} else if (marks >= 80 && marks <= 100) {
  console.log('A+');
} else {
  console.log('Invalid!');
}
