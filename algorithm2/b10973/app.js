const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const target = input.shift();

function solution(n, target) {
  let answer;
  const arr = target.split(" ").map((item) => +item);
  const arrCopy = [...arr].sort((a, b) => a - b);
  if (arr.every((value, index) => value === arrCopy[index])) {
    return -1;
  } else {
    let i = n - 2;
    while (arr[i] < arr[i + 1]) {
      i--;
    }

    let j = n - 1;
    while (arr[i] < arr[j]) {
      j--;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
    answer = [
      ...arr.slice(0, i + 1),
      ...arr.slice(i + 1, n).sort((a, b) => b - a),
    ].join(" ");
  }

  return answer;
}

console.log(solution(n, target));
