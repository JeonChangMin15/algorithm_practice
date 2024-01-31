const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [rowN, colN, cnt] = input[0].split(" ").map((v) => Number(v));
  let grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let tryCnt = 0;

  while (tryCnt < cnt) {
    let newGrid = Array(rowN)
      .fill(0)
      .map((v) => Array(colN).fill(0));

    const visited = Array(rowN)
      .fill(0)
      .map((v) => Array(colN).fill(false));

    let val = 0;
    let dir = "down";
    let row = 0;
    let col = 0;

    while (val < rowN * colN) {
      if (dir === "down") {
        if (row !== rowN - 1 && !visited[row + 1][col]) {
          newGrid[row + 1][col] = grid[row][col];
          visited[row][col] = true;
          row += 1;
        } else {
          dir = "right";
          newGrid[row][col + 1] = grid[row][col];
          visited[row][col] = true;
          col += 1;
        }

        val++;
        continue;
      }

      if (dir === "right") {
        if (col !== colN - 1 && !visited[row][col + 1]) {
          newGrid[row][col + 1] = grid[row][col];
          visited[row][col] = true;
          col += 1;
        } else {
          dir = "up";
          newGrid[row - 1][col] = grid[row][col];
          visited[row][col] = true;
          row -= 1;
        }

        val++;
        continue;
      }

      if (dir === "up") {
        if (row !== 0 && !visited[row - 1][col]) {
          newGrid[row - 1][col] = grid[row][col];
          visited[row][col] = true;
          row -= 1;
        } else {
          dir = "left";
          newGrid[row][col - 1] = grid[row][col];
          visited[row][col] = true;
          col -= 1;
        }

        val++;
        continue;
      }

      if (dir === "left") {
        if (col !== 0 && !visited[row][col - 1]) {
          newGrid[row][col - 1] = grid[row][col];
          visited[row][col] = true;
          col -= 1;
        } else {
          dir = "down";
          visited[row][col] = true;
          newGrid[row][col - 1] = grid[row][col];
          row += 1;
        }

        val++;
        continue;
      }
    }

    grid = newGrid;
    tryCnt++;
  }

  for (let i = 0; i < rowN; i++) {
    console.log(grid[i].join(" "));
  }
};

solution(input);
