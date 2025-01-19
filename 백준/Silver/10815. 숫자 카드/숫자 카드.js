const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const nums = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);
  const testN = Number(input[2]);
  const cases = input[3].split(" ").map((v) => Number(v));

  const searchInclude = (target) => {
    let lt = 0;
    let rt = n - 1;
    let isInclude = false;

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      if (nums[mid] === target) {
        isInclude = true;
        break;
      }

      if (nums[mid] < target) {
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }

    return isInclude ? 1 : 0;
  };

  const answer = [];
  for (const val of cases) {
    answer.push(searchInclude(val));
  }

  console.log(answer.join(" "));
};

solution(input);
