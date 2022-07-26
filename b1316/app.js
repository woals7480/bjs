const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arr = [];
for (let i = 1; i <= +input[0]; i++) {
  arr.push(input[i]);
}

function solution(arr) {
  let cnt = 0;
  const word = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      word.push(arr[i][j]);
    }
  }
  console.log;
}

solution(arr);
