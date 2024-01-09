const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에는 n(세로), m(가로) 길이가 주어진다
// 0은 갈 수없는 땅이고 1은 갈 수 있고 2는 목표지점. 2는 단 하나만 주어진다
// 목표지점에 각 위치가 얼마나 떨어져있는지 출력을한다.
// 원래 0인곳은 0으로 표시하고 1인데 갈 수 없다면 -1을 출력한다
// 먼저 이중 for문으로 2인 지점을 찾는다
// 거기서 bfs로 상하좌우 탐색을 하면서 거리를 집어넣는다
// 그 이후에 지도에서 1인데 거리가 0인곳은 -1로 교체하면된다.
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }
  const queue = [];

  const distanceGrid = Array(rowN)
    .fill(0)
    .map((e) => Array(colN).fill(0));

  const visited = Array(rowN)
    .fill(0)
    .map((e) => Array(colN).fill(false));

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
        visited[i][j] = true;
      }
    }
  }

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    for (let [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;

      const isValid =
        nextX >= 0 &&
        nextX < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        grid[nextX][nextY] === 1 &&
        !visited[nextX][nextY];

      if (isValid) {
        queue.push([nextX, nextY, dist + 1]);
        distanceGrid[nextX][nextY] = dist + 1;
        visited[nextX][nextY] = true;
      }
    }
  }

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 1 && distanceGrid[i][j] === 0) {
        distanceGrid[i][j] = -1;
      }
    }
  }

  for (let i = 0; i < rowN; i++) {
    console.log(distanceGrid[i].join(" "));
  }
};

solution(input);
