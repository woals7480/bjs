const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const A = input[1].split(" ").map((item) => +item);

function solution(N, A) {
  const count = {};
  const result = [];
  const stack = [];
  for (let i = 0; i < N; i++) {
    if (!count[A[i]]) count[A[i]] = 1;
    else {
      count[A[i]]++;
    }
  }
  for (let i = 0; i < N; i++) {
    result.push(count[A[i]]);
  }

  for (let i = 0; i < N; i++) {
    while (stack.length && result[stack[stack.length - 1]] < result[i]) {
      A[stack.pop()] = A[i];
    }
    stack.push(i);
  }

  while (stack.length) {
    A[stack.pop()] = -1;
  }

  console.log(A.join(" "));
}

solution(+input[0], A);
