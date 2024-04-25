const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// visited를 0부터 10까지 하나만들고 각 row마다
// 0부터 10까지 0이 아니면 마킹을 하고 total에 들어간다
// 백트래킹으로 하면될거같다
const solution = (input) => {
  const n = Number(input[0]);

  for (let test = 0; test < n; test++) {
    const grid = [];
    const visited = Array(11).fill(false);
    //1-11, 12-22
    for (let i = 11 * test + 1; i <= 11 * (test + 1); i++) {
      grid.push(input[i].split(" ").map((v) => Number(v)));
    }

    let max = 0;

    const dfs = (order, total) => {
      if (order === 11 && visited.every((v) => v)) {
        max = Math.max(max, total);
        return;
      }

      for (let i = 0; i <= 10; i++) {
        if (grid[order][i] && !visited[i]) {
          visited[i] = true;
          dfs(order + 1, total + grid[order][i]);
          visited[i] = false;
        }
      }
    };

    dfs(0, 0);

    console.log(max);
  }
};

solution(input);
