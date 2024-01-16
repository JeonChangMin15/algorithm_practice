const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 3킬로 5킬로로 최소한의 갯수로 만들 수 있는지 구해야된다
// dp[n] = Math.min(dp[n-3] +1 , dp[n-5] +1)
// Infinity 이면 -1
const solution = (input) => {
  const n = Number(input[0]);
  const dp = Array(n + 1).fill(0);
  dp[0] = Infinity;
  dp[1] = Infinity;
  dp[2] = Infinity;
  dp[3] = 1;
  dp[4] = Infinity;
  dp[5] = 1;

  if (n <= 5) {
    const answer = dp[n] === Infinity ? -1 : dp[n];
    console.log(answer);
    return;
  }

  for (let i = 6; i <= n; i++) {
    dp[i] = Math.min(dp[i - 3] + 1, dp[i - 5] + 1);
  }

  const answer = dp[n] === Infinity ? -1 : dp[n];

  console.log(answer);
};

solution(input);
