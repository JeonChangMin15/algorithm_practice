const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 rowN, colN이 주어진다
// 0은 갈 수없고 1은 갈 수있고 2는 목표 지지점
// 각 지점에서 목표지점까지 거리를 출력 원래 갈 수 있는데 못가면 -1 출력
// bfs로 큐에 넣고 상하좌우로 그리드가 1이고 방문안한 지점이면 간다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const queue = [];
  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  const dist = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(0));

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
        visited[i][j] = true;
      }
    }
  }

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
        !visited[nextX][nextY] &&
        grid[nextX][nextY] === 1;

      if (isValid) {
        queue.push([nextX, nextY, d + 1]);
        dist[nextX][nextY] = d + 1;
        visited[nextX][nextY] = true;
      }
    }
  }

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 1 && dist[i][j] === 0) {
        dist[i][j] = -1;
      }
    }
  }
  const answer = dist.map((v) => v.join(" ")).join("\n");
  console.log(answer);
};

solution(input);
