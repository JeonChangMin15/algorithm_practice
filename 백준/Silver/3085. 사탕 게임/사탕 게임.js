const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// n x n 정사각형이 주어지고 첫째줄에 n 둘째줄부터는 알파벳 띄어쓰기 없음
// 사탕의 색이 다른 인접한 두 칸을 고른다. 서로 교환한다. 모두 같은색으로 이루어져있는
// 가장 긴 연속 부분을 고른다. 사탕의 최대갯수
// 해당 지점에 아래 오른쪽을 비교한다. 다르면 교체한뒤에 이중 for문으로 아래 오른쪽으로
// 연속된 알파벳이 몇개가 있는 탐색을 하면될거같다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(""));
  }

  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const cur = grid[i][j];

      if (j < n - 1 && cur !== grid[i][j + 1]) {
        const right = grid[i][j + 1];

        grid[i][j] = right;
        grid[i][j + 1] = cur;

        for (let row = 0; row < n; row++) {
          for (let col = 0; col < n; col++) {
            let rightCnt = 0;
            let downCnt = 0;
            const val = grid[row][col];

            for (let x = row; x < n; x++) {
              if (val !== grid[x][col]) break;
              downCnt += 1;
            }

            for (let y = col; y < n; y++) {
              if (val !== grid[row][y]) break;
              rightCnt += 1;
            }

            answer = Math.max(answer, rightCnt, downCnt);
          }
        }

        grid[i][j] = cur;
        grid[i][j + 1] = right;
      }

      if (i < n - 1 && cur !== grid[i + 1][j]) {
        const down = grid[i + 1][j];

        grid[i][j] = down;
        grid[i + 1][j] = cur;

        for (let row = 0; row < n; row++) {
          for (let col = 0; col < n; col++) {
            let rightCnt = 0;
            let downCnt = 0;
            const val = grid[row][col];

            for (let x = row; x < n; x++) {
              if (val !== grid[x][col]) break;
              downCnt += 1;
            }

            for (let y = col; y < n; y++) {
              if (val !== grid[row][y]) break;
              rightCnt += 1;
            }

            answer = Math.max(answer, rightCnt, downCnt);
          }
        }

        grid[i][j] = cur;
        grid[i + 1][j] = down;
      }
    }
  }

  console.log(answer);
};

solution(input);
