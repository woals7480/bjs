const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const numbers = input[0].split(" ");

function solution(A, B, C, D) {
  const fristNum = A + B;
  const secondNum = C + D;
  const answer = Number(fristNum) + Number(secondNum);
  console.log(answer);
}

solution(numbers[0], numbers[1], numbers[2], numbers[3]);
