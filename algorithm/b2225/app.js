const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((item) => +item);

function solution(N, K) {
  const dp = [];

  for (let i = 1; i <= K; i++) {
    dp[i] = Array(N + 1).fill(i === 1 ? 1 : 0);
    dp[i][0] = 1;
  }

  for (let i = 2; i <= K; i++) {
    for (let j = 1; j <= N; j++) {
      dp[i][j] =
        dp[i - 1].slice(0, j + 1).reduce((acc, cur) => acc + cur, 0) %
        1000000000;
    }
  }
  console.log(dp[K][N]);
}

solution(input[0], input[1]);
