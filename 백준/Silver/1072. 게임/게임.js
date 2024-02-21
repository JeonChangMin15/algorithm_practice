
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [total, win] = input[0].split(" ").map((v) => Number(v));
  let currentRate = Math.floor((100 * win) / total);

  let min = 1;
  let max = 1000000000;

  let answer = Infinity;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const rate = Math.floor((100 * (win + mid)) / (total + mid));

    if (rate !== currentRate) {
      answer = Math.min(answer, mid);
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  console.log(answer !== Infinity ? answer : -1);
};

solution(input);
