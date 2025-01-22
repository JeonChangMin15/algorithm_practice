const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, maxLen] = input[0].split(" ").map((v) => Number(v));

  const answer = [];

  const dfs = (arr) => {
    if (arr.length === maxLen) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      arr.push(i);
      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);

  console.log(answer.join("\n"));
};

solution(input);
