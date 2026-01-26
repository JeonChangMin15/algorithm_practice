const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// rowN, colN이 주어지고 그리드가 주어진다
// 1로 연결된 영역의 개수와 가장큰 영역의 너비를 구한다
// dfs로 1인 영역을 탐색하면서 상하좌우 넣는다
// 방문한 지점은 0으로 마킹하고 탐색이 끝나면 최대값 갱신을 해준다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let maxArea = 0;
  let cnt = 0;

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
        const cur = dfs(i, j);
        maxArea = Math.max(maxArea, cur);
        cnt += 1;
      }
    }
  }

  console.log(cnt);
  console.log(maxArea);
};

solution(input);
