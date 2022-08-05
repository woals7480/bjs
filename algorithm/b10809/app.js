const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// function solution(S) {
//   const answer = Array(26).fill(-1);
//   for (let i = 0; i < S.length; i++) {
//     if (answer[S[i].codePointAt() - 97] === -1)
//       answer[S[i].codePointAt() - 97] = i;
//   }

//   console.log(answer.join(" "));
// }

// solution(input[0]);

function solution(S) {
  const answer = [];
  for (let i = 97; i <= 122; i++) {
    answer.push(S.indexOf(String.fromCodePoint(i)));
  }
  console.log(answer.join(" "));
}

solution(input[0]);
