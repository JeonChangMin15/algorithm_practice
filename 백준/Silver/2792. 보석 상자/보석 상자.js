const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [peopleN, typeN] = input[0].split(" ").map((v) => Number(v));
  const nums = [];

  for (let i = 1; i <= typeN; i++) {
    nums.push(Number(input[i]));
  }

  let lt = 1;
  let rt = Math.max(...nums);
  let answer = Infinity;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    let cnt = 0;

    nums.forEach((num) => {
      cnt += Math.ceil(num / mid);
    });

    if (cnt <= peopleN) {
      answer = Math.min(answer, mid);
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  console.log(answer);
};

solution(input);
