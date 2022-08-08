const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((x) => +x);
input.shift();
const largestNum = Math.max(...input);
const check = new Array(largestNum + 1).fill(false);
for (let i = 2; i <= largestNum; i++) {
  if (!check[i]) {
    for (let j = i * i; j <= largestNum; j += i) {
      check[j] = true;
    }
  }
}
const answer = [];

input.map((x) => {
  let cnt = 0;
  let y = Math.ceil(x / 2);
  if (x === 4) cnt = 1;
  else {
    for (let i = 3; i <= y; i += 2) {
      if (!check[i] && !check[x - i]) {
        cnt++;
      }
    }
  }
  answer.push(cnt);
});

console.log(answer.join("\n"));
