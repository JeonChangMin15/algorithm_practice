const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  if (grid[0][0] === 0) {
    console.log(0);
    return;
  }

  const dp = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(BigInt(0)));

  dp[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] === 0 || grid[i][j] === 0) continue;
      const step = grid[i][j];
      if (i + step < n) {
        dp[i + step][j] += BigInt(dp[i][j]);
      }
      if (j + step < n) {
        dp[i][j + step] += BigInt(dp[i][j]);
      }
    }
  }

  console.log(dp[n - 1][n - 1].toString());
};

solution(input);
