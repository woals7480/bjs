const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(S) {
  let temp = "";
  let ans = "";
  let isTag = false;

  for (let a of S) {
    if (a === "<") {
      isTag = true;
      ans += temp.split("").reverse().join("") + a;
      temp = "";
    } else if (a === ">") {
      isTag = false;
      ans += temp + a;
      temp = "";
    } else if (a === " ") {
      ans += (!isTag ? temp.split("").reverse().join("") : temp) + " ";
      temp = "";
    } else {
      temp += a;
    }
  }

  //   console.log((ans + temp.split("").reverse().join("")).replace(/\n/g, "")); //줄바꿈 제거
  console.log(ans);
}

solution(input[0]);
