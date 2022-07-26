const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = +input[0];

function solution(N) {
  let sum = 0;
  for (i = 1; i <= N; ++i) {
    sum += i;
  }
  console.log(sum);
}

solution(input);
