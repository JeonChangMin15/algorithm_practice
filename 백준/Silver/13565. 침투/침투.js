const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, colN 주어지고 그 다음줄부터 간격없는 그리드가 주어진다
// 0이면 지나가고 1은 못지나간다
// for문으로 [0][colN]을 탐색하면서 visit를 찍으면서 만약 지점의 x가 rowN-1 이면 YES 바꾼다

const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }
  let answer = "NO";
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const dfs = (x, y) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN || grid[x][y] === 1) return;

    if (x === rowN - 1) {
      answer = "YES";
      return;
    }
    grid[x][y] = 1;

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