const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1은 집 존재 0은 없음 상화좌우 연결되면 단지다
// 단수를 출력하고 각 단지에 속해있는 집의 수를 오름차순으로 출력
// 첫째줄 N이 주어지고 정사각형 그리드, 두번째줄부터 띄어쓰기 없이 그리드
// dfs로 상하좌우 탐색하면서 0으로 만들면된다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];
  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }
  const areas = [];

  const dfs = (x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] === 0) return 0;

    grid[x][y] = 0;

    const up = dfs(x - 1, y);
    const down = dfs(x + 1, y);
    const left = dfs(x, y - 1);
    const right = dfs(x, y + 1);

    return 1 + up + down + left + right;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) continue;
      areas.push(dfs(i, j));
    }
  }

  areas.sort((a, b) => a - b);
  console.log(areas.length);
  console.log(areas.join("\n"));
};

solution(input);
