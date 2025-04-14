const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [sushiN, maxNum, n, coupon] = input[0].split(" ").map((v) => Number(v));
  const arr = [];

  for (let i = 1; i <= sushiN; i++) {
    arr.push(Number(input[i]));
  }

  const sushiMark = Array(maxNum + 1).fill(0);
  sushiMark[coupon] = 1;

  for (let i = 0; i < n; i++) {
    sushiMark[arr[i]] += 1;
  }

  const firstSushiCnt = sushiMark.filter((v) => v > 0).length;
  let answer = firstSushiCnt;
  let curTotal = answer;

  let lt = 0;
  let rt = n - 1;

  while (lt < sushiN) {
    const prevSushi = arr[lt];
    const nextSushi = arr[(rt + 1) % sushiN];
    sushiMark[prevSushi] -= 1;
    sushiMark[nextSushi] += 1;

    if (sushiMark[prevSushi] === 0) curTotal -= 1;
    if (sushiMark[nextSushi] === 1 && prevSushi !== nextSushi) curTotal += 1;

    answer = Math.max(curTotal, answer);
    lt += 1;
    rt += 1;
  }

  console.log(answer);
};

solution(input);
