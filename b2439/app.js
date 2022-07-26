const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(N) {
  for (line = 1; line <= N; line++) {
    const starCnt = line;
    const spaceCnt = N - line;
    let printString = "";
    for (let i = 0; i < spaceCnt; i++) {
      printString += " ";
    }
    for (let i = 0; i < starCnt; i++) {
      printString += "*";
    }
    console.log(printString);
  }
}

solution(+input[0]);
