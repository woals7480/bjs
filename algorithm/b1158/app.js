const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((item) => +item);

function solution(N, K) {
  const arr = [];
  const result = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 1; j <= K; j++) {
      if (j === K) {
        result.push(arr.shift());
      } else {
        arr.push(arr.shift());
      }
    }
  }

  console.log(`<${result.join(", ")}>`);
}

solution(input[0], input[1]);
