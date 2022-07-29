const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(T) {
  const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  for (let alphabet of croatia) {
    T = T.split(alphabet).join("Q");
  }

  console.log(T.length);
}

solution(input[0]);
