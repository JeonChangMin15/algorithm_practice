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

  const backTrack = (arr) => {
    if (arr.length === combN) {
      const str = arr.map((v) => nums[v]).join(" ");
      if (!answer.includes(str)) {
        answer.push(str);
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTrack(arr, i);
      arr.pop();
    }
  };

  backTrack([]);

  console.log(answer.join("\n"));
};

solution(input);
