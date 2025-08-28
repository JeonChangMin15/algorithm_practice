const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄 그리드의 크기, 바이러스의 수가 주어진다
// 두번째줄부터 그리드가 주어지고 0 빈칸, 1 벽, 2 바이러스 위치가능
// 먼저 바이러스 위치를 담아둔 다음에 중복없는 조합으로 바이러스 위치 조합을 만든다
// 그 이후에 위치를 가지고 bfs로 visited를 마킹하면서 찍고
// 0,2 인곳에서 전부 다 감염하면 해당 시간 한곳이라도 안되면 -1 출력
const solution = (input) => {
  const [n, virusN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }
  const virusPosition = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        virusPosition.push([i, j]);
      }
    }
  }

  const bfs = (vPositions) => {
    const queue = [];
    const visited = Array(n)
      .fill(0)
      .map((v) => Array(n).fill(false));

    const dirs = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (const index of vPositions) {
      const [x, y] = virusPosition[index];
      queue.push([x, y, 0]);
      visited[x][y] = true;
    }

    let answer = 0;
    let isValid = true;

    while (queue.length) {
      const [x, y, time] = queue.shift();
      answer = Math.max(answer, time);

      for (const [dx, dy] of dirs) {
        const nextX = x + dx;
        const nextY = y + dy;
        const isValid =
          nextX >= 0 &&
          nextX < n &&
          nextY >= 0 &&
          nextY < n &&
          !visited[nextX][nextY] &&
          grid[nextX][nextY] !== 1;

        if (isValid) {
          queue.push([nextX, nextY, time + 1]);
          visited[nextX][nextY] = true;
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] !== 1 && !visited[i][j]) {
          isValid = false;
        }
      }
    }

    return [isValid, answer];
  };

  let answer = Infinity;

  const backTrack = (arr, start) => {
    if (arr.length === virusN) {
      const [isValid, time] = bfs(arr);
      if (isValid) {
        answer = Math.min(answer, time);
      }
      return;
    }

    for (let i = start; i < virusPosition.length; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTrack(arr, i + 1);
      arr.pop();
    }
  };

  backTrack([], 0);

  console.log(answer !== Infinity ? answer : -1);
};

solution(input);
