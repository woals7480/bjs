const fs = require("fs");
const { off } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ").map((item) => +item);
// let num = Array(input[0]).fill(0);
// let arr = num.map((item, index) => (item = index + 1));

// function solution(arr, selectNum) {
//   const results = [];
//   if (selectNum === 1) return arr.map((item) => [item]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const permutations = solution(rest, selectNum - 1);
//     const attached = permutations.map((permutation) => [fixed, ...permutation]);
//     results.push(...attached);
//   });

//   return results;
// }

// const result = solution(arr, input[1]);

// result.map((item) => console.log(item.join(" ")));

function solution(n, m) {
  const visited = Array(n);
  let output = [];
  let result = "";

  function dfs(cnt) {
    if (cnt === m) {
      result += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      output.push(i + 1);
      dfs(cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }

  dfs(0);

  console.log(result);
}

solution(input[0], input[1]);
