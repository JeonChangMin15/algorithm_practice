const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 rowN, colN이 주어진다
// 직전에 움직였던 방향으로 움직일 수 없다
// [rowN][colN][dir]  = Maht.min([rowN][col-1][dir] 다른거 + [rowN][colN])
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dist = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(Infinity));

  for (let i = 0; i < colN; i++) {
    dist[0][i] = grid[0][i];
  }

  const queue = [];
  const dirs = [-1, 0, 1];

  for (let i = 0; i < colN; i++) {
    for (const dy of dirs) {
      queue.push([0, i, grid[0][i], dy]);
    }
  }

  while (queue.length) {
    const [x, y, curDist, d] = queue.shift();

    for (const dy of dirs) {
      if (y + dy >= 0 && y + dy < colN && dy !== d && x < rowN - 1) {
        queue.push([x + 1, y + dy, curDist + grid[x + 1][y + dy], dy]);
        dist[x + 1][y + dy] = Math.min(
          dist[x + 1][y + dy],
          curDist + grid[x + 1][y + dy]
        );
      }
    }
  }

  console.log(Math.min(...dist[rowN - 1]));
};

solution(input);
