const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === "") continue;
  const arr = input[i].split("");
  const answer = [0, 0, 0, 0];

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] >= "a" && arr[j] <= "z") {
      answer[0]++;
    } else if (arr[j] >= "A" && arr[j] <= "Z") {
      answer[1]++;
    } else if (arr[j] >= "0" && arr[j] <= "9") {
      answer[2]++;
    } else if (arr[j] === " ") {
      answer[3]++;
    }
  }
  console.log(answer.join(" "));
}
