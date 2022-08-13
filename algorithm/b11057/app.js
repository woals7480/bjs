const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(N) {
  const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));
  dp[1] = dp[1].map((x) => 1);
  for (let i = 2; i <= N; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= 9; j++) {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
    }
  }
  console.log(dp[N].reduce((pre, cur) => pre + cur) % 10007);
}

solution(+input[0]);
