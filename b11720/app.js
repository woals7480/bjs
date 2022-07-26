const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(N, items) {
  const item = items.split("").map((item) => +item);
  let result = 0;
  for (let i = 0; i < N; i++) {
    result += item[i];
  }

  console.log(result);
}

solution(+input[0], input[1]);
