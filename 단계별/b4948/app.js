const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(N) {
  for (let i = 0; i < N.length - 1; i++) {
    const prime = { 1: true };
    for (let j = 2; j <= Math.ceil(Math.sqrt(N[i] * 2)); j++) {
      if (prime[j]) {
        continue;
      }
      for (let k = j ** 2; k <= N[i] * 2; k += j) {
        prime[k] = true;
      }
    }
    const result = [];
    for (let j = N[i] + 1; j <= N[i] * 2; j++) {
      if (!prime[j]) {
        result.push(j);
      }
    }
    console.log(String(result.length));
  }
}

solution(input.map((item) => +item));
