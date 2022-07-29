const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const sum = [];

for (let i = +input[0]; i <= +input[1]; i++) {
  if (i === 1) {
    continue;
  } else if (i === 2) {
    sum.push(i);
  } else {
    let count = 0;
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 0) {
      sum.push(i);
    }
  }
}

let result = 0;
for (let i = 0; i < sum.length; i++) {
  result += sum[i];
}

if (sum.length === 0) {
  console.log(-1);
} else {
  console.log(result);
  console.log(Math.min(...sum));
}
