const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 조합 콤비네이션 문제 mCn m개중 n개를 뽑는 조합이다
// mCn = m-1Cn-1 + m-1Cn 점화식을 이용하는 문제다.
const solution = (input) => {
  const arr = [];

  const dp = Array(30)
    .fill(0)
    .map((_) => Array(30).fill(0));

  for (let i = 1; i < input.length; i++) {
    arr.push(input[i].split(" ").map((v) => Number(v)));
  }

  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (i === 0 || j === 0) continue;
      if (j === 1) {
        dp[i][j] = i;
      } else if (i === j) {
        dp[i][j] = 1;
      } else if (i > j) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      }
    }
  }

  for (let [m, n] of arr) {
    console.log(dp[n][m]);
  }
};

solution(input);
