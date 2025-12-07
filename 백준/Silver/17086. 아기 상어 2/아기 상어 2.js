const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rown, colN이 주어지고 나머지에 그리드가 주어진다
// 0은 빈칸 1은 아기상어. 상하좌우 대각선으로 이동이 가능하고
// 안전거리가 가장 큰 거리를 구해라
// 먼지 dist로 모든 값을 Infinty로 초기한 후 아기상어 좌표는 0으로 둔다
// 다음 거리가 d+1 가 작으면 이동한다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const distGrid = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(Infinity));

  const queue = [];

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j, 0]);
        distGrid[i][j] = 0;
      }
    }
  }

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 1],
    [-1, -1],
    [-1, 1],
  ];

  let answer = 0;
  while (queue.length) {
    const [x, y, d] = queue.shift();
    answer = Math.max(answer, d);

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        d + 1 < distGrid[nextX][nextY];

      if (isValid) {
        queue.push([nextX, nextY, d + 1]);
        distGrid[nextX][nextY] = d + 1;
      }
    }
  }

  console.log(answer);
};

solution(input);
