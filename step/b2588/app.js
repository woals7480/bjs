const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

function solution(A, B) {
  const stringB = String(B);

  console.log(A * stringB[2]);
  console.log(A * stringB[1]);
  console.log(A * stringB[0]);
  console.log(A * B);
}

solution(input[0], input[1]);
