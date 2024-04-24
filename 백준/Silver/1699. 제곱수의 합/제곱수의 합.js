const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 1; i <= n; i++) {
    dp[i] = i;
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
    
  console.log(dp[n]);
};

solution(input);
