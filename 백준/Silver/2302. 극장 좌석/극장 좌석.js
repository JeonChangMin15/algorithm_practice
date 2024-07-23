const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));


const solution = (input) => {
  const peopleN = Number(input[0]);
  const vipN = Number(input[1]);
  const seat = Array(peopleN + 1).fill(0);
  seat[0] = 1;

  if (vipN === peopleN) {
    console.log(1);
    return;
  }

  for (let i = 0; i < vipN; i++) {
    seat[Number(input[i + 2])] = 1;
  }

  const dp = Array(41).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= 40; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  const resSeat = [];
  let cur = 0;
  for (let i = 1; i <= peopleN; i++) {
    if (seat[i] === 0) {
      cur += 1;
    } else {
      if (cur > 0) resSeat.push(cur);
      cur = 0;
    }
  }

  if (cur > 0) resSeat.push(cur);

  let answer = 1;

  for (const val of resSeat) {
    answer *= dp[val];
  }

  console.log(answer);
};

solution(input);
