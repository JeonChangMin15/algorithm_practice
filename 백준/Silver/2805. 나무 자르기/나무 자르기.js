const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [treeN, targetLen] = input[0].split(" ").map((v) => Number(v));
  const arr = input[1].split(" ").map((v) => Number(v));

  let start = 0;
  let end = Math.max(...arr);
  let answer = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let resLen = 0;
    arr.forEach((v) => {
      if (v > mid) resLen += v - mid;
    });

    if (resLen >= targetLen) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(answer);
};

solution(input);
