const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const target = +input[0];
const N = +input[1];
let handicap = [];
if (N > 0) {
  handicap = input[2].split(" ").map((item) => +item);
}

function check(num) {
  while (true) {
    if (handicap.includes(num % 10)) {
      return false;
    } else {
      num = Math.floor(num / 10);
    }
    if (num === 0) {
      break;
    }
  }
  return true;
}

const min1 = Math.abs(target - 100);
let min2 = Infinity;

for (let i = 0; i <= 999999; i++) {
  if (check(i)) {
    let newMin = i.toString().length + Math.abs(target - i);
    if (newMin < min2) min2 = newMin;
  }
}

console.log(Math.min(min1, min2));
