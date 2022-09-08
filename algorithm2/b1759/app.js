const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const [L, C] = input[0].split(" ").map((item) => +item);
let arr = input[1].split(" ").sort();

function solution(L, C, arr) {
  const vowel = ["a", "e", "i", "o", "u"];
  const visited = new Array(C);
  const output = [];
  let answer = "";

  function dfs(start, cnt) {
    if (cnt === L) {
      let vowelCnt = 0;
      for (let i = 0; i < output.length; i++) {
        if (vowel.includes(output[i])) vowelCnt++;
      }
      if (vowelCnt > 0 && L - vowelCnt > 1) {
        answer += `${output.join("")}\n`;
      }
    }

    for (let i = start; i < C; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output.push(arr[i]);
      dfs(i, cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }

  dfs(0, 0);
  return answer;
}
console.log(solution(L, C, arr).trim());
