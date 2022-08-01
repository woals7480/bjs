const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  let words = input[i].split(" ");
  let answer = words.map((word) => word.split("").reverse().join("")).join(" ");
  console.log(answer);
}
