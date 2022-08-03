const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const A = input[1].split(" ").map((item) => +item);

function solution(N, A) {
  const newArr = Array(1000001).fill(0);
  for (let i = 0; i < N; i++) {
    newArr[A[i]]++;
  }

  for (let i = 0; i < N; i++) {}
}

solution(+input[0], A);
