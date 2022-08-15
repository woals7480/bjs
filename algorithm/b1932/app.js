const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input.shift();
const num = input.map((items) => items.split(" ").map((item) => +item));
num.map((items) => items.unshift(0));
num.map((items) => items.push(0));

function solution(N, num) {
  const dp = Array.from({ length: N + 1 });

  for (let i = 1; i <= N; i++) {
    if (i < 2) {
      dp[i] = Array(num[i - 1].length).fill(0);
    } else {
      dp[i] = Array(i * 2).fill(0);
    }
  }

  dp[1][1] = num[0][1];

  for (let i = 2; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + num[i - 1][j];
    }
  }

  console.log(Math.max(...dp[N]));
}

solution(N, num);
