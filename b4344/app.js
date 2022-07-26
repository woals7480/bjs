const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
const inputArray = [];

for (i = 1; i <= arrayLength; i++) {
  const arr = input[i].split(" ");
  inputArray.push({
    N: +arr[0],
    arr: arr.slice(1).map((item) => +item),
  });
}

function solution(C, inputArray) {
  for (i = 0; i < C; i++) {
    const item = inputArray[i];
    let average = 0;
    for (j = 0; j < item.N; j++) {
      average += item.arr[j];
    }

    average /= item.N;
    let cnt = 0;
    for (j = 0; j < item.N; j++) {
      if (average < item.arr[j]) {
        cnt++;
      }
    }

    let answer = (cnt / item.N) * 100;
    console.log(answer.toFixed(3) + "%");
  }
}

solution(arrayLength, inputArray);
