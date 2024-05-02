const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에는 테스트케이스가 주어진다
// 3n+1번째줄에는 colN이 주어지고
// 3n+2, 3n+3번째줄에는 각 스티커의 점수들이 주어진다
// 2XN 형태의 스티커에서 하나를 선택하면 해당 스티커 기준으로 상하좌우는
// 선택을 못한다. 가장 높은 점수를 출력
// dp로 푸는거같다
// dp[0][i] = dp[0][i] + Math.max(dp[1][i-1], dp[1][i-2])
// dp[1][i] = dp[1][i] + Math.amx(dp[0][i-1], dp[1][i-2])

const solution = (input) => {
  const n = Number(input[0]);

  for (let i = 0; i < n; i++) {
    const colN = Number(input[3 * i + 1]);
    const grid = [];
    grid.push(input[3 * i + 2].split(" ").map((v) => Number(v)));
    grid.push(input[3 * i + 3].split(" ").map((v) => Number(v)));

    for (let j = 1; j < colN; j++) {
      if (j === 1) {
        grid[0][j] += grid[1][0];
        grid[1][j] += grid[0][0];
        continue;
      }

      grid[0][j] += Math.max(grid[1][j - 1], grid[1][j - 2]);
      grid[1][j] += Math.max(grid[0][j - 1], grid[0][j - 2]);
    }

    console.log(Math.max(grid[0][colN - 1], grid[1][colN - 1]));
  }
};

solution(input);
