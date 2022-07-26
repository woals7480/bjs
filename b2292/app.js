const fs = require("fs");
const { setUncaughtExceptionCaptureCallback } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(N) {
  let range = 1;
  let block = 1;
  while (range < N) {
    range += block * 6;
    block++;
  }

  console.log(block);
}

solution(+input[0]);
