const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const P = input[1].split(" ").map((item) => +item);

function solution(N, P) {
  const cards = P;
  const dp = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
    }
  }
  console.log(dp[N]);
}

solution(+input[0], P);
