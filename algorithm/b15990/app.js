const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const n = input.map((item) => +item);

function solution(T, n) {
  const MOD = 1000000009;
  const SIZE = Math.max(...n);
  const dp = Array.from({ length: SIZE + 1 }, () => Array(4).fill(0));

  dp[1][1] = dp[2][2] = dp[3][1] = dp[3][2] = dp[3][3] = 1;
  for (let i = 4; i <= SIZE; i++) {
    dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
    dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
    dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
  }

  let answer = [];
  for (let i = 0; i < n.length; i++) {
    answer.push((dp[n[i]][1] + dp[n[i]][2] + dp[n[i]][3]) % MOD);
  }
  console.log(answer.join("\n"));
}

solution(T, n);
