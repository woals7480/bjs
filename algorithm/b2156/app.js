const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input.shift();
input = input.map((item) => +item);

function solution(N, wine) {
  const dp = Array(N + 1).fill(0);
  dp[1] = wine[0];
  dp[2] = wine[0] + wine[1];
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(
      dp[i - 3] + wine[i - 2] + wine[i - 1],
      dp[i - 2] + wine[i - 1],
      dp[i - 1]
    );
  }
  console.log(dp[N]);
}

solution(N, input);
