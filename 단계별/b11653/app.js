const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = +input[0];
let i = 2;
const Array = [];

while (true) {
  if (num % i === 0) {
    Array.push(i);
    num = num / i;
    i = 1;
  }
  i++;
  if (num < i) {
    break;
  }
}

console.log(Array.join("\n"));
