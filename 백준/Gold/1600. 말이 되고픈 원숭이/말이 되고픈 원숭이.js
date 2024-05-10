const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 나이트 이동방식으로 K번만 움직일 수 있고 그외에는 상하좌우로 움직인다
// 0,0 -> rowN-1, colN-1로 이동하는 최소횟수를 구해야된다
// 첫번째줄은 나이트로 움직일 수있는 횟수 K
// 두번째줄은 colN, rowN이 주어지고 그다음줄 부터는 그리드가 주어진다
// 0,1로 주어지고 1인곳은 장애물이라 갈 수 없다
// 만약 도착점까지 갈 수 없다면 -1을 출력한다
// bfs로 탐색하는데 방문지점을 체킹하면서 [x,y,cnt,horseRes]로 한다
// 만약 horseRes가 0보다크면 큐에 나이트 움직을 넣어준다
const solution = (input) => {
  const resMove = Number(input[0]);
  const [colN, rowN] = input[1].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 2; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const knightDirs = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [1, -2],
    [2, -1],
  ];

  const queue = [[0, 0, 0, resMove]];
  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(0));

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      visited[i][j] = Array(resMove + 1).fill(Infinity);
    }
  }

  for (let i = 0; i <= resMove; i++) {
    visited[0][0][i] = 0;
  }

  while (queue.length) {
    const [x, y, cnt, knightRes] = queue.shift();

    if (x === rowN - 1 && y === colN - 1) {
      break;
    }

    if (knightRes > 0) {
      for (const [dx, dy] of knightDirs) {
        const nextX = x + dx;
        const nextY = y + dy;
        const isValid =
          nextX >= 0 &&
          nextX < rowN &&
          nextY >= 0 &&
          nextY < colN &&
          grid[nextX][nextY] === 0 &&
          visited[nextX][nextY][knightRes - 1] > cnt + 1;

        if (!isValid) continue;
        queue.push([nextX, nextY, cnt + 1, knightRes - 1]);
        visited[nextX][nextY][knightRes - 1] = cnt + 1;
      }
    }

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        grid[nextX][nextY] === 0 &&
        visited[nextX][nextY][knightRes] > cnt + 1;

      if (!isValid) continue;
      queue.push([nextX, nextY, cnt + 1, knightRes]);
      visited[nextX][nextY][knightRes] = cnt + 1;
    }
  }

  // console.log(visited);
  const answer = Math.min(...visited[rowN - 1][colN - 1]);
  console.log(answer !== Infinity ? answer : -1);
};

solution(input);
