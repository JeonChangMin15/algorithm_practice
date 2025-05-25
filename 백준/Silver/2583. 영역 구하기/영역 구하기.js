const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rown, coln, 직사각형 갯수
// 두번재줄부터 직사각형 좌표가 x1,y1,x2,y2
// 직사각형 영역을 제외한 나머지 영역들의 넓이를 오름차순
// 먼저 그리드로 1로 만들고 직사각형 영역을 다 0으로 마킹
// 그 다음 dfs로
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
