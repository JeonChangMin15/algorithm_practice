const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 탁자위에 돌이 N개 있다
// 상근이와 창영이는 턴을 번갈아가며 1개, 3개를 가져갈 수 있다
// 마지막 돌을 가져가면 이기나다
// 상근이가 먼저 시작하고 상근이가 이기면 SK, 창영이가 이기면 CY를 출력한다
// i=1부터 n까지 진행하는데 홀수면 SK, CK로 마킹을 한다
//
const solution = (input) => {
  const n = Number(input[0]);
  const dp = Array(n + 1).fill(0);
  dp[1] = "SK";

  for (let i = 1; i <= n; i++) {
    const nextPerson = dp[i] === "SK" ? "CY" : "SK";
    dp[i + 1] = nextPerson;
    dp[i + 3] = nextPerson;
  }

  console.log(dp[n]);
};

solution(input);
