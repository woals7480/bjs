const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => +x);

let T = input.shift();
function solution(T, n) {
  const dp = { 1: 1, 2: 2, 3: 4 };
  for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  let answer = [];
  for (let i = 0; i < T; i++) {
    answer.push(dp[input[i]]);
  }
  console.log(answer.join("\n"));
}

solution(T, input);
