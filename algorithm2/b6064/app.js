const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
input = input.map((items) => items.split(" ").map((item) => +item));

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }

  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

for (let i = 0; i < T; i++) {
  const lastYear = lcm(input[i][0], input[i][1]);
  let answer = [];
  function ingka(M, N, x, y) {
    while (true) {
      if (x > lastYear || y > lastYear) {
        answer.push(-1);
        break;
      } else if (x > y) {
        y += N;
      } else if (x < y) {
        x += M;
      } else {
        answer.push(x);
        break;
      }
    }
    console.log(answer.join("\n"));
  }

  ingka(input[i][0], input[i][1], input[i][2], input[i][3]);
}
