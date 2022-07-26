const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

function solution(A, B, C) {
  let result = 0;
  if (A === B && B === C) {
    result = 10000 + A * 1000;
  } else if (
    (A === B && B !== C) ||
    (A === C && A !== B) ||
    (B === C && C !== A)
  ) {
    if ((A === B && B !== C) || (A === C && A !== B)) {
      result = 1000 + A * 100;
    } else if (B === C && C !== A) {
      result = 1000 + B * 100;
    }
  } else {
    result = Math.max(A, B, C) * 100;
  }

  console.log(result);
}

solution(input[0], input[1], input[2]);
