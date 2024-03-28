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

  let answer = 0;

  const dfs = (row, col, dir) => {
    if (row >= n || col >= n || grid[row][col] === 1) return;
    if (dir === "cross") {
      if (grid[row - 1][col] === 1 || grid[row][col - 1] === 1) return;
    }

    if (row === n - 1 && col === n - 1) {
      answer += 1;
      return;
    }

    if (dir === "right") {
      dfs(row, col + 1, "right");
      dfs(row + 1, col + 1, "cross");
    }

    if (dir === "down") {
      dfs(row + 1, col, "down");
      dfs(row + 1, col + 1, "cross");
    }

    if (dir === "cross") {
      dfs(row, col + 1, "right");
      dfs(row + 1, col, "down");
      dfs(row + 1, col + 1, "cross");
    }
  };

  dfs(0, 1, "right");

  console.log(answer);
};

solution(input);
