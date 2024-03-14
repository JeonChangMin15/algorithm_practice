const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));


const solution = (input) => {
  const [endDay, total] = input[0].split(" ").map((v) => Number(v));

  for (let i = 1; i <= total; i++) {
    for (let j = i; j <= total; j++) {
      const dp = Array(endDay).fill(0);
      dp[0] = i;
      dp[1] = j;
      for (let i = 2; i < endDay; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
      }

      if (dp[endDay - 1] === total) {
        console.log(i);
        console.log(j);
        return;
      }
    }
  }
};

solution(input);
