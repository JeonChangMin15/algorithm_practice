const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 빨간색과 초록색을 구분못하는 케이스의 지역의 수와 구분하는 케이스의 지역의 수를 구해라
// dfs로 첫번째는 r,g면 visited와 r또는 g면 간다
// dfs로 두번째는 r,g,b 각 알파벳일때만 간다 RGB
// 첫번째줄은 N, 두번째줄은 RGB 공백없이 주어진다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];
  const noLookVisited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));

  const lookVisited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(""));
  }
  let lookArea = 0;
  let noLookArea = 0;

  const noLookDfs = (row, col, color) => {
    if (row < 0 || row >= n || col < 0 || col >= n || noLookVisited[row][col])
      return;
    if (color === "R" || color === "G") {
      if (grid[row][col] === "B") return;
      noLookVisited[row][col] = true;
      noLookDfs(row + 1, col, color);
      noLookDfs(row - 1, col, color);
      noLookDfs(row, col + 1, color);
      noLookDfs(row, col - 1, color);
    } else {
      if (grid[row][col] !== "B") return;
      noLookVisited[row][col] = true;
      noLookDfs(row + 1, col, color);
      noLookDfs(row - 1, col, color);
      noLookDfs(row, col + 1, color);
      noLookDfs(row, col - 1, color);
    }
  };

  const lookDfs = (row, col, color) => {
    if (
      row < 0 ||
      row >= n ||
      col < 0 ||
      col >= n ||
      grid[row][col] !== color ||
      lookVisited[row][col]
    )
      return;

    lookVisited[row][col] = true;
    lookDfs(row - 1, col, color);
    lookDfs(row + 1, col, color);
    lookDfs(row, col - 1, color);
    lookDfs(row, col + 1, color);
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (noLookVisited[i][j]) continue;
      noLookDfs(i, j, grid[i][j]);
      noLookArea++;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (lookVisited[i][j]) continue;
      lookDfs(i, j, grid[i][j]);
      lookArea++;
    }
  }

  console.log(lookArea, noLookArea);
};

solution(input);
