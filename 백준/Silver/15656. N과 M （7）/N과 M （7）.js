const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, combN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const answer = [];

  const backTracking = (arr) => {
    if (arr.length === combN) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = 0; i < n; i++) {
      arr.push(nums[i]);
      backTracking(arr);
      arr.pop();
    }
  };

  backTracking([]);

  console.log(answer.join("\n"));
};

solution(input);
