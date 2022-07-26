const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let currentTime = input[0].split(" ").map((item) => +item);
let timer = +input[1];

function solution(H, M, T) {
  let cockTime = Math.trunc((M + T) / 60);
  H += cockTime;
  M = (M + T) % 60;
  if (H >= 24) {
    H -= 24;
  }

  console.log(H, M);
}

solution(currentTime[0], currentTime[1], timer);
