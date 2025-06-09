const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 마당은 행과 열로 이루어진 직사각형 모양이다. 글자 '.' (점)은 빈 필드를 의미하며, 글자 '#'는 울타리를,
// 'o'는 양, 'v'는 늑대를 의미한다.
// 상하좌우 이동만 가능. 한 공간에 양의 수가 늑대보다 많으면 양 카운트 아니면 늑대 카운트
// 첫번째 줄에 row, col이주어지고 두번째줄부터 그리드가 주어진다
// 첫줄에 양, 늑대를 출련한다
// dfs로 탐색을하는데 방문 안한지점을 마킹을 한다
// #이 아니고 방문 안한지점을 마킹하면서 해당 지점에 sheep, 늑대를 카운팅한다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(""));
  }
  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  let sheep = 0;
  let wolf = 0;

  let totalSheep = 0;
  let totalWolf = 0;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const dfs = (x, y) => {
    if (
      x < 0 ||
      x >= rowN ||
      y < 0 ||
      y >= colN ||
      visited[x][y] ||
      grid[x][y] === "#"
    )
      return;

    visited[x][y] = true;
    if (grid[x][y] === "o") sheep += 1;
    if (grid[x][y] === "v") wolf += 1;

    for (const [dx, dy] of dirs) {
      dfs(x + dx, y + dy);
    }
  };

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (visited[i][j] || grid[i][j] === "#") continue;
      sheep = 0;
      wolf = 0;
      dfs(i, j);

      if (sheep > wolf) {
        totalSheep += sheep;
      } else {
        totalWolf += wolf;
      }
    }
  }

  console.log(totalSheep, totalWolf);
};

solution(input);
