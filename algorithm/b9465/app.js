const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = +input.shift();

function solution(T, input) {
  for (let i = 0; i < T; i++) {
    const count = +input[i * 3];
    const up = input[i * 3 + 1].split(" ").map((item) => +item);
    const down = input[i * 3 + 2].split(" ").map((item) => +item);
    const dp = Array.from({ length: count + 1 }, () => Array(3).fill(0));
    dp[0] = [0, up[0], down[0]];

    for (let j = 1; j <= count; j++) {
      dp[j] = [
        Math.max(...dp[j - 1]),
        Math.max(dp[j - 1][0], dp[j - 1][2]) + up[j],
        Math.max(dp[j - 1][0], dp[j - 1][1]) + down[j],
      ];
    }
    console.log(Math.max(...dp[count - 1]));
  }
}
solution(T, input);
