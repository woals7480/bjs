const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const A = input[1].split(" ").map((item) => +item);

function solution(N, A) {
  const dp = [];
  for (let i = 0; i < N; i++) {
    let max = 0;
    let maxIndex = -1;
    for (let j = 0; j < i; j++) {
      if (A[i] > A[j] && dp[j] > max) {
        max = dp[j];
        maxIndex = j;
      }
    }
    if (maxIndex !== -1) {
      dp[i] = dp[maxIndex] + A[i];
    } else {
      dp[i] = A[i];
    }
  }
  console.log(Math.max(...dp));
}

solution(+input[0], A);
