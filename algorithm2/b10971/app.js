const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const w = input.map((items) => items.split(" ").map((item) => +item));

function solution(n, w) {
  const visited = new Array(n);
  const output = [];
  const result = [];

  function dfs(cnt, curNode) {
    if (cnt === n - 1) {
      visited[0] = false;
    }
    if (cnt === n) {
      if (visited.every((e) => e === true)) {
        result.push(output.reduce((a, c) => a + c, 0));
      }
    }

    for (let i = 0; i < n; i++) {
      if (!w[curNode][i]) continue;
      if (!visited[i] && curNode !== i) {
        visited[i] = true;
        output.push(w[curNode][i]);
        dfs(cnt + 1, i);
        output.pop();
        visited[i] = false;
      }
    }
  }
  visited[0] = true;
  dfs(0, 0);
  return Math.min(...result);
}

console.log(solution(n, w));
