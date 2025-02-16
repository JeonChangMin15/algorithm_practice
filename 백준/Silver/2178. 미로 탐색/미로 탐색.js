const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

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

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue = [[0, 0, 0]];

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