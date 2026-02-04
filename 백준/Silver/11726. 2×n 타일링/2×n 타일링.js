const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 2xN 크기의 직사각형을 채우는 방법의 수를 10007로 나눈 나머지를 출력
// 1->1 2->2 3->3 4->5
const solution = (input) => {
  const n = Number(input[0]);
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
  }
  console.log(dp[n]);
};

solution(input);
