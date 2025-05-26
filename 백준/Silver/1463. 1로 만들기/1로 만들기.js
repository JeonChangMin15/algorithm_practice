const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1보다 큰 자연수 하나가 주어진다
// 3으로 나눌 수 있으면 3으로 나눈다
// 2으로 나눌 수 있으면 2로 나눈다
// 1을 뺀다
// 백트래킹은 결국 dp로 치환이 가능하다
// dp[1] = 0, dp[i] = Math.min() divideTwo = i%2 === 0? dp[i%2]? Infinity
const solution = (input) => {
  const n = Number(input[0]);
  const dp = Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    const dividTwo = i % 2 === 0 ? dp[i / 2] + 1 : Infinity;
    const dividThree = i % 3 === 0 ? dp[i / 3] + 1 : Infinity;
    const minus = dp[i - 1] + 1;

    dp[i] = Math.min(dividTwo, dividThree, minus);
  }

  console.log(dp[n]);
};

solution(input);
