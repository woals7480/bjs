const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input.shift();
let answer = "";

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }

  return a;
}

const lcm = (a, b) => (a * b) / gcd(a, b);

for (let i = 0; i < N; i++) {
  let num = input[i].split(" ").map((item) => +item);
  let a = num[0];
  let b = num[1];
  answer += lcm(a, b) + "\n";
}

console.log(answer.trim());
