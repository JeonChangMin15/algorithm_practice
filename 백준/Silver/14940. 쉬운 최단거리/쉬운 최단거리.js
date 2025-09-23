const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rown, colN 주어진다
// 두번째줄에 그리드가 주어지고 2는 목표지점, 1은 갈 수 있는 땅 0은 갈 수 없다
// 각 지점에서 목표지점까지의 거리를 출력. 원래 갈 수 없는 땅은 0, 갈 수 있는데
// 못간곳은 -1을 출력한다
// 먼저 그리드를 만들고 0은 지점을 큐에다가 넣는다
// 그리고나서 거리 좌표를 비교하면서 지금 dist보다 +1 보다 작으면 간다
// 다 돌고나서 마지막으로 0인데 못간곳은 -1로 마킹을 해준다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const queue = [];
  const dist = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(Infinity));

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
        dist[i][j] = 0;
      }
    }
  }

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const [x, y, d] = queue.shift();

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        d + 1 < dist[nextX][nextY] &&
        grid[nextX][nextY] === 1;

      if (isValid) {
        queue.push([nextX, nextY, d + 1]);
        dist[nextX][nextY] = d + 1;
      }
    }
  }

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 0) {
        dist[i][j] = 0;
      }
      if (grid[i][j] === 1 && dist[i][j] === Infinity) {
        dist[i][j] = -1;
      }
    }
  }

  for (let i = 0; i < rowN; i++) {
    console.log(dist[i].join(" "));
  }
};

solution(input);
