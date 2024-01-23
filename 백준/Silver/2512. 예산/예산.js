const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const cost = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const limit = Number(input[2]);

  const initialTotal = cost.reduce((prev, cur) => prev + cur, 0);

  if (initialTotal <= limit) {
    console.log(cost[n - 1]);
    return;
  }

  let lt = 1;
  let rt = cost[n - 1];
  let answer = 0;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let sum = 0;

    cost.forEach((v) => {
      if (v < mid) {
        sum += v;
      } else {
        sum += mid;
      }
    });

    if (sum <= limit) {
      lt = mid + 1;
      answer = mid;
    }
    if (sum > limit) {
      rt = mid - 1;
    }
  }

  console.log(answer);
};

solution(input);
