const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(N) {
  if (N % 2 !== 0) return 0;

  const dp = Array(N + 1).fill(0);
  dp[0] = 1;
  dp[2] = 3;
  for (let i = 4; i <= N; i += 2) {
    dp[i] = dp[i - 2] * 3;

    for (let j = 4; j <= i; j += 2) {
      dp[i] += dp[i - j] * 2;
    }
  }

  return dp[N];
}

console.log(solution(+input[0]));
