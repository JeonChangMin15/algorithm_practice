const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const [n, sizeN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));

  nums.sort((a, b) => a - b);

  const dfs = (arr) => {
    if (arr.length == sizeN) {
      console.log(arr.join(" "));
      return;
    }

    for (const num of nums) {
      if (arr.includes(num)) continue;
      arr.push(num);
      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);
};

solution(input);
