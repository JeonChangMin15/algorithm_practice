const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 2로 나누거나, 3로 나누거나 -1을 진행해서
// 1로 만들 수 있는 최소 횟수를 출력해라
// 1부터 시작해서 dp[i-1], dp[i/2], dp[i-3]의 최솟값에 +1을 해서 누적
const solution = (input) => {
  const n = Number(input[0]);
  const dp = Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    const prev1 = dp[i - 1];
    const prev2 = i % 2 === 0 ? dp[i / 2] : Infinity;
    const prev3 = i % 3 === 0 ? dp[i / 3] : Infinity;
    dp[i] = Math.min(prev1, prev2, prev3) + 1;
  }

  console.log(dp[n]);
};

solution(input);
