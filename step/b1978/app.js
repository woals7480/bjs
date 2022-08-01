const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const Array = input[1].split(" ").map((item) => +item);

let answer = 0;
for (let i = 0; i < +input[0]; i++) {
  if (Array[i] === 1) {
    continue;
  } else if (Array[i] === 2) {
    answer++;
  } else {
    let count = 0;
    for (let j = 2; j < Array[i]; j++) {
      if (Array[i] % j === 0) {
        count++;
      }
    }
    if (count === 0) {
      answer++;
    }
  }
}

console.log(answer);
