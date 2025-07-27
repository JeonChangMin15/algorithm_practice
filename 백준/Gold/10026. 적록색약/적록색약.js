const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(""));
  }

  let normal = 0;
  let notNormal = 0;

  const normalVisited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));

  const notNormalVisited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const dfsNormal = (x, y, color) => {
    if (
      x < 0 ||
      x >= n ||
      y < 0 ||
      y >= n ||
      grid[x][y] !== color ||
      normalVisited[x][y]
    )
      return;
    normalVisited[x][y] = true;

    for (const [dx, dy] of dirs) {
      dfsNormal(x + dx, y + dy, color);
    }
  };

  const dfsNotNormal = (x, y, color) => {
    if (
      x < 0 ||
      x >= n ||
      y < 0 ||
      y >= n ||
      grid[x][y] !== color ||
      notNormalVisited[x][y]
    )
      return;
    notNormalVisited[x][y] = true;

    for (const [dx, dy] of dirs) {
      dfsNotNormal(x + dx, y + dy, color);
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (normalVisited[i][j]) continue;
      dfsNormal(i, j, grid[i][j]);
      normal += 1;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "G") {
        grid[i][j] = "R";
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (notNormalVisited[i][j]) continue;
      dfsNotNormal(i, j, grid[i][j]);
      notNormal += 1;
    }
  }

  console.log(normal, notNormal);
};

solution(input);
