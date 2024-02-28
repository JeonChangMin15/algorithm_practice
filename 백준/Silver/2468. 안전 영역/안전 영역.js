const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];
  let max = 0;
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, grid[i][j]);
    }
  }

  let maxArea = 0;

  const findMaxArea = (height) => {
    let area = 0;

    const visited = Array(n)
      .fill(0)
      .map((e) => Array(n).fill(false));

    const dfs = (x, y) => {
      if (
        x < 0 ||
        x >= n ||
        y < 0 ||
        y >= n ||
        visited[x][y] ||
        grid[x][y] <= height
      )
        return;
      visited[x][y] = true;

      dfs(x + 1, y);
      dfs(x - 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
    };

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (visited[i][j] || grid[i][j] <= height) continue;
        dfs(i, j);
        area += 1;
      }
    }

    return area;
  };

  for (let i = 0; i <= max; i++) {
    maxArea = Math.max(findMaxArea(i), maxArea);
  }

  console.log(maxArea);
};

solution(input);
