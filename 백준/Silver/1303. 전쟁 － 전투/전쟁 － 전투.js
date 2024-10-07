const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const [colN, rowN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(""));
  }

  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  const dfs = (x, y, team) => {
    if (
      x < 0 ||
      x >= rowN ||
      y < 0 ||
      y >= colN ||
      team !== grid[x][y] ||
      visited[x][y]
    ) {
      return 0;
    }

    visited[x][y] = true;
    const up = dfs(x - 1, y, team);
    const down = dfs(x + 1, y, team);
    const left = dfs(x, y - 1, team);
    const right = dfs(x, y + 1, team);

    return 1 + up + down + left + right;
  };

  let white = 0;
  let blue = 0;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (!visited[i][j]) {
        const area = dfs(i, j, grid[i][j]);
        if (grid[i][j] == "W") {
          white += area * area;
        } else {
          blue += area * area;
        }
      }
    }
  }

  console.log(white, blue);
};

solution(input);
