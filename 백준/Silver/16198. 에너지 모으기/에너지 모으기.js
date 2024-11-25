const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const nums = input[1].split(" ").map((v) => Number(v));
  let answer = 0;

  const dfs = (arr, value) => {
    if (arr.length === 2) {
      answer = Math.max(answer, value);
      return;
    }

    for (let i = 1; i < arr.length - 1; i++) {
      const num = arr[i];
      const val = arr[i - 1] * arr[i + 1];
      arr.splice(i, 1);
      dfs(arr, value + val);
      arr.splice(i, 0, num);
    }
  };

  dfs([...nums], 0);

  console.log(answer);
};

solution(input);
