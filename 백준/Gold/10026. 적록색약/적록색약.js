const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// R, G, B로 이루어진 그리드가 주어진다
// 적록 색약은 R,G를 똑같이 본다 일반인은 다 구분을 한다
// 일반인이 봤을때와 적록색약이 봣을때의 구역수를 한줄에 각각 출력한다
// dfs로 하는데 각각 dfs를 돌려서 답을 구하면 된다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(""));
  }

  let normal = 0;
  const visited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));

  const dfs = (x, y, color) => {
    if (
      x < 0 ||
      x >= n ||
      y < 0 ||
      y >= n ||
      visited[x][y] ||
      grid[x][y] !== color
    )
      return;

    visited[x][y] = true;
    dfs(x - 1, y, color);
    dfs(x + 1, y, color);
    dfs(x, y - 1, color);
    dfs(x, y + 1, color);
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        dfs(i, j, grid[i][j]);
        normal += 1;
      }
    }
  }

  const secondVisited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));

  let notNormal = 0;

  const secondDfs = (x, y, color) => {
    if (x < 0 || x >= n || y < 0 || y >= n || secondVisited[x][y]) return;
    if (color === "B" && (grid[x][y] === "R" || grid[x][y] === "G")) return;
    if ((color === "R" || color === "G") && grid[x][y] === "B") return;
    secondVisited[x][y] = true;

    secondDfs(x - 1, y, color);
    secondDfs(x + 1, y, color);
    secondDfs(x, y - 1, color);
    secondDfs(x, y + 1, color);
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!secondVisited[i][j]) {
        notNormal += 1;
        secondDfs(i, j, grid[i][j]);
      }
    }
  }

  console.log(normal, notNormal);
};

solution(input);
