const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번쩨줄에 rowN, colN이 주어진다
// 두번째줄에 그리드가 주어지고 0이 지나가고, 1은 안된다
// 0,0, -> 0,colN-1까지 0인곳이면 dfs를 시작한다
// 상하좌우로 탐색하면 x가 rowN-1이면 'YES'로 바꾸면 된다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let answer = "NO";
  const dfs = (x, y) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN || grid[x][y] === 1) return;
    grid[x][y] = 1;

    if (x === rowN - 1) {
      answer = "YES";
      return;
    }

    for (const [dx, dy] of dirs) {
      dfs(x + dx, y + dy);
    }
  };

  for (let i = 0; i < colN; i++) {
    dfs(0, i);
  }

  console.log(answer);
};

solution(input);
