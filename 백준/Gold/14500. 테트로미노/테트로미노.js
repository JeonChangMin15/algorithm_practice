const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// dfs로 기존대로 풀고
// 예외 케이스로 ㅗㅓㅏㅜ를 검사해야된다.
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  let answer = 0;

  const dfs = (x, y, score, depth) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN || visited[x][y]) return;
    visited[x][y] = true;

    if (depth === 3) {
      answer = Math.max(answer, score + grid[x][y]);
      visited[x][y] = false;
      return;
    }

    dfs(x - 1, y, score + grid[x][y], depth + 1);
    dfs(x + 1, y, score + grid[x][y], depth + 1);
    dfs(x, y - 1, score + grid[x][y], depth + 1);
    dfs(x, y + 1, score + grid[x][y], depth + 1);

    visited[x][y] = false;
  };

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      dfs(i, j, 0, 0);
      // ㅗ
      if (i - 1 >= 0 && j - 1 >= 0 && j + 1 < colN) {
        answer = Math.max(
          answer,
          grid[i][j] + grid[i - 1][j] + grid[i][j - 1] + grid[i][j + 1]
        );
      }

      // ㅜ
      if (i + 1 < rowN && j - 1 >= 0 && j + 1 < colN) {
        answer = Math.max(
          answer,
          grid[i][j] + grid[i + 1][j] + grid[i][j - 1] + grid[i][j + 1]
        );
      }

      // ㅓ
      if (j - 1 >= 0 && i - 1 >= 0 && i + 1 < rowN) {
        answer = Math.max(
          answer,
          grid[i][j] + grid[i][j - 1] + grid[i - 1][j] + grid[i + 1][j]
        );
      }

      // ㅏ
      if (j + 1 < colN && i - 1 >= 0 && i + 1 < rowN) {
        answer = Math.max(
          answer,
          grid[i][j] + grid[i][j + 1] + grid[i - 1][j] + grid[i + 1][j]
        );
      }
    }
  }

  console.log(answer);
};

solution(input);
