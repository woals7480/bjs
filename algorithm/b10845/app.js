const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const queue = [];
const result = [];

for (let i = 1; i <= +input[0]; i++) {
  switch (input[i]) {
    case "pop":
      result.push(queue.shift() || -1);
      break;
    case "size":
      result.push(queue.length);
      break;
    case "empty":
      result.push(queue[0] ? 0 : 1);
      break;
    case "front":
      result.push(queue[0] || -1);
      break;
    case "back":
      result.push(queue[queue.length - 1] || -1);
      break;
    default:
      queue.push(+input[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
