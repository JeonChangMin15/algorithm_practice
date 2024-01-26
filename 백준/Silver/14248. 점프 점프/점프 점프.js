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

// 첫번째줄에 돌의 개수
// 둘째줄에는 각 위치에서 점프할 수 있는거리
//해당 거리만큼 오른쪽, 왼쪽으로 이동 가능, 돌밖으로는 안됨
// 셋째줄에는 처음 위치 1부터 시작해서 -1한 위치로 인덱스
// 방문 가능한 돌들의 갯수를 출력
const solution = (input) => {
  const n = Number(input[0]);
  const step = input[1].split(" ").map((v) => Number(v));
  const start = Number(input[2]) - 1;

  const visited = Array(n).fill(false);
  const dfs = (position) => {
    if (position < 0 || position >= n) return;
    visited[position] = true;

    dfs(position + step[position]);
    dfs(position - step[position]);
  };

  dfs(start);

  console.log(visited.filter((v) => v === true).length);
};

solution(input);
