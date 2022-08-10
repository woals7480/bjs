const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((item) => +item);

const base = input[1];
const answer = [];
let tmp = input[0];

while (tmp / base !== 0) {
  answer.push(tmp % base);
  tmp = Math.floor(tmp / base);
}

for (let i = 0; i < answer.length; i++) {
  if (answer[i] >= 10 && answer[i] <= 35) {
    answer[i] = String.fromCharCode(answer[i] + 55);
  }
}

console.log(answer.reverse().join(""));
