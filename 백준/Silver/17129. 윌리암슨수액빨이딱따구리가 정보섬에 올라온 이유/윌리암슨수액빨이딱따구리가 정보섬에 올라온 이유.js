const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, colN이 주어진다
// 0은 빈칸 1은 장애물, 2는 시작점 3,4,5는 음식이다
// 음식까지 도달이 가능하면 최단거리를 출력 TAK을 먼저 출력
// 만약 도달이 불가능하면 NIE를 출력한다
// 먼저 이중 for문으로 시작점을 큐에 넣고 3,4,5면 break하고
// visited로 마킹하면서 가면된다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  const queue = [];
  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
        visited[i][j] = true;
      }
    }
  }

  const fruit = [3, 4, 5];
  let isReach = false;
  let minDist = Infinity;

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (fruit.includes(grid[x][y])) {
      isReach = true;
      minDist = dist;
      break;
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

  if (isReach) {
    console.log("TAK");
    console.log(minDist);
  } else {
    console.log("NIE");
  }
};

solution(input);
