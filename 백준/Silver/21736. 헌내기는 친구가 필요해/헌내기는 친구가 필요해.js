const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 rowN, colN이 주어진다
// 둘째줄부터 빈칸없이 그리드가 주어진다
// O는 빈공간, X는 벽, I는 도연, P는 사람
// I는 단하나고 I의 좌표에서 상하좌우를 탐색하면서 bfs탐색을 하면된다
// 만날 수 있는 사람을 수를 출력하고 만약 0이면 TT를 출력한다.
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(""));
  }
  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));
  const queue = [];

  let startX;
  let startY;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === "I") {
        startX = i;
        startY = j;
      }
    }
  }

  queue.push([startX, startY]);
  visited[startX][startY] = true;

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  let answer = 0;

  while (queue.length) {
    const [x, y] = queue.shift();
    if (grid[x][y] === "P") {
      answer += 1;
    }

    for (let [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextX >= 0 &&
        nextX < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        grid[nextX][nextY] !== "X" &&
        !visited[nextX][nextY];

      if (isValid) {
        queue.push([nextX, nextY]);
        visited[nextX][nextY] = true;
      }
    }
  }

  console.log(answer > 0 ? answer : "TT");
};

solution(input);
