const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const A = input[1].split(" ").map((item) => +item);

function solution(N, A) {
  const dp = Array.from({ length: 2 }, () => Array(N + 2).fill(0));
  const answer = [];
  for (let i = 1; i <= N; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (A[i - 1] > A[j - 1] && dp[0][j] > max) {
        max = dp[0][j];
      }
    }
    dp[0][i] = max + 1;
  }

  for (let i = N; i > 0; i--) {
    let max = 0;
    for (let j = N + 1; j > i; j--) {
      if (A[i - 1] > A[j - 1] && dp[1][j] > max) {
        max = dp[1][j];
      }
    }
    dp[1][i] = max + 1;
  }

  for (let i = 0; i <= N + 1; i++) {
    answer.push(dp[0][i] + dp[1][i] - 1);
  }

  console.log(Math.max(...answer));
}

solution(+input[0], A);
