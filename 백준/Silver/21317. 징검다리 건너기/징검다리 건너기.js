const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const stoneN = Number(input[0]);
  const jump = [];
  const superJump = Number(input[input.length - 1]);

  for (let i = 1; i < stoneN; i++) {
    jump.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dp = Array(stoneN)
    .fill(0)
    .map((v) => Array(2).fill(Infinity));

  dp[0][0] = 0;
  dp[0][1] = 0;

  if (stoneN >= 2) {
    dp[1][0] = jump[0][0];
    dp[1][1] = jump[0][0];
  }

  if (stoneN >= 3) {
    dp[2][0] = Math.min(dp[1][0] + jump[1][0], dp[0][0] + jump[0][1]);

    dp[2][1] = Math.min(dp[1][0] + jump[1][0], dp[0][0] + jump[0][1]);
  }

  for (let i = 3; i < stoneN; i++) {
    dp[i][0] = Math.min(
      dp[i - 1][0] + jump[i - 1][0],
      dp[i - 2][0] + jump[i - 2][1]
    );

    dp[i][1] = Math.min(
      dp[i - 1][1] + jump[i - 1][0],
      dp[i - 2][1] + jump[i - 2][1],
      dp[i - 3][0] + superJump
    );
  }

  console.log(Math.min(...dp[stoneN - 1]));
};

solution(input);
