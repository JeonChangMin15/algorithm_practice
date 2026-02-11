const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1
// 1+1, 2
// 1+2, 1+1+1, 2+1, 3
// 첫번재줄에 테스트 수가 주어지고 각 수마다 합의 방법의 수를 나타내라
// dp[i] = dp[i-3]+dp[i-2]+dp[i-1]
const solution = (input) => {
  const n = Number(input[0]);
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  for (const val of arr) {
    const dp = Array(val + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 4; i <= val; i++) {
      dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }

    console.log(dp[val]);
  }
};

solution(input);
