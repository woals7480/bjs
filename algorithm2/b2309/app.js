const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

const sum = input.reduce((sum, item) => sum + item, 0);
let arr;

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (sum - 100 === input[i] + input[j]) {
      arr = input.filter((item) => item !== input[i] && item !== input[j]);
      break;
    }
  }
  if (!!arr) break;
}
arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
