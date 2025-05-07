const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const testCase = [];

  for (let i = 1; i <= n; i++) {
    testCase.push(input[i].split(" ").map((v) => Number(v)));
  }

  for (const [leftN, rightN] of testCase) {
    const dp = Array(rightN + 1)
      .fill(0)
      .map((v) => Array(rightN + 1).fill(1));

    for (let i = 2; i <= rightN; i++) {
      dp[1][i] = i;
    }

    for (let i = 2; i <= leftN; i++) {
      for (let j = i + 1; j <= rightN; j++) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      }
    }

    console.log(dp[leftN][rightN]);
  }
};

solution(input);
