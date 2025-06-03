const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 계단의 수가 주어지고 각 계단의 점수가 주어진다
// 한번에 계단을 한 계단, 두 계단씩 가능 연속 세개는 안된다
// 마지막 계단은 반드시 밟아야한다
// i번째는 dp[i] = arr[i]+arr[i-1] + dp[i-3], arr[i]+dp[i-2]
const solution = (input) => {
  const n = Number(input[0]);
  const arr = [0];

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  const dp = Array(n + 1).fill(0);
  dp[1] = arr[1];
  dp[2] = arr[1] + arr[2];

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
  }

  console.log(dp[n]);
};

solution(input);
