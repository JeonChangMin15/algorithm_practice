const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 피보나치 수는 0 1로 시작하고 다음부터는 앞의 2번째수를 더한값이다
// n번째 피보나치 수를 구하라
const solution = (input) => {
  const n = Number(input[0]);
  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[n]);
};

solution(input);
