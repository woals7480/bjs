const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = +input.shift();
const rgb = input.map((items) => items.split(" ").map((item) => +item));

function solution(n, rgb) {
  const dp = Array.from({ length: n }, () => Array(3).fill(0));
  const answer = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) {
        dp[0][j] = rgb[0][i];
      } else {
        dp[0][j] = 1000 * 1000 + 1;
      }
    }

    for (let j = 1; j < n; j++) {
      dp[j][0] = Math.min(dp[j - 1][1], dp[j - 1][2]) + rgb[j][0];
      dp[j][1] = Math.min(dp[j - 1][0], dp[j - 1][2]) + rgb[j][1];
      dp[j][2] = Math.min(dp[j - 1][0], dp[j - 1][1]) + rgb[j][2];
    }

    for (let j = 0; j < 3; j++) {
      if (i == j) continue;
      answer.push(dp[n - 1][j]);
    }
  }
  console.log(Math.min(...answer));
}

solution(n, rgb);
