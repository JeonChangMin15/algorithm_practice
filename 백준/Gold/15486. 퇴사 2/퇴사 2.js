const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const work = [[0, 0]];

  for (let i = 1; i < input.length; i++) {
    work.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    const [date, cost] = work[i];

    dp[i] = Math.max(dp[i], dp[i - 1]);

    const finDate = i + date - 1;
    if (finDate <= n) {
      dp[finDate] = Math.max(dp[finDate], dp[i - 1] + cost);
    }
  }

  console.log(Math.max(...dp));
};

solution(input);
