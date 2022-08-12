const fs = require("fs");
const { off } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let A = input[1].split(" ").map((item) => +item);

function solution(N, A) {
  const dp = Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (A[i] > A[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  console.log(Math.max(...dp));
}

solution(+input[0], A);
