const fs = require("fs");
const { off } = require("process");
const { runInContext } = require("vm");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift(0);
const arr = input.map((items) => items.split(" ").map((item) => +item));

const people = [];
for (let i = 0; i < N; i++) {
  people.push(i);
}

const START_TEAM = [];
let LINK_TEAM = [];
const visited = new Array(N).fill(false);
let min = Number.MAX_SAFE_INTEGER;

function dfs(start, cnt) {
  if (cnt === N / 2) {
    LINK_TEAM = remainPeople(people, START_TEAM);
    const START_TEAM_POINT = calcTeamPoint(arr, START_TEAM);
    const LINK_TEAM_POINT = calcTeamPoint(arr, LINK_TEAM);
    min =
      min > Math.abs(START_TEAM_POINT - LINK_TEAM_POINT)
        ? Math.abs(START_TEAM_POINT - LINK_TEAM_POINT)
        : min;
    return;
  }

  for (let i = start; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    START_TEAM.push(i);
    dfs(i, cnt + 1);
    START_TEAM.pop();
    visited[i] = false;
  }
}

function remainPeople(people, team) {
  let result = people.filter((item) => !team.includes(item));
  return result;
}

function calcTeamPoint(points, team) {
  let result = 0;
  for (let i = 0; i < team.length; i++) {
    for (let j = 0; j < team.length; j++) {
      if (i === j) continue;
      result += points[team[i]][team[j]];
    }
  }

  return result;
}

dfs(0, 0);
console.log(min);
