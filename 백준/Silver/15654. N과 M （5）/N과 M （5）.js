const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const [n, sizeN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const answer = [];

  const dfs = (arr) => {
    if (arr.length === sizeN) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (arr.includes(nums[i])) continue;
      arr.push(nums[i]);
      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);

  console.log(answer.join("\n"));
};

solution(input);
