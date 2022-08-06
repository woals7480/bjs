const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let inputs5 = Number(input[0]);
let inputs2 = Number(input[0]);
let answer5 = 0;
let answer2 = 0;
while (inputs5 >= 5) {
  answer5 += parseInt(inputs5 / 5);
  inputs5 /= 5;
}

while (inputs2 >= 2) {
  answer2 += parseInt(inputs2 / 2);
  inputs2 /= 2;
}
console.log(Math.min(answer5, answer2));
