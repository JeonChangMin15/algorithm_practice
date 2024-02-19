const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 체스판의 크기가 주어진다
// 둘째줄에 r1, c1, r2, c2가 주저인다
// r1,c1에서 r2,c2로 이동하는 초소 이동회수를 구한다 행과 열은 0부터 시작
// 이동할 수 없다면 -1을 출력
// (-2, -1), (-2, 1), (0, -2), (0, 2), (2, -1), (2, 1)
// bfs로 풀이하면된다. visited로 마킹하고 갈 수 있는곳만 가면된다
const solution = (input) => {
  const n = Number(input[0]);
  const [startX, startY, endX, endY] = input[1]
    .split(" ")
    .map((v) => Number(v));

  const queue = [[startX, startY, 0]];
  const dirs = [
    [-2, -1],
    [-2, 1],
    [0, -2],
    [0, 2],
    [2, -1],
    [2, 1],
  ];

  const visited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));

  visited[startX][startY] = true;

  let answer = 0;

  while (queue.length) {
    const [x, y, cnt] = queue.shift();
    if (x === endX && y === endY) {
      answer = cnt;
      break;
    }

    for (let [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < n &&
        !visited[nextX][nextY];

      if (isValid) {
        queue.push([nextX, nextY, cnt + 1]);
        visited[nextX][nextY] = true;
      }
    }
  }

  console.log(answer !== 0 ? answer : -1);
};

solution(input);
