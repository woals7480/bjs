const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((item) => +item);

function solution(A, B, C) {
  const margin = C - B;
  const answer = Math.floor(A / margin) + 1;
  console.log(margin <= 0 ? -1 : answer);
}

solution(input[0], input[1], input[2]);
