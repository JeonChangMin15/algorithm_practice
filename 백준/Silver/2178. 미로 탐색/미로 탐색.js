const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, colN이 주어진다
// 0,0 -> 끝지점까지 최소 거리를 구해라
// bfs로 상하좌우 탐색하면서 1이면서 최소거리이면 움직이면 된다
// 답은 +1하면된다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  const dist = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(Infinity));

  dist[0][0] = 0;

  const queue = [[0, 0, 0]];
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
        grid[nextX][nextY] === 1 &&
        d + 1 < dist[nextX][nextY];

      if (isValid) {
        queue.push([nextX, nextY, d + 1]);
        dist[nextX][nextY] = d + 1;
      }
    }
  }

  console.log(dist[rowN - 1][colN - 1] + 1);
};

solution(input);
