const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, len] = input[0].split(" ").map((v) => Number(v));
  const arr = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  let lt = 0;
  let rt = arr[n - 1];
  let answer = 0;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let res = 0;

    arr.forEach((v) => {
      if (v > mid) {
        res += v - mid;
      }
    });

    if (res >= len) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  console.log(answer);
};

solution(input);
