const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testcase = [];
for (i = 0; ; i++) {
  const tempValue = input[i].split(" ").map((item) => +item);
  testcase.push({ A: tempValue[0], B: tempValue[1] });
  if (tempValue[0] === 0 && tempValue[1] === 0) {
    break;
  }
}

function solution(testcase) {
  let A = testcase[0].A;
  let B = testcase[0].B;
  let idx = 1;
  while (A !== 0 || B !== 0) {
    console.log(A + B);
    A = testcase[idx].A;
    B = testcase[idx].B;
    idx++;
  }
}

solution(testcase);
