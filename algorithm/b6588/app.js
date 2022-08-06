const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const numbers = [];
for (let i = 0; i < input.length; i++) {
  numbers.push(+input[i]);
}
numbers.pop();

const largestNum = Math.max(...numbers);
const check = Array(largestNum + 1).fill(false);

for (let i = 2; i <= Math.ceil(Math.sqrt(largestNum)); i++) {
  for (let j = i * i; j <= largestNum; j += i) {
    check[j] = true;
  }
}

let answer = "";
numbers.map((x) => {
  for (let i = 3; i < x; i += 2) {
    if (!check[i] && !check[x - i]) {
      answer += `${x} = ${i} + ${x - i}\n`;
      break;
    }
  }
});
console.log(answer.trim());
