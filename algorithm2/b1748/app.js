const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(N) {
  let cnt = 0;
  for (let i = 1; i <= N; i *= 10) {
    cnt += N - i + 1;
  }
  console.log(cnt);
}
solution(+input[0]);
