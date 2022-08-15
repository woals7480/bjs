const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = input[1].split(" ").map((item) => +item);

function solution(N, A) {
  const dp = [];
  dp[0] = A[0];
  for (let i = 1; i < N; i++) {
    dp[i] = Math.max(A[i], dp[i - 1] + A[i], A[i - 1] + A[i]);
  }

  const newDp = [];
  newDp[0] = A[0];
  for (let i = 1; i < N; i++) {
    newDp[i] = Math.max(newDp[i - 1] + A[i], dp[i - 1], A[i]);
  }

  console.log(Math.max(...newDp));
}

solution(+input[0], A);
