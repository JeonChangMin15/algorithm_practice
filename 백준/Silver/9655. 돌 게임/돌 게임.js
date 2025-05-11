const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 탁자위에 돌 N개가 있다. 상근이와 창영이는 턴을 번갈아가며 돌을 가져가며
// 1개 또는 3개를 가져갈 수 있다. 마지막돌을 가져가는 사람이 이긴다
// 두사람이 완변하게 게임을 할때 이기는 사람을 구해라. 게임은 상근이가 시작
// 첫번째줄에 돌의 갯수가 주어진다. 상근이가 이기면 SK, 창영이가 이기면 CY
// Array(N+1)을 생성한후 dp[1] =1 dp[2] =2 dp[3] = 1
// 그리고 dp[i] = Math.min(dp[i-1]+1, dp[i-3]+1)을 한후 dp[i] %2가 1이면 상근
// 0이면 CY
const solution = (input) => {
  const n = Number(input[0]);
  const dp = Array(n + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 1;

  for (let i = 4; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i - 3] + 1);
  }
  console.log(dp[n] % 2 === 1 ? "SK" : "CY");
};

solution(input);
