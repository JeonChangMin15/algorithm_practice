const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄 N 그다음줄부터 그리드가 주어진다
// 지역의 갯수와 지역의 크기를 오름차순으로 한줄씩 출력한다
// dfs로 1인곳은 전부 확인해서 상하좌우로 체킹하면된다
// 방문한곳은 0으로 만들면 된다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  const dfs = (x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] === 0) return 0;
    grid[x][y] = 0;

    const up = dfs(x - 1, y);
    const down = dfs(x + 1, y);
    const left = dfs(x, y - 1);
    const right = dfs(x, y + 1);

    return 1 + up + down + left + right;
  };

  const answer = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) continue;
      const area = dfs(i, j);
      answer.push(area);
    }
  }

  console.log(answer.length);
  console.log(answer.sort((a, b) => a - b).join("\n"));
};

solution(input);
