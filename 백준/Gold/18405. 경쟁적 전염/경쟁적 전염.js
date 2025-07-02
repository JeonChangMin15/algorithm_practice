const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 격자크기와 바이스러스의 수가 주어진다
// 두번째줄부터 격자가 주어진다
// 마지막줄에 시간제한과 좌표x,y가 주어진다
// 바이러스 숫자가 작은순서대로 상하좌우 전염시킨다
// 그렇다면 큐에 먼저 [virus,x,y,0]를 넣고 sort를 시켜야한다
// 그다음에 시간이 맥스보다 커지면 break를 해줘야한다
// targetX-1, tagetY-1
const solution = (input) => {
  const [n, virusN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  const [maxTime, targetX, targetY] = input[n + 1]
    .split(" ")
    .map((v) => Number(v));

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        queue.push([grid[i][j], i, j, 0]);
      }
    }
  }

  queue.sort((a, b) => a[0] - b[0]);
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const [virusNum, x, y, time] = queue.shift();
    if (time === maxTime) break;

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < n &&
        grid[nextX][nextY] === 0;

      if (isValid) {
        queue.push([virusNum, nextX, nextY, time + 1]);
        grid[nextX][nextY] = virusNum;
      }
    }
  }

  console.log(grid[targetX - 1][targetY - 1]);
};

solution(input);
