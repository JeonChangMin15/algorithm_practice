const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 체스판 크기와 말의 수
// 두번째줄에 시작점
// 그다음줄부터 말의 위치 정보가 주어진다
// grid로 무한으로 셋팅한 후 bfs로 탐색하면서 지점을 탐색하면된다
// 좌표 주어지는 좌표는 -1씩 차감
const solution = (input) => {
  const [sizeN, caseN] = input[0].split(" ").map((v) => Number(v));
  const [startX, startY] = input[1].split(" ").map((v) => Number(v));
  const grid = Array(sizeN)
    .fill(0)
    .map((v) => Array(sizeN).fill(Infinity));

  const arr = [];

  for (let i = 2; i < 2 + caseN; i++) {
    const [x, y] = input[i].split(" ").map((v) => Number(v));
    arr.push([x - 1, y - 1]);
  }

  grid[startX - 1][startY - 1] = 0;
  const queue = [[startX - 1, startY - 1, 0]];
  const dirs = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  while (queue.length) {
    const [x, y, d] = queue.shift();

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < sizeN &&
        nextY >= 0 &&
        nextY < sizeN &&
        d + 1 < grid[nextX][nextY];

      if (isValid) {
        queue.push([nextX, nextY, d + 1]);
        grid[nextX][nextY] = d + 1;
      }
    }
  }

  const answer = [];
  for (const [x, y] of arr) {
    answer.push(grid[x][y]);
  }

  console.log(answer.join(" "));
};

solution(input);
