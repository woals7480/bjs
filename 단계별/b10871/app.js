const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let firstLine = input[0].split(" ").map((item) => +item);
let secondLine = input[1].split(" ").map((item) => +item);

function solution(N, X) {
  let Value = [];

  for (i = 0; i < N; i++) {
    if (secondLine[i] < X) {
      Value.push(secondLine[i]);
    }
  }

  console.log(Value.join(" "));
}

solution(firstLine[0], firstLine[1]);
