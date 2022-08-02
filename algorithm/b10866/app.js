const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const deque = [];
const result = [];

for (let i = 1; i <= +input[0]; i++) {
  switch (input[i].split(" ")[0]) {
    case "pop_front":
      result.push(deque.shift() || -1);
      break;

    case "pop_back":
      result.push(deque.pop() || -1);
      break;

    case "size":
      result.push(deque.length);
      break;

    case "empty":
      result.push(deque[0] ? 0 : 1);
      break;

    case "front":
      result.push(deque[0] || -1);
      break;

    case "back":
      result.push(deque[deque.length - 1] || -1);
      break;

    case "push_front":
      deque.unshift(+input[i].split(" ")[1]);
      break;

    case "push_back":
      deque.push(+input[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
