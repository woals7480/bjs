const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// function solution(N) {
//   const dp = { 1: 1, 2: 2 };
//   for (let i = 3; i <= N; i++) {
//     dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
//   }
//   console.log(dp[N]);
// }

// solution(+input[0]);

function solution(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }
  return solution(n - 2) + solution(n - 1);
}

console.log(solution(+input[0]));
