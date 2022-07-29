const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = +input.shift();

for (let i = 0; i < T; i++) {
  const testcaseArray = input[i].split(" ").map((item) => +item);
  const H = testcaseArray[0];
  const W = testcaseArray[1];
  const N = testcaseArray[2];

  let floor = 0;
  if (N % H === 0) {
    floor = H;
  } else {
    floor = N % H;
  }

  let answer = floor * 100 + Math.ceil(N / H);
  console.log(answer);
}
