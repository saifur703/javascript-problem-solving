// System 1
var x = 5;
var y = 11;
console.log('X=', x, 'Y=', y);
var temp = x;
x = y;
y = temp;
console.log('After Swap, X=', x, 'Y=', y);

// System 2
var a = 6;
var b = 2;
console.log('A=', a, 'B=', b);
a = a + b; // 6+2=8
b = a - b; // 8 - 2 = 6
a = a - b; // 8 - 6 = 2
console.log('After Swap, A=', a, 'B=', b);

// System 3
var m = 55;
var n = 88;
console.log('M=', m, 'N=', n);
[m, n] = [n, m];
console.log('After Swap, M=', m, 'N=', n);
