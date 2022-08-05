const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(S) {
  const result = [];
  while (S.length) {
    result.push(S.join(""));
    S.shift();
  }
  console.log(result.sort().join("\n"));
}

solution(input[0].split(""));
