const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// N명이 뭉쳐져 있으면 전투력 N*N이다
// 첫째줄에 colN, rowN이 주어진다
// 그다음줄에 병사들이 주어지는데 B, W로 주어진다
// 흰색옷 전투력과 파란색 전투력을 한줄에 출력을 한다
// dfs로 방문안한곳이면 들어간다, 좌표, 팀을 매개변수로 가지고
// 상하좌우 탐색하면서 만약 방문했거나 적팀이면 return 0
// 그렇게해서 종료하면 리턴값 제곱해서 더해주면된다
const solution = (input) => {
  const [colN, rowN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(""));
  }

  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  let blueTeam = 0;
  let whieTeam = 0;

  const dfs = (x, y, team) => {
    if (
      x < 0 ||
      x >= rowN ||
      y < 0 ||
      y >= colN ||
      visited[x][y] ||
      team !== grid[x][y]
    )
      return 0;

    visited[x][y] = true;
    const up = dfs(x - 1, y, team);
    const down = dfs(x + 1, y, team);
    const left = dfs(x, y - 1, team);
    const right = dfs(x, y + 1, team);

    return 1 + up + down + left + right;
  };

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (visited[i][j]) continue;
      const cnt = dfs(i, j, grid[i][j]);
      if (grid[i][j] === "W") {
        whieTeam += cnt * cnt;
      } else {
        blueTeam += cnt * cnt;
      }
    }
  }

  console.log(whieTeam, blueTeam);
};

solution(input);
