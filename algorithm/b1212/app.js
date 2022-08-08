const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = input[0];
let answer = "";

while (n.length !== 0) {
  if (n.length > 1) {
    answer =
      parseInt(n.slice(n.length - 1), 8)
        .toString(2)
        .padStart(3, "0") + answer;
  } else {
    answer = parseInt(n.slice(n.length - 1), 8).toString(2) + answer;
  }
  n = n.slice(0, n.length - 1);
}

console.log(answer);
