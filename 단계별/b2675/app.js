const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(T) {
  for (let i = 1; i <= T; i++) {
    const tempValue = input[i].split(" ");
    let [R, S] = [+tempValue[0], tempValue[1]];

    let answer = "";
    let result = [];
    for (let i = 0; i < S.length; i++) {
      answer = S[i].repeat(R);
      result.push(answer);
    }
    console.log(result.join(""));
  }
}

solution(+input[0]);
