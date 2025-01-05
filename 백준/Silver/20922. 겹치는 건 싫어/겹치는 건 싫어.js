const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const [n, limitN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));

  let lt = 0;
  let rt = 0;
  const cnt = Array(100001).fill(0);
  let answer = 1;

  while (rt < n) {
    const val = nums[rt];

    if (cnt[val] < limitN) {
      cnt[val] += 1;
      rt += 1;
    } else {
      cnt[nums[lt]] -= 1;
      lt += 1;
    }

    answer = Math.max(answer, rt - lt);
  }

  console.log(answer);
};

solution(input);
