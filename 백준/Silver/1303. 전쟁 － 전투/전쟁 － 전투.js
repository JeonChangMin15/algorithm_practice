const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 colN, rowN이 주어진다
// B(파란색), W(흰색) 병사의 위력을 한줄에 출력한다
// dfs로 상하좌우 탐색하는데 visited로 마킹하면된다
// 해당 너비의 제곱을 더해주면된다
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
      grid[x][y] !== team ||
      visited[x][y]
    )
      return 0;

    visited[x][y] = true;

    const left = dfs(x, y - 1, team);
    const right = dfs(x, y + 1, team);
    const down = dfs(x + 1, y, team);
    const up = dfs(x - 1, y, team);

    return 1 + left + right + down + up;
  };

  let white = 0;
  let blue = 0;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (!visited[i][j]) {
        const area = dfs(i, j, grid[i][j]);

        if (grid[i][j] === "W") {
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
