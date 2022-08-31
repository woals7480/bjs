const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ").map((item) => +item);

function solution(n, m) {
  const visited = Array(n);
  const output = [];
  let result = "";

  function dfs(cnt, start) {
    if (cnt === m) {
      result += `${output.join(" ")}\n`;
      return;
    }

    for (let i = start; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output.push(i + 1);
      dfs(cnt + 1, i);
      output.pop();
      visited[i] = false;
    }
  }

  dfs(0, 0);
  return result;
}

console.log(solution(input[0], input[1]).trim());
