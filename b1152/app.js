const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(T) {
  let cnt = 0;
  for (let i = 0; i < T.length; i++) {
    if (T[i] !== "") {
      cnt++;
    }
  }
  console.log(cnt);
}
solution(input[0].trim().split(" "));
