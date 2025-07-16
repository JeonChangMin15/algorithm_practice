// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.replace(/\r/, ""));

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번재줄에 숫자의 수
// 두번재줄부터 두번재줄 숫자들이 주어진다
// dfs로 1부터 방문지점을 다 돈다
// 그리고 up, down 집합이 완전히 일치하면 추가
const solution = (input) => {
  const n = Number(input[0]);
  const upArr = Array(n + 1)
    .fill(0)
    .map((v, index) => index);
  const downArr = [0];

  for (let i = 1; i <= n; i++) {
    downArr.push(Number(input[i]));
  }

  let answer = [];
  let upSample = [];
  let downSample = [];
  let visited = Array(n + 1).fill(false);

  const dfs = (value) => {
    if (visited[value]) return;
    visited[value] = true;
    upSample.push(value);
    downSample.push(downArr[value]);

    dfs(downArr[value]);
  };

  const set = new Set();

  for (let i = 1; i <= n; i++) {
    upSample = [];
    downSample = [];
    visited = Array(n + 1).fill(false);
    dfs(i);
    upSample.sort((a, b) => a - b);
    downSample.sort((a, b) => a - b);
    let isValid = true;

    for (let i = 0; i < upSample.length; i++) {
      if (upSample[i] !== downSample[i]) isValid = false;
    }

    if (isValid && !set.has(upSample.join(","))) {
      answer.push(...upSample);
      set.add(upSample.join(","));
    }
  }
  answer.sort((a, b) => a - b);
  console.log(answer.length);
  console.log(answer.join("\n"));
};

solution(input);
