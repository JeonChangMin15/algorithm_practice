const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 rowN, colN이 주어진다
// 두번재줄부터 그리드가 주어진다
// 빙산의 높이가 해당 칸에 동서남북 네 방향으로 붙어있는 0의 개수만큼 줄어든다
// 0보다 더 줄어들지는 않는다 두 덩어리 이상으로 분리되는 최초의 시간을 구한다
// 만약 전부 녹을때까지 분리안되면 0을 출력
// 먼저 이중 for문으로 해당 그리드가 0이면 상하좌우 탐색해서 0보다 큰 지점이 있으면
// 해당 좌표를 저장한다 그리고나서 해당 좌표들을 -1씩해준다
// 그리고나서 시간 +1을 해주고 dfs로 영역의 수를 탐색하는 방식으로 하면된다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let day = 0;
  let isValid = false;
  let isContinue = true;

  const dfs = (x, y, visited) => {
    if (
      x < 0 ||
      x >= rowN ||
      y < 0 ||
      y >= colN ||
      visited[x][y] ||
      grid[x][y] === 0
    )
      return;

    visited[x][y] = true;

    dfs(x - 1, y, visited);
    dfs(x + 1, y, visited);
    dfs(x, y - 1, visited);
    dfs(x, y + 1, visited);
  };

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (isContinue) {
    const visited = Array(rowN)
      .fill(0)
      .map((v) => Array(colN).fill(false));

    let area = 0;
    const coordinates = [];

    for (let i = 0; i < rowN; i++) {
      for (let j = 0; j < colN; j++) {
        if (grid[i][j] === 0 || visited[i][j]) continue;
        dfs(i, j, visited);
        area += 1;
      }
    }

    if (area > 1) {
      isValid = true;
      break;
    }
    if (area === 0) {
      isValid = false;
      break;
    }

    for (let i = 0; i < rowN; i++) {
      for (let j = 0; j < colN; j++) {
        if (grid[i][j] > 0) continue;
        for (const [dx, dy] of dirs) {
          const nextX = i + dx;
          const nextY = j + dy;
          const isValid =
            nextX >= 0 &&
            nextX < rowN &&
            nextY >= 0 &&
            nextY < colN &&
            grid[nextX][nextY] > 0;

          if (isValid) {
            coordinates.push([nextX, nextY]);
          }
        }
      }
    }

    for (const [x, y] of coordinates) {
      if (grid[x][y] > 0) {
        grid[x][y] -= 1;
      }
    }

    day += 1;
  }

  console.log(isValid ? day : 0);
};

solution(input);
