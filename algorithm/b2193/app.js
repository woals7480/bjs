const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(+input[0]);
  process.exit();
});

function solution(n) {
  const dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));
  dp[1][0] = dp[2][1] = 0;
  dp[1][1] = dp[2][0] = 1;

  for (let i = 3; i <= n; i++) {
    dp[i][0] = BigInt(dp[i - 1][1]) + BigInt(dp[i - 1][0]);
    dp[i][1] = BigInt(dp[i - 1][0]);
  }
  console.log(String(BigInt(dp[n][0]) + BigInt(dp[n][1])));
}
