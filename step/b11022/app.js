const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testcase = [];

for (i = 1; i <= +input[0]; i++) {
  const tempValue = input[i].split(" ").map((item) => +item);
  testcase.push({ A: tempValue[0], B: tempValue[1] });
}

function solution(T, testcase) {
  for (i = 0; i < T; i++) {
    let A = testcase[i].A;
    let B = testcase[i].B;
    console.log(`Case #${i + 1}: ${A} + ${B} = ${A + B}`);
  }
}

solution(+input[0], testcase);
