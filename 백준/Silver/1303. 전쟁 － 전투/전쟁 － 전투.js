const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 가로크기, 세로크기가 주어지고
// 다음줄부터 띄어쓰기 없이 주어지고 B-> 파란색, W는 흰색이다
// n명이 뭉쳣을때 n제곱이다. w영역의 제곱들의합, b영역의 제곱들의 합을 한줄에 출력하면된다
// visited와 dfs로 row,col,team으로 비교하면서 영역을 구해서 더하면된다
const solution = (input) => {
  const [colN, rowN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(""));
  }
  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  const dfs = (x, y, team) => {
    if (
      x < 0 ||
      x >= rowN ||
      y < 0 ||
      y >= colN ||
      team !== grid[x][y] ||
      visited[x][y]
    )
      return 0;

    visited[x][y] = true;

    const up = dfs(x - 1, y, team);
    const down = dfs(x + 1, y, team);
    const left = dfs(x, y - 1, team);
    const right = dfs(x, y + 1, team);

    return 1 + up + down + left + right;
  };

  let blueTeam = 0;
  let whiteTeam = 0;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (visited[i][j]) continue;
      const area = dfs(i, j, grid[i][j]);

      if (grid[i][j] === "W") {
        whiteTeam += area * area;
      } else {
        blueTeam += area * area;
      }
    }
  }

  console.log(whiteTeam, blueTeam);
};

solution(input);
