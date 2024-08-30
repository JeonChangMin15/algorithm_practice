const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫째줄에 rowN, colN이 주어지고 두번째 줄부터 grid가 주어진다
// 0은 원래 못가는 땅이고 1은 갈 수 있는 땅 2는 목표지점이다.
// bfs로 시작해서 1이면 가고 해당 지점을 현재 거리에서 +1로 업데이트한다
// 그렇게 한 다음에 dist에서 갈 수 있는데 0인곳은 -1로 마킹
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
    [1, 0],
    [-1, 0],
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
        !visited[nextX][nextY] &&
        grid[nextX][nextY] === 1;

      if (isValid) {
        queue.push([nextX, nextY, curDist + 1]);
        dist[nextX][nextY] = curDist + 1;
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

  for (let i = 0; i < rowN; i++) {
    console.log(dist[i].join(" "));
  }
};

solution(input);
