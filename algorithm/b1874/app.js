const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, ...nums] = input;
const numbers = nums.map((item) => +item);

function solution(n, numbers) {
  const stack = [];
  let answer = "";
  let count = 1;

  for (let i = 0; i < n; i++) {
    const number = numbers.shift();

    while (count <= number) {
      stack.push(count++);
      answer += "+";
    }

    const popedItem = stack.pop();
    if (popedItem !== number) {
      return "NO";
    }
    answer += "-";
  }

  return answer.split("").join("\n");
}

console.log(solution(+n, numbers));
