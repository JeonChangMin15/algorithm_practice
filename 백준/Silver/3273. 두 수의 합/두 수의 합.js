const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const nums = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const target = Number(input[2]);

  let lt = 0;
  let rt = n - 1;
  let answer = 0;

  while (lt < rt) {
    const sumVal = nums[lt] + nums[rt];

    if (sumVal === target) {
      answer += 1;
      lt += 1;
    } else if (sumVal > target) {
      rt -= 1;
    } else if (sumVal < target) {
      lt += 1;
    }
  }

  console.log(answer);
};

solution(input);
