const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.join(" ").split(" ");

function solution(A, B) {
  const newA = +(A[2] + A[1] + A[0]);
  const newB = +(B[2] + B[1] + B[0]);
  console.log(Math.max(newA, newB));
}
solution(input[0], input[1]);
