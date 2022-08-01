// fs모듈로 하면 오류나는 문제

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input = input.map((item) => +item);
  solution(input[0], input[1]);
  process.exit();
});

function solution(A, B) {
  let ans = 0;
  if (A > 0 && B > 0) {
    ans = 1;
  }
  if (A < 0 && B > 0) {
    ans = 2;
  }
  if (A < 0 && B < 0) {
    ans = 3;
  }
  if (A > 0 && B < 0) {
    ans = 4;
  }
  console.log(ans);
}
