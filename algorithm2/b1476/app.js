const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [E, S, M] = input[0].split(" ").map((item) => +item);

// function solution(E, S, M) {
//   let answer = 0;
//   let e = E;
//   let s = S % 28;
//   let m = M % 19;
//   while (e % 28 !== s || e % 19 !== m) {
//     e += 15;
//     answer = e;
//     if (E % 28 === s && E % 19 === m) break;
//   }

//   console.log(answer);
// }

// solution(E, S, M);

function solution(E, S, M) {
  let count = 1;
  while (true) {
    if (
      (count - E) % 15 === 0 &&
      (count - S) % 28 === 0 &&
      (count - M) % 19 === 0
    ) {
      console.log(count);
      break;
    }
    count++;
  }
}
solution(E, S, M);
