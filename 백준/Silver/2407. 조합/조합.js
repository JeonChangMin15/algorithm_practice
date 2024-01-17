// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.replace(/\r/, ""));

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// mCn 을 구해야된다
// mCn = m-1Cn-1 + m-1Cn
const solution = (input) => {
  const [m, n] = input[0].split(" ").map((v) => BigInt(v));
  const grid = Array(101)
    .fill(0n)
    .map(() => Array(101).fill(0n));

  for (let i = 1n; i <= 100n; i++) {
    for (let j = 1n; j <= 100n; j++) {
      if (j === 1n) {
        grid[i][j] = i;
      } else if (i === j) {
        grid[i][j] = 1n;
      } else if (i > j) {
        grid[i][j] = grid[i - 1n][j - 1n] + grid[i - 1n][j];
      }
    }
  }

  console.log(grid[m][n].toString());
};

solution(input);
