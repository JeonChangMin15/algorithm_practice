const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 N,K가 공백을 기준으로 주어진다. N은 격자크기 K는 1부터 K번 바이러스 종류
// 상하좌우 방향을 증식, 낮은 종류의 바이러스가 부터 증식한다
// 맨 마지막줄에 S, X,Y가 주어진다. S초 뒤에 (X-1, Y-1) 바이러스 숫자를 출력
// 바이러스가 존재하지 않으면 0을 출력한다.
// 먼저 그리드에 있는 바이러스를 [row, col, time, virus] 큐에 다가 넣고 바이러스 숫자순으로
// 오름 차순으로 한다
// bfs로 상하좌우로 검색하는 칸이 0이면 넣는다. 아니면 스킵
// time이 S보다 크면 break하면된다.
const solution = (input) => {
  const [n, k] = input[0].split(" ").map((v) => Number(v));
  const [endTime, targetX, targetY] = input[input.length - 1]
    .split(" ")
    .map((v) => Number(v));

  const grid = [];
  for (let i = 1; i < input.length - 1; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== 0) {
        queue.push([i, j, 0, grid[i][j]]);
      }
    }
  }

  queue.sort((a, b) => a[3] - b[3]);

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const [x, y, time, virus] = queue.shift();
    if (time === endTime) break;

    for (let [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < n &&
        grid[nextX][nextY] === 0;

      if (isValid) {
        grid[nextX][nextY] = virus;
        queue.push([nextX, nextY, time + 1, virus]);
      }
    }
  }

  console.log(grid[targetX - 1][targetY - 1]);
};

solution(input);
