const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const solution = (input) => {
  const nums = input[0].split(" ").map((v) => Number(v));
  console.log(nums[0] - nums[1]);
};

solution(input);