const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = +input[0];
const postfix = input[1].split("");
const value = [];
for (let i = 2; i < input.length; i++) {
  value.push(+input[i]);
}

function solution(n, postfix, value) {
  let ASCII = 65;
  const stack = [];
  const operators = ["-", "+", "*", "/"];
  const transformer = {};

  const calculator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  for (let i = 0; i < n; i++) {
    const alphabet = String.fromCharCode(ASCII++);
    transformer[alphabet] = value[i];
  }

  const transformPostfix = postfix.map((item) =>
    !operators.includes(item) ? transformer[item] : item
  );

  for (let i = 0; i < transformPostfix.length; i++) {
    let pushValue = transformPostfix[i];
    if (operators.includes(pushValue)) {
      const secondValue = stack.pop();
      const firstValue = stack.pop();
      const calculateFunction = calculator[pushValue];
      pushValue = calculateFunction(firstValue, secondValue);
    }
    stack.push(pushValue);
  }
  console.log(stack[0].toFixed(2));
}

solution(n, postfix, value);
