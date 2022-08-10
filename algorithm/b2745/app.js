const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ");
let n = input[0].split("").reverse();
let B = +input[1];
let answer = 0;

for (let i = 0; i < n.length; i++) {
  if (n[i] >= "A" && n[i] <= "Z") {
    n[i] = n[i].charCodeAt() - 55;
    answer += n[i] * Math.pow(B, i);
  } else {
    n[i] = +n[i];
    answer += n[i] * Math.pow(B, i);
  }
}

console.log(answer);
