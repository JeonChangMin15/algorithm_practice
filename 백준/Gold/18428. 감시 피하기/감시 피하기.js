const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// NxN격자가 주어지고 첫째줄에 N값, 둘째줄부터는 격자가 주어진다
// 학생은 S, 선생은 T, 아무것도 없으면 X
// 정확히 3개의 장애물을 설치해서 모든 학생들이 감시를 피할 수 있는지 출력
// 삼중 for문으로 3곳이 전부다 X면 장애물 설치
// 그 이후에 4방향을 전부 다 탐색을해서 한번이라도 학생을 발견하면 Pass
// 모든 선생들이 다 발견을 못하면 YES로 바꾸면 될거같다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" "));
  }

  const tPosition = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "T") {
        tPosition.push([i, j]);
      }
    }
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let answer = "NO";

  for (let i = 0; i < n * n; i++) {
    for (let j = 0; j < n * n; j++) {
      for (let k = 0; k < n * n; k++) {
        const isDiff = i !== j && i !== k && j !== k;
        if (!isDiff) continue;
        const firstX = parseInt(i / n);
        const firstY = i % n;
        const secondX = parseInt(j / n);
        const secondY = j % n;
        const thirdX = parseInt(k / n);
        const thirdY = k % n;
        const isValid =
          grid[firstX][firstY] === "X" &&
          grid[secondX][secondY] === "X" &&
          grid[thirdX][thirdY] === "X";

        if (!isValid) continue;
        grid[firstX][firstY] = "O";
        grid[secondX][secondY] = "O";
        grid[thirdX][thirdY] = "O";

        let findStudent = 0;
        for (const [tx, ty] of tPosition) {
          for (const [dx, dy] of dirs) {
            let x = tx + dx;
            let y = ty + dy;

            while (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] !== "O") {
              if (grid[x][y] === "S") findStudent += 1;
              x += dx;
              y += dy;
            }
          }
        }

        if (findStudent === 0) {
          answer = "YES";
        }

        grid[firstX][firstY] = "X";
        grid[secondX][secondY] = "X";
        grid[thirdX][thirdY] = "X";
      }
    }
  }

  console.log(answer);
};

solution(input);
