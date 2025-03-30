const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const [n, combN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const set = new Set();
  const answer = [];

  const dfs = (arr, start) => {
    if (arr.length === combN) {
      const val = arr.join(" ");
      if (!set.has(val)) {
        answer.push(val);
        set.add(val);
      }

      return;
    }

    for (let i = start; i < n; i++) {
      arr.push(nums[i]);
      dfs(arr, i);
      arr.pop();
    }
  };

  dfs([], 0);

  console.log(answer.join("\n"));
};

solution(input);
