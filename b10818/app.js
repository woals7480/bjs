const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
const items = input[1].split(" ").map((item) => +item);

function solution(arrayLength, items) {
  let max = items[0];
  let min = items[0];

  for (i = 0; i < arrayLength; i++) {
    if (max < items[i]) {
      max = items[i];
    }
    if (min > items[i]) {
      min = items[i];
    }
  }
  console.log(`${min} ${max}`);
}

solution(arrayLength, items);
