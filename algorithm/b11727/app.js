const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(N) {
  const dp = { 1: 1, 2: 3 };
  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }
  console.log(dp[N]);
}

solution(+input[0]);
