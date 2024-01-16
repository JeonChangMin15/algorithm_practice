const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

/**
 * dp[0] = 0
 * dp[1] = 0
 * i / 2, i/3 둘 중 하나라도 자연수면 저 중에 dp[i/2], dp[i/3]중 작은값 + 1
 * 만약 둘 다 자연수가 아니면? dp[i-1] + 1
 */
const solution = (input) => {
  const n = Number(input[0]);

  const dp = Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    const n1 = i / 2 === Math.floor(i / 2) ? dp[i / 2] + 1 : Infinity;
    const n2 = i / 3 === Math.floor(i / 3) ? dp[i / 3] + 1 : Infinity;

    const min = Math.min(n1, n2, dp[i - 1] + 1);

    dp[i] = min;
  }

  console.log(dp[n]);
};

solution(input);
