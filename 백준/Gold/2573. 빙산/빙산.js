const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째 줄에 rowN, colN이 주어진다
// 두번재줄부터 그리드가 주어진다
// 각 영역에서 상하좌우 인접한 0 갯수만큼 높이가 줄어든다
// 줄어든 후 영역의 수가 두개 이상되는 최소한의 년수를 구해라
// 먼저 grid를 하나 만들고 영역수가 1개 이상일때 계속 돌린다
// for문으로 전부 다 각 영역마다 인접한 0의 수를 구한다음에
// Math.max(cur-zero, 0)으로 갱신한 후 day +1
// 그리고나서 영역의 수 구하고 두개 이상이면 answer = 갱신
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let yearAnswer = 0;
  let answer = 0;

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const dfs = (x, y, vistiedGrid) => {
    if (
      x < 0 ||
      x >= rowN ||
      y < 0 ||
      y >= colN ||
      vistiedGrid[x][y] ||
      grid[x][y] === 0
    )
      return;
    vistiedGrid[x][y] = true;

    dfs(x - 1, y, vistiedGrid);
    dfs(x + 1, y, vistiedGrid);
    dfs(x, y - 1, vistiedGrid);
    dfs(x, y + 1, vistiedGrid);
  };

  while (true) {
    const zeroCountGrid = Array(rowN)
      .fill(0)
      .map((v) => Array(colN).fill(0));
    const visited = Array(rowN)
      .fill(0)
      .map((v) => Array(colN).fill(false));

    for (let x = 0; x < rowN; x++) {
      for (let y = 0; y < colN; y++) {
        for (const [dx, dy] of dirs) {
          const nextX = x + dx;
          const nextY = y + dy;
          const isCnt =
            nextX >= 0 &&
            nextX < rowN &&
            nextY >= 0 &&
            nextY < colN &&
            grid[nextX][nextY] === 0;
          if (isCnt) {
            zeroCountGrid[x][y] += 1;
          }
        }
      }
    }

    for (let i = 0; i < rowN; i++) {
      for (let j = 0; j < colN; j++) {
        grid[i][j] = Math.max(grid[i][j] - zeroCountGrid[i][j], 0);
      }
    }

    let areaCnt = 0;

    for (let i = 0; i < rowN; i++) {
      for (let j = 0; j < colN; j++) {
        if (visited[i][j] || grid[i][j] === 0) continue;
        dfs(i, j, visited);
        areaCnt += 1;
      }
    }

    yearAnswer += 1;

    if (areaCnt > 1) {
      answer = yearAnswer;
      break;
    }
    if (areaCnt === 0) {
      break;
    }
  }

  console.log(answer);
};

solution(input);
