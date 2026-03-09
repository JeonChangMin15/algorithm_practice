const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, colN, 직사각형 갯수가 주어진다
// 직사각형에 포함안된 영역의 수와 각각의 너비를 오름차순으로 출력
// 각 직사각형의 시작점 x1,y1,x2,y2가 주어진다
// for문을 돌면서 각 지점에 0을 마킹하고 dfs로 영역을 탐색하면된다
const solution = (input) => {
  const [rowN, colN, squareN] = input[0].split(" ").map((v) => Number(v));
  const grid = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(1));

  for (let i = 1; i <= squareN; i++) {
    const [y1, x1, y2, x2] = input[i].split(" ").map((v) => Number(v));
    for (let i = x1; i < x2; i++) {
      for (let j = y1; j < y2; j++) {
        grid[i][j] = 0;
      }
    }
  }

  const answer = [];

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
      if (grid[i][j] === 0) continue;
      answer.push(dfs(i, j));
    }
  }

  console.log(answer.length);
  console.log(answer.sort((a, b) => a - b).join(" "));
};

solution(input);
