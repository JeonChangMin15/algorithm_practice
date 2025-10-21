const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 3키로, 5키로 봉지가 있다
// 더 적은 개수의 봉지를 배달
// dp[n] = Math.min(dp[n-3], dp[n-5]) +1
// 이걸로 풀이하면된다
// dp[3] = 1, dp[5] = 1
const solution = (input) => {
  const n = Number(input[0]);
  const dp = Array(n + 1).fill(Infinity);
  dp[3] = 1;
  dp[5] = 1;

  for (let i = 6; i <= n; i++) {
    dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
  }

  console.log(dp[n] !== Infinity ? dp[n] : -1);
};

solution(input);
