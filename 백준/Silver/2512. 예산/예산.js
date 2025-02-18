const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map((v) => Number(v));
  const totalMax = Number(input[2]);

  let lt = 1;
  let rt = Math.max(...arr);
  let answer = 0;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    let sum = 0;

    arr.forEach((val) => {
      if (mid >= val) sum += val;
      else sum += mid;
    });

    if (sum <= totalMax) {
      answer = Math.max(mid, answer);
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  console.log(answer);
};

solution(input);
