const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  const n = arr.shift();
  const m = 6;
  const visited = Array(n);
  const output = [];
  let result = "";

  function dfs(cnt, start) {
    if (cnt === m) {
      result += `${output.join(" ")}\n`;
      return;
    }

    for (let j = start; j < n; j++) {
      if (visited[j] === true) continue;
      visited[j] = true;
      output.push(arr[j]);
      dfs(cnt + 1, j);
      output.pop();
      visited[j] = false;
    }
  }

  dfs(0, 0);
  console.log(result);
}
