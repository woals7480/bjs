const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(S) {
  const result = [];
  for (let i = 97; i <= 122; i++) {
    result.push(S.indexOf(String.fromCodePoint(i)));
  }
  console.log(result.join(" "));
}

solution(input[0]);
