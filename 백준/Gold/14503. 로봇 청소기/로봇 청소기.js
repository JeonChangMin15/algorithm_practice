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

// 0,0 -> N-1, M-1 각각의 칸은 벽 또는 빈 칸이다
// 처음에 빈 칸은 전부 청소되지 않는 상태이다. 청소기는 바라보는 방향이 동서남북이 있다
// 1. 현재칸이 청소 안된 상태면 청소한다
// 현재칸의 주변의 4칸 중 청소안된 빈칸이 없으면 방향을 유지하고 한칸 후진하고 1번으로 돌아간다
// 바라보는 방향의 뒤쪽칸이 벽이라 후진이 안되면 멈춘다
// 현재 칸의 주변의 4칸중 청소안된 빈칸이 있다면 반시계 방향으로 90도 회전
// 바라보는 방향을 기준으로 앞쪽칸이 청소안된 빈칸이면 한칸 전진한다
// 1번으로 돌아간다.
// 첫째줄에 rowN, colN이 주어진다
// 둘째줄에는 좌표 row,col 바라보는 방향이 주어진다 0북 1동 2남 3서
// 셋째줄 부터 각 장소의 상태 그리드, 0이면 빈칸, 1이면 벽
// 각 동서남북 그리드 끝은 무조건 벽이다
// 청소기가 청소하는 칸의 갯수를 구한다

const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const [startX, startY, startDir] = input[1].split(" ").map((v) => Number(v));

  const grid = [];

  for (let i = 2; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = 0;
  const visited = Array(rowN)
    .fill(0)
    .map((e) => Array(colN).fill(false));

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const changedDir = {
    0: 3,
    1: 0,
    2: 1,
    3: 2,
  };

  const dfs = (row, col, dir, prevRow, prevCol) => {
    if (
      row < 0 ||
      row >= rowN ||
      col < 0 ||
      col >= colN ||
      grid[row][col] === 1
    )
      return;
    if (
      grid[row][col] === 0 &&
      visited[row][col] &&
      row !== prevRow &&
      col !== prevCol
    )
      return;

    if (!visited[row][col]) answer += 1;

    visited[row][col] = true;
    let isEmptyArea = false;

    for (let [dx, dy] of dirs) {
      const nextX = row + dx;
      const nextY = col + dy;
      const isValid =
        nextX >= 0 &&
        nextX < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        grid[nextX][nextY] === 0 &&
        !visited[nextX][nextY];

      if (isValid) isEmptyArea = true;
    }

    if (!isEmptyArea) {
      if (dir === 0) {
        if (grid[row + 1][col] === 0) {
          dfs(row + 1, col, dir, row, col);
        } else {
          return;
        }
      }
      if (dir === 1) {
        if (grid[row][col - 1] === 0) {
          dfs(row, col - 1, dir, row, col);
        } else {
          return;
        }
      }
      if (dir === 2) {
        if (grid[row - 1][col] === 0) {
          dfs(row - 1, col, dir, row, col);
        } else {
          return;
        }
      }
      if (dir === 3) {
        if (grid[row][col + 1] === 0) {
          dfs(row, col + 1, dir, row, col);
        } else {
          return;
        }
      }
    }

    if (isEmptyArea) {
      const newDir = changedDir[dir];
      if (newDir === 0) {
        if (grid[row - 1][col] === 0 && !visited[row - 1][col]) {
          dfs(row - 1, col, newDir, row, col);
        } else {
          dfs(row, col, newDir, row, col);
        }
      }

      if (newDir === 1) {
        if (grid[row][col + 1] === 0 && !visited[row][col + 1]) {
          dfs(row, col + 1, newDir, row, col);
        } else {
          dfs(row, col, newDir, row, col);
        }
      }

      if (newDir === 2) {
        if (grid[row + 1][col] === 0 && !visited[row + 1][col]) {
          dfs(row + 1, col, newDir, row, col);
        } else {
          dfs(row, col, newDir, row, col);
        }
      }

      if (newDir === 3) {
        if (grid[row][col - 1] === 0 && !visited[row][col - 1]) {
          dfs(row, col - 1, newDir, row, col);
        } else {
          dfs(row, col, newDir, row, col);
        }
      }
    }
  };

  dfs(startX, startY, startDir, startX, startY);

  console.log(answer);
};

solution(input);
