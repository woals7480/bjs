const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(N) {
  dp = Array.from({ length: N + 1 }, () => Array(3).fill(1));

  for (let i = 1; i <= N; i++) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
  }

  console.log(dp[N - 1].reduce((pre, cur) => pre + cur) % 9901);
}

solution(+input[0]);
