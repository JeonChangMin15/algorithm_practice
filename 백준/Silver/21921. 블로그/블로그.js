const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [totalN, len] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));

  let max = 0;
  let prev = 0;
  let day = 1;

  if (nums.every((v) => v === 0)) {
    console.log("SAD");
    return;
  }

  for (let i = 0; i < len; i++) {
    max += nums[i];
    prev += nums[i];
  }

  for (let i = 1; i < totalN - len + 1; i++) {
    let cur = prev - nums[i - 1] + nums[i + len - 1];

    if (cur > max) {
      max = cur;
      day = 1;
    } else if (cur === max) {
      day += 1;
    }

    prev = cur;
  }

  console.log(max);
  console.log(day);
};

solution(input);
