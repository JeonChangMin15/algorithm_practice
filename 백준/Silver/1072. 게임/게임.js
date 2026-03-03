const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));


const solution = (input) => {
  const [curTotal, curWin] = input[0].split(" ").map((v) => Number(v));
  const curPercent = Math.floor((100 * curWin) / curTotal);

  let lt = 1;
  let rt = curTotal;
  let answer = Infinity;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    const nextPercent = Math.floor((100 * (curWin + mid)) / (curTotal + mid));

    if (nextPercent > curPercent) {
      answer = Math.min(answer, mid);
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  console.log(answer !== Infinity ? answer : -1);
};

solution(input);
