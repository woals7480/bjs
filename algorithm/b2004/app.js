const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map((item) => +item);

const getTwoFive = (x) => {
  let five = 0;
  let two = 0;
  for (let i = 2; i <= x; i *= 2) {
    two += parseInt(x / i);
  }
  for (let i = 5; i <= x; i *= 5) {
    five += parseInt(x / i);
  }

  return [two, five];
};

const [nt, nf] = getTwoFive(n);
const [mt, mf] = getTwoFive(m);
const [nmt, nmf] = getTwoFive(n - m);
const two = nt - mt - nmt;
const five = nf - mf - nmf;
console.log(Math.min(two, five));
