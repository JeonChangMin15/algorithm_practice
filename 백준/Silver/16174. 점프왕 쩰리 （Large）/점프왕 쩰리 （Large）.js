const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 서 있는 지점의 숫자만큼 오른쪽 아래로 움직일 수 있다
// 오른쪽 맨 아래 도착하면 HaruHaru 실패하면 Hing
// bfs로 돌면서 visited로 마킹해야된다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const visited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));

  visited[0][0] = true;
  const queue = [[0, 0, grid[0][0]]];
  let answer = "Hing";

  while (queue.length) {
    const [x, y, jump] = queue.shift();
    if (grid[x][y] === -1) {
      answer = "HaruHaru";
      break;
    }

    const nextJump = [
      [0, jump],
      [jump, 0],
    ];

    for (const [dx, dy] of nextJump) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < n &&
        !visited[nextX][nextY];

      if (isValid) {
        queue.push([nextX, nextY, grid[nextX][nextY]]);
        visited[nextX][nextY] = true;
      }
    }
  }

  console.log(answer);
};

solution(input);
