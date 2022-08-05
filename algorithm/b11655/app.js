const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(S) {
  let answer = "";
  for (let i = 0; i < S.length; i++) {
    let char = S[i].charCodeAt(0);
    if (char >= 65 && char <= 90) {
      let upper = char + 13;
      if (upper > 90) {
        answer += String.fromCharCode(upper - 26);
      } else {
        answer += String.fromCharCode(upper);
      }
    } else if (char >= 97 && char <= 122) {
      let lower = char + 13;
      if (lower > 122) {
        answer += String.fromCharCode(lower - 26);
      } else {
        answer += String.fromCharCode(lower);
      }
    } else if (char === 32) {
      answer += " ";
    } else {
      answer += S[i];
    }
  }
  console.log(answer);
}

solution(input[0]);
