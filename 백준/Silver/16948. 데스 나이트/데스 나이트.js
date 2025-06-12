const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));


const solution = (input) => {
  const n = Number(input[0]);
  const [x1, y1, x2, y2] = input[1].split(" ").map((v) => Number(v));

  const grid = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(Infinity));

  grid[x1][y1] = 0;

  const queue = [[x1, y1, 0]];
  const dirs = [
    [-2, -1],
    [-2, 1],
    [0, -2],
    [0, 2],
    [2, -1],
    [2, 1],
  ];
  while (queue.length) {
    const [x, y, cnt] = queue.shift();

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < n &&
        cnt + 1 < grid[nextX][nextY];

      if (isValid) {
        queue.push([nextX, nextY, cnt + 1]);
        grid[nextX][nextY] = cnt + 1;
      }
    }
  }

  console.log(grid[x2][y2] !== Infinity ? grid[x2][y2] : -1);
};

solution(input);
