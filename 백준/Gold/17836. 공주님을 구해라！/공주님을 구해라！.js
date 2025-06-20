const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, col, 시간이 주어진다
// 상하좌우로 탐색이 가능하고 0은 빈공간, 1은 벽, 2는 칼이 주어진다
// 제한 시간내에 공주에 도달할 수 있으면 최단시간을 출력하고
// 만약에 구출할 수 없으면 Fail을 출력한다
// 먼저 칼을 안쓰고 도달할 수 있는 최소 시간
// 칼에 도착 가능하다면 해당 시간과 좌표를 구해서 시간을 구해서 최솟값

const solution = (input) => {
  const [rowN, colN, limitTime] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let noKnifeTime = Infinity;
  let knifeTime = Infinity;
  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  visited[0][0] = true;
  const queue = [[0, 0, 0]];
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const [x, y, t] = queue.shift();

    if (x === rowN - 1 && y === colN - 1) {
      noKnifeTime = t;
      break;
    }

    if (grid[x][y] === 2) {
      knifeTime = t + (rowN - 1 - x) + (colN - 1 - y);
    }

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        !visited[nextX][nextY] &&
        grid[nextX][nextY] !== 1;

      if (isValid) {
        queue.push([nextX, nextY, t + 1]);
        visited[nextX][nextY] = true;
      }
    }
  }

  const minTime = Math.min(knifeTime, noKnifeTime);
  console.log(minTime <= limitTime ? minTime : "Fail");
};

solution(input);
