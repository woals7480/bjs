const fs = require("fs");
const { format } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let max = +input[0];
let maxIdx = 0;

for (i = 0; i < 9; i++) {
  if (max < +input[i]) {
    max = +input[i];
    maxIdx = i;
  }
}

console.log(max);
console.log(maxIdx + 1);
