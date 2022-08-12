const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const A = input[1].split(" ").map((item) => +item);

function solution(N, A) {
  const dp = [A[0]];
  for (let i = 1; i < N; i++) {
    dp[i] = A[i] > A[i] + dp[i - 1] ? A[i] : A[i] + dp[i - 1];
  }
  console.log(Math.max(...dp));
}

solution(+input[0], A);
