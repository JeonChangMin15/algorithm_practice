
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, colN이 주어지고
// 두번째줄에 그리드가 간격없이 주어진다
// 0,0에서 rowN-1, colN-1까지 최소거리를 구해라
// 항상 도착할 수 있는 그리드만 주어진다
// 시작점 도착점까지 다 포함된다.
// bfs로 풀면된다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  const dist = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(Infinity));

  dist[0][0] = 1;

  const queue = [[0, 0, 1]];

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    const [x, y, curDist] = queue.shift();

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;

      const isValid =
        nextX >= 0 &&
        nextX < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        curDist + 1 < dist[nextX][nextY] &&
        grid[nextX][nextY];

      if (isValid) {
        queue.push([nextX, nextY, curDist + 1]);
        dist[nextX][nextY] = curDist + 1;
      }
    }
  }

  console.log(dist[rowN - 1][colN - 1]);
};

solution(input);
