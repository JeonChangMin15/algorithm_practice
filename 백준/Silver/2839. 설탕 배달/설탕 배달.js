const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const weight = Number(input[0]);
  const dp = Array(weight + 1).fill(Infinity);
  dp[3] = 1;
  dp[5] = 1;

  for (let i = 6; i <= weight; i++) {
    dp[i] = Math.min(dp[i - 3] + 1, dp[i - 5] + 1);
  }

  console.log(dp[weight] !== Infinity ? dp[weight] : -1);
};

solution(input);
