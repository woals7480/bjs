const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input
  .shift()
  .split(" ")
  .map((item) => +item);

function solution(n, arr) {
  const visited = Array(n);
  const output = [];
  let result = new Set();

  function dfs(cnt) {
    if (cnt === n) {
      let sum = 0;
      for (let i = 0; i < output.length - 1; i++) {
        sum += Math.abs(output[i] - output[i + 1]);
      }
      result.add(sum);
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
  return Math.max(...[...result]);
}

console.log(solution(n, arr));
