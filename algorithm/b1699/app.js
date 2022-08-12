const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(N) {
  const dp = Array.from({ length: N + 1 }, (v, i) => i);

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j < i; j++) {
      if (Math.pow(j, 2) > i) {
        break;
      }

      dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1);
    }
  }
  console.log(dp[N]);
}

solution(+input[0]);
