const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = input[1].split(" ").map((item) => +item);

function solution(N, A) {
  const dp = Array(N).fill(0);
  const arr = [];
  for (let i = 0; i < N; i++) {
    let max = 0;
    let maxIndex = -1;
    for (let j = 0; j < i; j++) {
      if (A[i] > A[j] && dp[j] > max) {
        max = dp[j];
        maxIndex = j;
      }
    }
    dp[i] = max + 1;
    arr[i] = maxIndex !== -1 ? arr[maxIndex].concat(A[i]) : [A[i]];
  }
  let maxLength = Math.max(...dp);
  console.log(maxLength);
  console.log(arr[dp.indexOf(maxLength)].join(" "));
}

solution(+input[0], A);
