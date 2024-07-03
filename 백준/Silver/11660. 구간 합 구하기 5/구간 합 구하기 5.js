const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째 줄에 그리드 크기N, 횟수 M이 주어진다
// 1부터 N까지는 그리드가 주어지고 N+1부터는 x1,y1,x2,y2가 주어진다
// 구간별 합을 구해라 dp로 풀면되는 문제다
// 일단 0,0부터 각 지점까지의 합을 구해야된다
// dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1]
// 그리고 구간별 합은
// dp[endX][endY] - dp[startX-1][endY] - dp[endX][startY-1] + dp[startX-1][startY-1]
const solution = (input) => {
  const [n, k] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  const testCases = [];

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  for (let i = n + 1; i < input.length; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map((v) => Number(v));
    testCases.push([x1 - 1, y1 - 1, x2 - 1, y2 - 1]);
  }

  const dp = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(0));

  dp[0][0] = grid[0][0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
        continue;
      }

      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
        continue;
      }

      dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + grid[i][j];
    }
  }

  const answer = [];

  for (const [startX, startY, endX, endY] of testCases) {
    let val = dp[endX][endY];

    if (startX >= 1) {
      val -= dp[startX - 1][endY];
    }
    if (startY >= 1) {
      val -= dp[endX][startY - 1];
    }
    if (startX >= 1 && startY >= 1) {
      val += dp[startX - 1][startY - 1];
    }

    answer.push(val);
  }

  console.log(answer.join("\n"));
};

solution(input);