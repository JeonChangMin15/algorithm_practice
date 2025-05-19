const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));


const solution = (input) => {
  const weight = Number(input[0]);
  const dp = Array(weight + 1).fill(0);
  dp[3] = 1;
  dp[4] = -1;
  dp[5] = 1;

  for (let i = 6; i <= weight; i++) {
    if (dp[i - 5] <= 0 && dp[i - 3] <= 0) {
      dp[i] = -1;
    } else if (dp[i - 5] > 0) {
      dp[i] = dp[i - 5] + 1;
    } else if (dp[i - 3] > 0) {
      dp[i] = dp[i - 3] + 1;
    }
  }

  console.log(dp[weight]);
};

solution(input);
