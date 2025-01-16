const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, sizeN] = input[0].split(" ").map((v) => Number(v));

  const dfs = (arr) => {
    if (arr.length === sizeN) {
      console.log(arr.join(" "));
    }

    for (let i = 1; i <= n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);
};

solution(input);
