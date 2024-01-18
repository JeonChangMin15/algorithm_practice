const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [N, L, R] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let isOpen = true;

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  let day = 0;

  while (isOpen) {
    let visited = Array(N)
      .fill(0)
      .map((e) => Array(N).fill(false));

    let cnt = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (visited[i][j]) continue;
        visited[i][j] = true;
        const queue = [[i, j]];
        const position = [[i, j]];

        while (queue.length) {
          const [x, y] = queue.shift();

          for (let [dx, dy] of dirs) {
            const nextX = x + dx;
            const nextY = y + dy;
            const isValid =
              nextX >= 0 &&
              nextX < N &&
              nextY >= 0 &&
              nextY < N &&
              !visited[nextX][nextY];

            if (isValid) {
              const diff = Math.abs(grid[x][y] - grid[nextX][nextY]);
              if (diff >= L && diff <= R) {
                visited[nextX][nextY] = true;
                queue.push([nextX, nextY]);
                position.push([nextX, nextY]);
              }
            }
          }
        }

        if (position.length > 1) {
          cnt += 1;
          let sum = 0;
          position.forEach((pos) => (sum += grid[pos[0]][pos[1]]));
          position.forEach(
            (pos) => (grid[pos[0]][pos[1]] = Math.floor(sum / position.length))
          );
        }
      }
    }

    if (cnt < 1) isOpen = false;
    else {
      day += 1;
    }
  }

  console.log(day);
};

solution(input);
