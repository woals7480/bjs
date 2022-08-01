const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testcaseArray = input[1].split(" ").map((item) => +item);

function solution(N, testcaseArray) {
  const max = Math.max(...testcaseArray);
  const newScores = [];

  for (i = 0; i < N; i++) {
    const newScore = (testcaseArray[i] / max) * 100;
    newScores.push(newScore);
  }

  let average = 0;
  for (i = 0; i < N; i++) {
    average += newScores[i];
  }

  console.log(average / N);
}

solution(+input[0], testcaseArray);

// const num = input[0] * 1;
// const score = input[1].split(" ");

// const max = Math.max(...score);
// let sum = 0;

// for (let i = 0; i < num; i++) {
//     sum += score[i] / max * 100;
// }

// console.log(sum / num);
