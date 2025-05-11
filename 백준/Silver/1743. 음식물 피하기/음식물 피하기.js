const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 rowN, colN, 음식물 수가 주어진다
// 한줄씩 음식물 좌표가 주어지는데 -1씩 해주면된다
// 상하좌우 붙어있는것들중에서 가장큰 덩어리를 출력
// dfs로 탐색하면서 이중 for문으로 음식물이면 탐색을 시작한다
// 지나간곳은 0으로 마킹하면된다
const solution = (input) => {
  const [rowN, colN, foodN] = input[0].split(" ").map((v) => Number(v));
  const grid = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(0));

  for (let i = 1; i <= foodN; i++) {
    const [x, y] = input[i].split(" ").map((v) => Number(v));
    grid[x - 1][y - 1] = 1;
  }

  const dfs = (x, y) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN || grid[x][y] === 0) return 0;
    grid[x][y] = 0;

    const up = dfs(x - 1, y);
    const down = dfs(x + 1, y);
    const left = dfs(x, y - 1);
    const right = dfs(x, y + 1);

    return 1 + up + down + left + right;
  };

  let answer = 0;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 0) continue;
      answer = Math.max(answer, dfs(i, j));
    }
  }

  console.log(answer);
};

solution(input);
