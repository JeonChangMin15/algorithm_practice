const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 정사각형 그리드가 주어진다. 시작점은 0,0
// 이동 가능한 방향은 오른쪽과 아래 가장 오른쪽 아래칸에 도착하면 종료
// 한번에 이동할 수 있는 칸은 현재 밟고 있는 칸에 쓰여 있는 수 만큼이다
// 만약 끝까지 도달하면 HaruHaru 도달 못한다면 Hing
// 첫째줄에 n 그다음줄 부터는 그리드가 주어진다.
// bfs로 다음 칸에 갈 수 있으면 넣고 visited로 찍어준다.
// 만약 현재 포지션이 -1이면 하루하루 출력하고 return, 안되면 Hing 출력
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];
  const visited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const queue = [[0, 0, grid[0][0]]];

  while (queue.length) {
    const [x, y, jump] = queue.shift();
    if (jump === -1) {
      console.log("HaruHaru");
      return;
    }

    const dirs = [
      [0, jump],
      [jump, 0],
    ];

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
        queue.push([nextX, nextY, grid[nextX][nextY]]);
        visited[nextX][nextY] = true;
      }
    }
  }

  console.log("Hing");
};

solution(input);
