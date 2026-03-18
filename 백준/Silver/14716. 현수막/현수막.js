const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, colN이 주어진다
// 두번째줄에 그리드가 주어지고 0,1로 이루어져있다
// 상하좌우대각선으로 연결된 1의 영역의 갯수를 구해라
// dfs로 이중 for문으로 1인곳을 돌면서 방문한지점은 0 마킹
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
