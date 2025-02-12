const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, targetLen] = input[0].split(" ").map((v) => Number(v));
  const arr = input[1].split(" ").map((v) => Number(v));

  let lt = 1;
  let rt = Math.max(...arr);

  let answer = 0;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    let res = 0;

    arr.forEach((v) => {
      if (v > mid) res += v - mid;
    });

    if (res >= targetLen) {
      lt = mid + 1;
      answer = Math.max(answer, mid);
    } else {
      rt = mid - 1;
    }
  }

  console.log(answer);
};

solution(input);
