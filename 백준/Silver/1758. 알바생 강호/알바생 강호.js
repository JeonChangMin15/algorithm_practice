const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }
  arr.sort((a, b) => b - a);
  let total = 0;

  for (let i = 0; i < n; i++) {
    const tip = arr[i] - i;
    if (tip > 0) total += tip;
  }
  console.log(total);
};

solution(input);
