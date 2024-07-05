const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, startVolume, maxVolume] = input[0].split(" ").map((v) => Number(v));
  const volumes = input[1].split(" ").map((v) => Number(v));

  const dp = Array(n + 1)
    .fill(0)
    .map((v) => Array(maxVolume + 1).fill(0));

  dp[0][startVolume] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= maxVolume; j++) {
      if (dp[i - 1][j] === 0) continue;

      if (j - volumes[i - 1] >= 0) {
        dp[i][j - volumes[i - 1]] = 1;
      }

      if (j + volumes[i - 1] <= maxVolume) {
        dp[i][j + volumes[i - 1]] = 1;
      }
    }
  }

  let answer = -1;

  for (let i = 0; i <= maxVolume; i++) {
    if (dp[n][i] === 1) answer = i;
  }

  console.log(answer);
};

solution(input);
