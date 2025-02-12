const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  const dfs = (x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] === 0) return 0;

    grid[x][y] = 0;

    const up = dfs(x - 1, y);
    const down = dfs(x + 1, y);
    const left = dfs(x, y - 1);
    const right = dfs(x, y + 1);

    return 1 + up + down + left + right;
  };

  const answer = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        answer.push(dfs(i, j));
      }
    }
  }

  console.log(answer.length);
  console.log(answer.sort((a, b) => a - b).join("\n"));
};

solution(input);
