const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 상하좌우 탐색해서 가장 큰 영역의 크기를 출력하면된다
// 첫번째줄에 rowN, colN, foodN
// 그다음줄부터 좌표가 주어지는데 -1 위치를 차감해서 넣어야한다
// grid에 좌표를 1로 마킹하고 시작하면된다
const solution = (input) => {
  const [rowN, colN, foodN] = input[0].split(" ").map((v) => Number(v));
  const grid = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(0));

  for (let i = 1; i <= foodN; i++) {
    const [x, y] = input[i].split(" ").map((v) => Number(v));
    grid[x - 1][y - 1] = 1;
  }

  let answer = 0;

  const dfs = (x, y) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN || grid[x][y] === 0) return 0;
    grid[x][y] = 0;

    const up = dfs(x - 1, y);
    const down = dfs(x + 1, y);
    const left = dfs(x, y - 1);
    const right = dfs(x, y + 1);

    return 1 + up + down + left + right;
  };

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(i, j);
        answer = Math.max(answer, area);
      }
    }
  }

  console.log(answer);
};

solution(input);
