const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 섬이 몇개인지 구하는 문제로 풀면된다
// dfs로 푸는데 상하좌우 대각선까지 연결된걸로 생각한다
// 1만 탐색하고 방문한 지점은 0으로 체킹하면 된다
// 첫째줄에 rowN, colN이 주어지고 그 다음줄 부터는 그리드
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  const dfs = (x, y) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN || grid[x][y] === 0) return;
    grid[x][y] = 0;

    for (let [dx, dy] of dirs) {
      dfs(x + dx, y + dy);
    }
  };

  let area = 0;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 0) continue;
      dfs(i, j);
      area += 1;
    }
  }

  console.log(area);
};

solution(input);
