const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(""));
  }

  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  const dfs = (x, y, prevX, prevY, startX, startY, target, cnt) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN || grid[x][y] !== target)
      return false;

    if (
      x === startX &&
      y === startY &&
      prevX !== -1 &&
      prevY !== -1 &&
      cnt >= 4
    ) {
      return true;
    }

    if (visited[x][y]) return false;

    visited[x][y] = true;

    const up = dfs(x - 1, y, x, y, startX, startY, target, cnt + 1);
    const down = dfs(x + 1, y, x, y, startX, startY, target, cnt + 1);
    const left = dfs(x, y - 1, x, y, startX, startY, target, cnt + 1);
    const right = dfs(x, y + 1, x, y, startX, startY, target, cnt + 1);

    visited[x][y] = false;

    return up || down || left || right;
  };

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      const isCycle = dfs(i, j, -1, -1, i, j, grid[i][j], 0);
      if (isCycle) {
        console.log("Yes");
        return;
      }
    }
  }

  console.log("No");
};

solution(input);
