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

// nxn 바둑판 모양 흰방은 갈 수 있고 검은방은 못감
// 시작과 끝은 항상 흰방이다. 도착하기 위해서 최소한의 검은방을 흰방의 수를 구해야된다
// 만약 검은방을 안바꾸고 흰방으로 갈 수 있으면 0을 출력
// 첫줄에 n이주어지고 그다음줄부터 01 주어짐, 0은 검은방, 1은 흰방
// 각 방에 Infinity로 만들고 [x,y,openRoom]으로 bfs로 탐색하면서 다음지점보다 openRoom
// 이 작으면 가면된다. 그리고 갱신
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  const openRoom = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(Infinity));

  const queue = [[0, 0, 0]];
  openRoom[0][0] = 0;

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const [x, y, cnt] = queue.shift();

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid = nextX >= 0 && nextX < n && nextY >= 0 && nextY < n;
      if (!isValid) continue;

      if (grid[nextX][nextY] === 1 && cnt < openRoom[nextX][nextY]) {
        queue.push([nextX, nextY, cnt]);
        openRoom[nextX][nextY] = cnt;
      }

      if (grid[nextX][nextY] === 0 && cnt + 1 < openRoom[nextX][nextY]) {
        queue.push([nextX, nextY, cnt + 1]);
        openRoom[nextX][nextY] = cnt + 1;
      }
    }
  }

  console.log(openRoom[n - 1][n - 1]);
};

solution(input);
