const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testcaseArray = [];
for (let i = 1; i <= +input[0]; i++) {
  const tempValue = input[i].split(" ").map((item) => +item);
  testcaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

function solution(T, testcaseArray) {
  for (i = 0; i < T; i++) {
    const result = testcaseArray[i].A + testcaseArray[i].B;
    console.log(result);
  }
}

solution(+input[0], testcaseArray);
