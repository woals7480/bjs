const fs = require("fs");
const { off } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();
const N = +num[0];
const S = +num[1];
const arr = input[0].split(" ").map((item) => +item);

const visited = new Array(N).fill(false);
const output = [];
let count = 0;

for (let i = 0; i <= N; i++) {
  function dfs(idx, cnt) {
    if (cnt === i) {
      const sum = output.reduce((sum, cur) => sum + cur, 0);
      if (sum === S) count++;
      return;
    }

    for (let j = idx; j < N; j++) {
      if (visited[j]) continue;
      visited[j] = true;
      output.push(arr[j]);
      dfs(j, cnt + 1);
      output.pop();
      visited[j] = false;
    }
  }

  dfs(0, 0);
}
if (S === 0) count--;
console.log(count);
