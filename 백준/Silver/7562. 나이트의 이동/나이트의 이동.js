const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 체스판에서 해당 지점으로 최소 몇번만에 이동하는지 각 케이스마다 출력
// 첫번째줄에 테스트케이스의개수가 주어진다
// 3*(n-1) +1 체스판 크기 3*(n-1) + 2 시작점, 3*(n-1) +3 도착점
// bfs로 탐색하면된다
const solution = (input) => {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    const len = Number(input[3 * (i - 1) + 1]);
    const [startX, startY] = input[3 * (i - 1) + 2]
      .split(" ")
      .map((v) => Number(v));

    const [endX, endY] = input[3 * (i - 1) + 3]
      .split(" ")
      .map((v) => Number(v));

    const queue = [[startX, startY, 0]];
    const visited = Array(len)
      .fill(0)
      .map((v) => Array(len).fill(false));
    visited[startX][startY] = true;

    const dirs = [
      [-1, -2],
      [-2, -1],
      [-2, 1],
      [-1, 2],
      [1, -2],
      [2, -1],
      [2, 1],
      [1, 2],
    ];

    while (queue.length) {
      const [x, y, cnt] = queue.shift();
      if (x === endX && y === endY) {
        console.log(cnt);
        break;
      }

      for (let [dx, dy] of dirs) {
        const nextX = x + dx;
        const nextY = y + dy;
        const isValid =
          nextX >= 0 &&
          nextX < len &&
          nextY >= 0 &&
          nextY < len &&
          !visited[nextX][nextY];

        if (isValid) {
          queue.push([nextX, nextY, cnt + 1]);
          visited[nextX][nextY] = true;
        }
      }
    }
  }
};

solution(input);
