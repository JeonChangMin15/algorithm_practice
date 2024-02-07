const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [rowN, colN, squareN] = input[0].split(" ").map((v) => Number(v));
  const grid = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  for (let i = 1; i < input.length; i++) {
    const [y1, x1, y2, x2] = input[i].split(" ").map((v) => Number(v));

    for (let j = x1; j < x2; j++) {
      for (let k = y1; k < y2; k++) {
        grid[j][k] = true;
      }
    }
  }

  const dfs = (row, col) => {
    if (row < 0 || row >= rowN || col < 0 || col >= colN || grid[row][col])
      return 0;

    grid[row][col] = true;

    const down = dfs(row + 1, col);
    const up = dfs(row - 1, col);
    const right = dfs(row, col + 1);
    const left = dfs(row, col - 1);

    return 1 + up + down + right + left;
  };
  const answer = [];
  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j]) continue;
      const area = dfs(i, j);
      answer.push(area);
    }
  }

  answer.sort((a, b) => a - b);
  console.log(answer.length);
  console.log(answer.join(" "));
};

solution(input);
