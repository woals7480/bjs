const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(S) {
  const arr = Array(26).fill(0);
  for (let i = 0; i < S.length; i++) {
    arr[S[i].codePointAt() - 97]++;
  }

  console.log(arr.join(" "));
}

solution(input[0]);
