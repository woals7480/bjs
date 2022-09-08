const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();

function solution(n, input) {
  const schedule = [];
  let max = 0;
  input.map((items) => {
    let tmp = items.split(" ").map((item) => +item);
    schedule.push({ date: tmp[0], price: tmp[1] });
  });

  function consulting(schedule, start, n, sum) {
    for (let i = start; i < n; i++) {
      if (i + schedule[i].date <= n) {
        consulting(schedule, i + schedule[i].date, n, sum + schedule[i].price);
      } else {
        max = Math.max(max, sum);
      }
    }
    max = Math.max(max, sum);
    return;
  }

  consulting(schedule, 0, n, 0);
  return max;
}

console.log(solution(n, input));
