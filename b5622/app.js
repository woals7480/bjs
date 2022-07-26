const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(T) {
  const dial = {
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
  };

  let result = 0;
  for (let i = 0; i < T.length; i++) {
    for (let j = 2; j <= 9; j++) {
      if (dial[j].includes(T[i])) {
        result += j + 1;
      }
    }
  }
  console.log(result);
}

solution(input[0]);
