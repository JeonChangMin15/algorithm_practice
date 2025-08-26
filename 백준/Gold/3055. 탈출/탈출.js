const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, colN이 주어진다
// 두번째줄부터 그리드가 주어지고 D(비버), S(고슴 도치)
// .(비이었음), *(물 지역), X(돌) 이루어져있다
// 분마다 고슴도치는 상하좌우, 물도 가능. 돌은 통과 못한다
// 물은 비버의 소굴은 이동 못한다.
// 고슴 도치가 비버의 굴로 이동하기 위한 최소시간을 구해라
// 이동 못하면 KAKTUS 출력
// 큐에 먼저 물 좌표를 넣어주고 [x,y,0, 'water']
// 고슴도치를 마지막에 넣어준다. 그리고나서 물은 다음지역이 ., S면 간다
// 고슴도치는 다음지역 빈 공간이거나, D면 간다
// 만약 현재 위차가 D면 time으로 바꾸고 break
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(""));
  }

  const queue = [];
  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === "*") {
        queue.push([i, j, 0, "water"]);
      }
    }
  }

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === "S") {
        queue.push([i, j, 0, "고슴도치"]);
        visited[i][j] = true;
      }
    }
  }

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let answer = "KAKTUS";

  while (queue.length) {
    const [x, y, time, type] = queue.shift();

    if (grid[x][y] === "D" && type === "고슴도치") {
      answer = time;
      break;
    }

    if (type === "water") {
      for (const [dx, dy] of dirs) {
        const nextX = x + dx;
        const nextY = y + dy;
        const isValid =
          nextX >= 0 &&
          nextX < rowN &&
          nextY >= 0 &&
          nextY < colN &&
          (grid[nextX][nextY] === "." || grid[nextX][nextY] === "S");

        if (isValid) {
          queue.push([nextX, nextY, time + 1, "water"]);
          grid[nextX][nextY] = "*";
        }
      }
    }

    if (type === "고슴도치") {
      for (const [dx, dy] of dirs) {
        const nextX = x + dx;
        const nextY = y + dy;
        const isValid =
          nextX >= 0 &&
          nextX < rowN &&
          nextY >= 0 &&
          nextY < colN &&
          !visited[nextX][nextY] &&
          (grid[nextX][nextY] === "." || grid[nextX][nextY] === "D");

        if (isValid) {
          queue.push([nextX, nextY, time + 1, "고슴도치"]);
          visited[nextX][nextY] = true;
        }
      }
    }
  }

  console.log(answer);
};

solution(input);
