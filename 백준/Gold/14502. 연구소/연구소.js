const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  const combination = [];
  const firstVirusPos = [];
  const firstWallPos = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 2) {
        firstVirusPos.push([i, j]);
      } else if (grid[i][j] === 1) {
        firstWallPos.push([i, j]);
      }
    }
  }

  for (let i = 0; i < rowN * colN; i++) {
    for (let j = 0; j < rowN * colN; j++) {
      for (let k = 0; k < rowN * colN; k++) {
        if (i !== j && j !== k && i !== k) {
          combination.push([i, j, k]);
        }
      }
    }
  }

  let answer = 0;

  const bfs = () => {
    const queue = [...firstVirusPos];

    const dirs = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let [dx, dy] of dirs) {
        const nextX = x + dx;
        const nextY = y + dy;
        const isValid =
          nextX >= 0 &&
          nextX < rowN &&
          nextY >= 0 &&
          nextY < colN &&
          grid[nextX][nextY] === 0;

        if (isValid) {
          grid[nextX][nextY] = 2;
          queue.push([nextX, nextY]);
        }
      }
    }

    let area = 0;

    for (let i = 0; i < rowN; i++) {
      for (let j = 0; j < colN; j++) {
        if (grid[i][j] === 0) {
          area += 1;
        }
      }
    }

    answer = Math.max(area, answer);

    for (let i = 0; i < rowN; i++) {
      for (let j = 0; j < colN; j++) {
        grid[i][j] = 0;
      }
    }
  };

  for (let [pos1, pos2, pos3] of combination) {
    const [row1, col1] = [Math.floor(pos1 / colN), pos1 % colN];
    const [row2, col2] = [Math.floor(pos2 / colN), pos2 % colN];
    const [row3, col3] = [Math.floor(pos3 / colN), pos3 % colN];

    if (
      grid[row1][col1] === 0 &&
      grid[row2][col2] === 0 &&
      grid[row3][col3] === 0
    ) {
      grid[row1][col1] = 1;
      grid[row2][col2] = 1;
      grid[row3][col3] = 1;
      bfs();
      firstVirusPos.forEach((pos) => {
        grid[pos[0]][pos[1]] = 2;
      });
      firstWallPos.forEach((pos) => {
        grid[pos[0]][pos[1]] = 1;
      });
    }
  }

  console.log(answer);
};

solution(input);
