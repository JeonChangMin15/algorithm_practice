const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, colN, dist가 주어진다
// T로 표시된곳은 못간다
// 왼쪽 아래에서 오른쪽위까지 dist로 갈 수 있는 경로수를 구해라
// dfs로 마킹하면서 하면서 도착지와 dist를 하면된다
const solution = (input) => {
  const [rowN, colN, dist] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(""));
  }

  const visitd = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  let answer = 0;

  const dfs = (x, y, curLen) => {
    if (
      x < 0 ||
      x >= rowN ||
      y < 0 ||
      y >= colN ||
      grid[x][y] === "T" ||
      visitd[x][y]
    )
      return;
    if (x === 0 && y === colN - 1 && curLen === dist) {
      answer += 1;
      return;
    }

    visitd[x][y] = true;

    dfs(x - 1, y, curLen + 1);
    dfs(x + 1, y, curLen + 1);
    dfs(x, y - 1, curLen + 1);
    dfs(x, y + 1, curLen + 1);

    visitd[x][y] = false;
  };

  dfs(rowN - 1, 0, 1);

  console.log(answer);
};

solution(input);
