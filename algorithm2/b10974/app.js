const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n) {
  const visited = Array(n);
  const output = [];
  let result = "";

  function dfs(cnt) {
    if (cnt === n) {
      result += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      output.push(i + 1);
      dfs(cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }

  dfs(0);
  return result;
}
console.log(solution(+input[0]).trim());
