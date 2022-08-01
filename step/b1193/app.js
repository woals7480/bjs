const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

//분자 1  12  321 1234  54321
//분모 1  21  123 4321  12345

const Array = [];

let N = +input[0];
let groupcount = 0;

while (N > 0) {
  groupcount++;
  N -= groupcount;
}

if (groupcount % 2 === 0) {
  console.log(`${groupcount + N}/${Math.abs(N) + 1}`);
} else {
  console.log(`${Math.abs(N) + 1}/${groupcount + N}`);
}
