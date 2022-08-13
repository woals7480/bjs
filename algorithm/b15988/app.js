const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();
const N = input.map((item) => +item);

function solution(T, N) {
  const dp = { 1: 1, 2: 2, 3: 4 };
  const maxNum = Math.max(...N);
  for (let i = 4; i <= maxNum; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
  }

  const answer = [];
  for (let i = 0; i < T; i++) {
    answer.push(dp[N[i]]);
  }
  console.log(answer.join("\n"));
}

solution(T, N);
