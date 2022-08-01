const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const items = input.map((item) => +item);

function solution(items) {
  const answer = Array(42).fill(0);
  for (i = 0; i < 10; i++) {
    const num = items[i] % 42;
    answer[num]++;
  }

  let count = 0;
  for (i = 0; i < answer.length; i++) {
    if (answer[i] > 0) {
      count++;
    }
  }

  console.log(count);
}

solution(items);
