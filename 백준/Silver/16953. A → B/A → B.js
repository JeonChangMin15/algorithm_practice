const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const [start, target] = input[0].split(" ").map((v) => Number(v));
  const nums = new Set();
  const queue = [[start, 1]];

  let answer = -1;
  const limit = 10 ** 9;
  while (queue.length) {
    const [val, cnt] = queue.shift();

    if (val === target) {
      answer = cnt;
      break;
    }

    if (val * 2 <= limit && !nums.has(val * 2)) {
      queue.push([val * 2, cnt + 1]);
      nums.add(val * 2);
    }

    if (val * 10 + 1 <= limit && !nums.has(val * 10 + 1)) {
      queue.push([val * 10 + 1, cnt + 1]);
      nums.add(val * 10 + 1);
    }
  }

  console.log(answer);
};

solution(input);
