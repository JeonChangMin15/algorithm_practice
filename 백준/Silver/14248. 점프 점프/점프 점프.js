const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map((v) => Number(v));
  const start = Number(input[2]);

  const queue = [];
  queue.push(start - 1);
  const visted = Array(n).fill(false);
  visted[start - 1] = true;

  while (queue.length) {
    const curNode = queue.shift();
    const step = arr[curNode];

    if (curNode - step >= 0 && !visted[curNode - step]) {
      queue.push(curNode - step);
      visted[curNode - step] = true;
    }

    if (curNode + step < n && !visted[curNode + step]) {
      queue.push(curNode + step);
      visted[curNode + step] = true;
    }
  }

  let answer = 0;

  for (const val of visted) {
    if (val) answer += 1;
  }

  console.log(answer);
};

solution(input);
