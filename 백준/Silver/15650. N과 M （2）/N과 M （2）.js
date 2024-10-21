const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, sizeN] = input[0].split(" ").map((v) => Number(v));

  const dfs = (arr, start) => {
    if (arr.length === sizeN) {
      console.log(arr.join(" "));
      return;
    }

    for (let i = start; i <= n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 1);
};

solution(input);
