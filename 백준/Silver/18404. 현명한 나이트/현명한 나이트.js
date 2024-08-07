const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// bfs로 풀이하면된다
// 첫째줄에 rowN, colN이 주어지고 둘째줄에 나이트 초기 위치가 주어진다
// 그다음줄부터 colN만큼 상대편 말 위치를 주어진다
// 상대말 잡기 위한 최소 이동수를 공백 기준으로 한줄에 줄력한다
// 위치는 -1씩해서 저장하고 마킹하면서 간다
const solution = (input) => {
  const [n, chessN] = input[0].split(" ").map((v) => Number(v));
  const [startX, startY] = input[1].split(" ").map((v) => Number(v));
  const positions = [];

  for (let i = 2; i < 2 + chessN; i++) {
    const [x, y] = input[i].split(" ").map((v) => Number(v));
    positions.push([x - 1, y - 1]);
  }

  const visited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));

  const dist = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(0));

  const queue = [[startX - 1, startY - 1, 0]];
  visited[startX - 1][startY - 1] = true;
  const dirs = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  while (queue.length) {
    const [x, y, cnt] = queue.shift();

    for (const [dx, dy] of dirs) {
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
        dist[nextX][nextY] = cnt + 1;
        visited[nextX][nextY] = true;
      }
    }
  }

  const answer = [];

  for (const [x, y] of positions) {
    answer.push(dist[x][y]);
  }
  console.log(answer.join(" "));
};

solution(input);
