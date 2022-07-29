const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ");
// 2 1 5

function solution(A, B, V) {
  console.log(Math.ceil((V - B) / (A - B)));
}

solution(+input[0], +input[1], +input[2]);
