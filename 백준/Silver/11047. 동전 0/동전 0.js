const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, money] = input[0].split(" ").map((v) => Number(v));
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  arr.sort((a, b) => b - a);
  let resMoney = money;
  let answer = 0;
  let moneyIndex = 0;

  while (resMoney > 0) {
    const val = Math.floor(resMoney / arr[moneyIndex]);
    if (val > 0) {
      answer += val;
      resMoney -= val * arr[moneyIndex];
    }

    moneyIndex += 1;
  }

  console.log(answer);
};

solution(input);
