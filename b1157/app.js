const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(word) {
  const testArray = Array(91).fill(0);
  for (let i = 0; i < word.length; i++) {
    testArray[word.codePointAt(i)]++;
  }

  const max = Math.max(...testArray);
  let test = testArray.filter((num) => num === max);
  let result;
  if (test.length >= 2) {
    console.log("?");
  } else {
    for (let i = 65; i < 91; i++) {
      if (max === testArray[i]) {
        result = String.fromCodePoint(i);
      }
    }

    console.log(result);
  }
}

solution(input[0].toUpperCase());
