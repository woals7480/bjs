const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((item) => +item);
const arr = input[1].split(" ").map((item) => +item);
arr.sort((a, b) => a - b);

function solution(n, m, arr) {
  const visited = Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = { num: arr[i], boolean: false };
  }
  const output = [];
  let result = "";

  function dfs(cnt) {
    if (cnt === m) {
      result += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]["boolean"] === true) continue;
      visited[i]["boolean"] = true;
      output.push(visited[i]["num"]);
      dfs(cnt + 1);
      output.pop();
      visited[i]["boolean"] = false;
    }
  }

  dfs(0);
  return result;
}

console.log(solution(n, m, arr).trim());
