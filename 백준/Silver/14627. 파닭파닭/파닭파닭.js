const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, chickN] = input[0].split(" ").map((v) => Number(v));
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  let lt = 1;
  let rt = Math.max(...arr);
  let curLen = 0;

  while (lt <= rt) {
    let val = 0;
    const mid = Math.floor((lt + rt) / 2);

    arr.forEach((v) => {
      val += Math.floor(v / mid);
    });

    if (val >= chickN) {
      curLen = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  let answer = arr.reduce((prev, cur) => prev + cur, 0) - curLen * chickN;

  console.log(answer);
};

solution(input);
