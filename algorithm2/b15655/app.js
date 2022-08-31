const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((item) => +item);
const arr = input[1].split(" ").map((item) => +item);
arr.sort((a, b) => a - b);

function solution(n, m, arr) {
  const visited = Array(n);
  const output = [];
  let result = "";

  function dfs(cnt, start) {
    if (cnt === m) {
      result += `${output.join(" ")}\n`;
      return;
    }

    for (let i = start; i < n; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      output.push(arr[i]);
      dfs(cnt + 1, i);
      output.pop();
      visited[i] = false;
    }
  }
  dfs(0, 0);
  return result;
}

console.log(solution(n, m, arr).trim());
