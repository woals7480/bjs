const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const inputOne = input[0].split(" ").map((item) => +item);
const inputTwo = input[1].split(" ").map((item) => +item);
const N = inputOne[0];
const S = inputOne[1];
const result = [];

for (let i = 0; i < N; i++) {
  result.push(Math.abs(inputOne[1] - inputTwo[i]));
}

function gcd(a, b) {
  let n;
  while (b !== 0) {
    n = a % b;
    a = b;
    b = n;
  }
  return a;
}

let answer = Math.min(...result);
if (result.length === 1) {
  console.log(result[0]);
} else if (result.length > 1) {
  for (let i = 0; i < result.length; i++) {
    answer = gcd(answer, result[i]);
  }
  console.log(answer);
}
