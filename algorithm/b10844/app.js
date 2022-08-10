const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(n) {
  const MOD = 1000000000;
  const dp = Array.from({ length: n + 1 }, () => Array(10).fill(1));
  dp[1][0] = 0;
  dp[1] = dp[1].map((x) => x % MOD);
  for (let i = 2; i <= n; i++) {
    dp[i][0] = dp[i - 1][1] % MOD;
    dp[i][9] = dp[i - 1][8] % MOD;
    for (let j = 1; j < 9; j++) {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
  }
  console.log(dp[n].reduce((pre, cur) => pre + cur) % MOD);
}

solution(+input[0]);
