const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번재줄에 rowN, colN이 주어진다
// 그다음줄부터 문자들이 주어지는데 #:벽, .:공간
// J: 지훈이의 미로에서 초기 위치, F:불이난 공간
// J는 입력에서 하나만 주어진다. 미로를 탈출 할 수 있는 경우 가장 빠른 탈출 시간을 출력
// 불가능하면 IMPOSSIBLE 출력
// 먼저 지훈이의 좌표와 시간을 넣고, 불의 좌표를 넣는다
// 그리고나서 bfs로 현재 좌표가 J면 상하좌우 탐색을 해서 .인 부분에만 J를 넣고 큐에넣고
// 그다음 현재 좌표가 불이면 다음좌표가 J나 #이면 넣고 그 좌표를 큐에 넣는다
// 그러다 현재 J의 좌표가 row===0, row===rowN-1, col === 0, col ===colN-1이면
// 현재 시간에서 1을 더한 값을 answer로 하고 break를 해주면될거같다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(""));
  }

  const queue = [];

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === "J") {
        queue.push([i, j, 0]);
      }
    }
  }

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === "F") {
        queue.push([i, j, 0]);
      }
    }
  }

  let answer = "IMPOSSIBLE";
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    const [x, y, time] = queue.shift();

    if (
      grid[x][y] === "J" &&
      (x === 0 || x === rowN - 1 || y === 0 || y === colN - 1)
    ) {
      answer = time + 1;
      break;
    }

    if (grid[x][y] === "J") {
      for (let [dx, dy] of dirs) {
        const nextX = x + dx;
        const nextY = y + dy;
        const isValid =
          nextX >= 0 &&
          nextX < rowN &&
          nextY >= 0 &&
          nextY < colN &&
          grid[nextX][nextY] === ".";

        if (isValid) {
          queue.push([nextX, nextY, time + 1]);
          grid[nextX][nextY] = "J";
        }
      }
    }

    if (grid[x][y] === "F") {
      for (let [dx, dy] of dirs) {
        const nextX = x + dx;
        const nextY = y + dy;
        const isValid =
          nextX >= 0 &&
          nextX < rowN &&
          nextY >= 0 &&
          nextY < colN &&
          (grid[nextX][nextY] === "." || grid[nextX][nextY] === "J");

        if (isValid) {
          queue.push([nextX, nextY, time + 1]);
          grid[nextX][nextY] = "F";
        }
      }
    }
  }

  console.log(answer);
};

solution(input);
