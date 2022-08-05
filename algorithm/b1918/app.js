const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(postfix) {
  const stack = [];
  let ans = "";

  for (let i = 0; i < postfix.length; i++) {
    if (postfix[i] >= "A" && postfix[i] <= "Z") {
      ans += postfix[i];
    } else if (postfix[i] === "(") {
      stack.push(postfix[i]);
    } else if (postfix[i] === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        ans += stack.pop();
      }
      stack.pop();
    } else if (postfix[i] === "+" || postfix[i] === "-") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        ans += stack.pop();
      }
      stack.push(postfix[i]);
    } else if (postfix[i] === "*" || postfix[i] === "/") {
      while (
        (stack.length && stack[stack.length - 1] === "*") ||
        stack[stack.length - 1] === "/"
      ) {
        ans += stack.pop();
      }
      stack.push(postfix[i]);
    }
  }

  while (stack.length) {
    ans += stack.pop();
  }
  console.log(ans);
}

solution(input[0]);
