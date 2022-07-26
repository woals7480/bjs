const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(N) {
  let count = 0;
  while (true) {
    if (N % 5 === 0) {
      console.log(N / 5 + count);
      break;
    }
    if (N < 0) {
      console.log(-1);
      break;
    }
    count++;
    N -= 3;
  }
}

solution(+input[0]);
