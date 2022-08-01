"use strict";
const { strict } = require("assert");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  const result = input[i].split("");
  let cnt = 0;

  for (let j = 0; j < result.length; j++) {
    if (result[j] === "(") {
      cnt++;
    } else if (result[j] === ")") {
      cnt--;
    }

    if (cnt < 0) break;
  }

  console.log(cnt === 0 ? "YES" : "NO");
}
