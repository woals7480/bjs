const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(S) {
  const splitS = S.split("");
  const sticks = [];
  let answer = 0;

  for (let i = 0; i < splitS.length; i++) {
    const string = splitS[i];
    //레이저발사
    if (string === "(" && splitS[i + 1] === ")") {
      answer += sticks.length;
      i++;
    } else if (string === "(") {
      sticks.push(string);
    } else if (string === ")") {
      sticks.pop();
      answer += 1;
    }
  }

  console.log(answer);
}

solution(input[0]);
