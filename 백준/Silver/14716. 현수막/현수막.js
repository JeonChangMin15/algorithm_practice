const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, colN 두번째줄부터 그리드가 주어진다
// 1로 연결된 영역의 수를 구하는데 상하좌우 대각선이 연결이다
// dfs로 탐색하면서 지나간곳은 0으로 마킹하고 이중 for문으로 1인곳만 탐색해서
// 카운팅을 증가
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 1],
    [-1, -1],
    [1, 1],
    [1, -1],
  ];

  const dfs = (x, y) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN || grid[x][y] === 0) return;
    grid[x][y] = 0;

    for (const [dx, dy] of dirs) {
      dfs(x + dx, y + dy);
    }
  };

  let answer = 0;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        answer += 1;
      }
    }
  }

  console.log(answer);
};

solution(input);
