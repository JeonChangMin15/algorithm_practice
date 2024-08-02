// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.replace(/\r/, ""));

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에는 rowN, colN이 주어진다
// 2번 위치에서 시작하고 345 음식을 먼저 찾아야한다
// 음식까지의 최단거리를 출력하면 된다
// 1만 아니면 갈 수 있고 bfs로 마킹하면서 해결하면 되는 문제다
// TAK출력 안되면 NIE 출력하면된다.
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  const queue = [];

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  const food = [3, 4, 5];

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (food.includes(grid[x][y])) {
      console.log("TAK");
      console.log(dist);
      return;
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
        queue.push([nextX, nextY, dist + 1]);
        visited[nextX][nextY] = true;
      }
    }
  }

  console.log("NIE");
};

solution(input);
