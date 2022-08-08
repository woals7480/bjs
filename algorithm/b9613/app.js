const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0];

for (let i = 1; i <= N; i++) {
  const splited = input[i].split(" ").map((item) => +item);
  const nums = +splited[0];
  let result = 0;
  for (let j = 1; j <= nums; j++) {
    for (let k = j + 1; k <= nums; k++) {
      let common = gcd(splited[j], splited[k]);
      result += common;
    }
  }
  console.log(result);
}

function gcd(a, b) {
  let tmp;
  while (b != 0) {
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}
