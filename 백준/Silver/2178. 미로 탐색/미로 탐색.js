const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");


// 첫번째줄에는 세로 가로 줄 수가 주어진다
// 두번째줄부터는 해당 1,0이 띄어쓰기 없이 주어진다'
// 총 몇칸을 지나야 끝 지점까지 도달할 수 있는지 구해야된다.
// bfs로 상하좌우 탐색을 하고 안가본 지점이면 해당 지점에 현재값 +1을 해주면 된다
// 입력은 항상 끝지점까지 도달할 수 있다는 전제다
const solution = (input) => {
  const [row, col] = input[0].split(" ").map((v) => Number(v));
  const miro = [];
  for (let i = 1; i < input.length; i++) {
    const row = input[i].split("").map((v) => Number(v));
    miro.push(row);
  }

  const visited = Array(row)
    .fill(0)
    .map((v) => Array(col).fill(false));

  const distance = Array(row)
    .fill(0)
    .map((v) => Array(col).fill(0));

  distance[0][0] = 1;
  visited[0][0] = true;

  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue = [[0, 0]];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let [dx, dy] of dir) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid = nextX >= 0 && nextX < row && nextY >= 0 && nextY < col;

      if (isValid && !visited[nextX][nextY] && miro[nextX][nextY] === 1) {
        visited[nextX][nextY] = true;
        distance[nextX][nextY] = distance[x][y] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }

  console.log(distance[row - 1][col - 1]);
};

solution(input);
