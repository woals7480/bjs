const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ").map((item) => +item);

function solution(n, m) {
  const output = [];
  let result = "";

  function dfs(cnt) {
    if (cnt === m) {
      result += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      output.push(i + 1);
      dfs(cnt + 1);
      output.pop();
    }
  }

  dfs(0);
  return result;
}

console.log(solution(input[0], input[1]).trim());
