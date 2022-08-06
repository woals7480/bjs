const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

//유클리드 호제법
const numbers = input[0].split(" ").map((item) => +item);

function solution(A, B) {
  let i = A;
  let j = B;
  while (i % j !== 0) {
    let n = i % j;
    i = j;
    j = n;
  }

  console.log(j);
  console.log((A * B) / j);
}

solution(numbers[0], numbers[1]);
