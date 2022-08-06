const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map((item) => +item);

const prime = { 1: true };

for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
  if (prime[i]) {
    continue;
  }

  for (let j = i ** 2; j <= m; j += i) {
    prime[j] = true;
  }
}

const result = [];

for (let i = n; i <= m; i++) {
  if (!prime[i]) {
    result.push(i);
  }
}

console.log(result.join("\n"));
