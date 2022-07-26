const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testcaseArray = [];
for (i = 1; i <= +input[0]; i++) {
  let tempValue = input[i].split(" ").map((item) => +item);
  testcaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

function solution(T, testcaseArray) {
  for (i = 0; i < T; i++) {
    let A = testcaseArray[i].A;
    let B = testcaseArray[i].B;
    console.log(`Case #${i + 1}: ${A + B}`);
  }
}

solution(+input[0], testcaseArray);
