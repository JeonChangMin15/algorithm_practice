const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const target = Number(input[0]);
  let cnt = 0;
  let sum = 0;

  for (let i = 1; i <= target; i++) {
    sum += i;
    cnt += 1;
    if (sum > target) {
      cnt -= 1;
      break;
    }
  }

  console.log(cnt);
};

solution(input);
