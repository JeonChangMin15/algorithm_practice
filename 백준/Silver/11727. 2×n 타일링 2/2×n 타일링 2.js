const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1x2, 2x1, 2x2로 채우는 방법이 있다
// dp[i-1] + 2*dp[i-2]
const solution = (input) => {
  const n = Number(input[0]);
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
  }

  console.log(dp[n]);
};

solution(input);
