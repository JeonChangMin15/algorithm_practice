const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 상하좌우 대각선까지 인접한 격자들의 집합
// dfs로 탐색을 하는데 만약에 옮겨간 지역이 height보다 크다면 false
// 만약에 작으면 return, 같은값이면 그냥 탐색하면되나?
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const visited = Array(rowN)
    .fill(0)
    .map((e) => Array(colN).fill(false));

  let isHightArea = true;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  const dfs = (x, y, height) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN) return;
    if (grid[x][y] > height) {
      isHightArea = false;
      return;
    }
    if (grid[x][y] < height || visited[x][y]) return;

    visited[x][y] = true;

    for (let [dx, dy] of dirs) {
      dfs(x + dx, y + dy, height);
    }
  };

  let answer = 0;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (visited[i][j]) continue;
      isHightArea = true;
      dfs(i, j, grid[i][j]);
      if (isHightArea) {
        answer += 1;
      }
    }
  }

  console.log(answer);
};

solution(input);
