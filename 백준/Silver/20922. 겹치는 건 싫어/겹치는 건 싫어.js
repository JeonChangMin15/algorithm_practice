const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const [n, limitN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));

  let lt = 0;
  let rt = 0;
  let obj = {};
  let answer = 0;
  let curLen = 0;

  while (rt < n) {
    const val = nums[rt];
    if (!obj[val]) obj[val] = [];

    if (obj[val].length < limitN) {
      obj[val].push(rt);
      curLen += 1;
      answer = Math.max(answer, curLen);
      rt += 1;
    } else {
      const lastIndex = obj[val][0];
      rt = lastIndex + 1;
      obj = {};
      curLen = 0;
    }
  }

  console.log(answer);
};

solution(input);
