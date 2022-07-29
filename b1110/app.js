const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(N) {
  let makeNum = N;
  let ans = 0;
  while (makeNum !== N || ans === 0) {
    let ten;
    let one;
    if (makeNum >= 10) {
      ten = +String(makeNum)[0];
      one = +String(makeNum)[1];
    } else {
      ten = 0;
      one = +String(makeNum)[0];
    }

    makeNum = ten + one;
    let newNum;
    if (makeNum >= 10) {
      newNum = +String(makeNum)[1];
    } else {
      newNum = +String(makeNum)[0];
    }

    makeNum = +(String(one) + String(newNum));
    ans++;
  }
  console.log(ans);
}

solution(+input[0]);
