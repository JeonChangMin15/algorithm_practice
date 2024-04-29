const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 N이 주어지고 두번째줄부터는 3가지 값이 주어진다
// 0 1 2 인덱스를 선택하고 그 다음줄에서는 자신이 선택한 인덱스를 제외한 값중에
// 최소값을 선택하면되는 누적합문제다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  for (let i = 1; i < n; i++) {
    grid[i][0] += Math.min(grid[i - 1][1], grid[i - 1][2]);
    grid[i][1] += Math.min(grid[i - 1][0], grid[i - 1][2]);
    grid[i][2] += Math.min(grid[i - 1][0], grid[i - 1][1]);
  }

  console.log(Math.min(...grid[n - 1]));
};

solution(input);
