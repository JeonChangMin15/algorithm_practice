const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 2xn 타일에 배치할 수 있는 경우의 수를 9901로 나눈값을 출력
// 일단 사자를 최대 n마리 배치할 수 있다

const solution = (input) => {
  const n = Number(input[0]);
  const dp = Array(n + 1)
    .fill(0)
    .map((v) => Array(3).fill(0));

  dp[1][0] = 1;
  dp[1][1] = 1;
  dp[1][2] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
  }

  console.log((dp[n][0] + dp[n][1] + dp[n][2]) % 9901);
};

solution(input);
