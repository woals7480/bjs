const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = +input.shift();
  const inequality = input[0].split(" ");
  const visited = new Array(10).fill(false);
  let max = String(Number.MIN_SAFE_INTEGER);
  let min = String(Number.MAX_SAFE_INTEGER);

  function dfs(L, prev, result) {
    if (L === N) {
      max = result > max ? result : max;
      min = result < min ? result : min;
      return;
    }
    if (inequality[L] === "<") {
      for (let i = prev + 1; i < 10; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        dfs(L + 1, i, result + i);
        visited[i] = false;
      }
    } else {
      for (let i = prev - 1; i > -1; i--) {
        if (visited[i]) continue;
        visited[i] = true;
        dfs(L + 1, i, result + i);
        visited[i] = false;
      }
    }

    return;
  }

  for (let i = 0; i < 10; i++) {
    visited[i] = true;
    dfs(0, i, `${i}`);
    visited[i] = false;
  }

  return `${max}\n${min}`;
}

console.log(solution(input));
