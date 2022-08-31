const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((item) => +item);
const arr = input[1].split(" ").map((item) => +item);
arr.sort((a, b) => a - b);

function solution(n, m, arr) {
  const visited = Array(n);
  const output = [];
  let result = new Set();

  function dfs(cnt) {
    if (cnt === m) {
      result.add(output.join(" "));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      output.push(arr[i]);
      dfs(cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }

  dfs(0);
  return [...result].join("\n");
}

console.log(solution(n, m, arr));
