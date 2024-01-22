const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const queue = [];

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] !== 0) {
        queue.push([i, j, grid[i][j], 0]);
      }
    }
  }

  let currentDay = 0;

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let currentGrid = Array(rowN)
    .fill(0)
    .map((e) => Array(colN).fill(0));

  let area = 0;
  let zeroPos = [];

  const dfs = (x, y) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN || currentGrid[x][y] === 0)
      return;
    currentGrid[x][y] = 0;

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  };

  while (queue.length) {
    const [x, y, cnt, day] = queue.shift();

    if (day > currentDay) {
      zeroPos.forEach((pos) => (grid[pos[0]][pos[1]] = 0));
      area = 0;
      for (let i = 0; i < rowN; i++) {
        for (let j = 0; j < colN; j++) {
          if (currentGrid[i][j] === 0) continue;
          dfs(i, j);
          area += 1;
        }
      }

      zeroPos = [];

      if (area > 1) {
        console.log(day);
        return;
      } else {
        currentDay += 1;
      }
    }

    let cur = cnt;

    for (let [dx, dy] of dirs) {
      const neighborX = x + dx;
      const neighborY = y + dy;
      const isValid =
        neighborX >= 0 &&
        neighborX < rowN &&
        neighborY >= 0 &&
        neighborY < colN &&
        grid[neighborX][neighborY] === 0;

      if (isValid) cur -= 1;
    }

    if (cur > 0) {
      queue.push([x, y, cur, day + 1]);
      currentGrid[x][y] = cur;
    } else {
      zeroPos.push([x, y]);
    }
  }

  console.log(0);
};

solution(input);
