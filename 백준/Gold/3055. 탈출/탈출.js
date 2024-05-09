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

// 첫째줄에 rowN, colN이 주어진다
// 그다음줄부터  .은 비어있는곳, *은 물, X는 돌이 있다
// 시작점은 S, 비버의 굴은 D로 각각 하나씩만 있다
// 굴로 이동하기 위해 필요한 최소 시간을 구해야된다
// 매분 상하좌우로 이동할 수 있다. 물도 똑같이 확장이된다
// 물은 비어있는곳만 침투가능하다. 물이 찰 예정인 칸으로 이동이 안된다
// bfs로 탐색을하는데 먼저 물부터 탐색해서 큐에넣고 그다음에 시작점을 넣는다
// 물을 상하좌우로 탐색해서 전염시키고 그당므에 비어있는곳이면 S로 만든다
// 만약 도착안되면 KAKTUS를 출력한다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(""));
  }

  const queue = [];
  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));
  let endX;
  let endY;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === "S") {
        queue.push([i, j, 0]);
        visited[i][j] = true;
      }
      if (grid[i][j] === "D") {
        endX = i;
        endY = j;
      }
    }
  }

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === "*") {
        queue.push([i, j, 0]);
        visited[i][j] = true;
      }
    }
  }

  let answer = "KAKTUS";
  let isEnd = false;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0 && !isEnd) {
    const [x, y, cnt] = queue.shift();

    if (x === endX && y === endY) {
      answer = cnt;
      break;
    }

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid = nextX >= 0 && nextX < rowN && nextY >= 0 && nextY < colN;
      if (!isValid) continue;

      if (grid[x][y] === "S") {
        if (grid[nextX][nextY] === ".") {
          queue.push([nextX, nextY, cnt + 1]);
          grid[nextX][nextY] = "S";
        }

        if (grid[nextX][nextY] === "D") {
          queue.push([nextX, nextY, cnt + 1]);
          answer = cnt + 1;
          isEnd = true;
        }
      }

      if (grid[x][y] === "*") {
        if (grid[nextX][nextY] === "." || grid[nextX][nextY] === "S") {
          queue.push([nextX, nextY, cnt + 1]);
          grid[nextX][nextY] = "*";
        }
      }
    }
  }

  console.log(answer);
};

solution(input);
