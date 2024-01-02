

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const weight = [];
  for (let i = 1; i < input.length; i++) {
    const w = Number(input[i]);
    weight.push(w);
  }
  const total = [];
  weight.sort((a, b) => a - b);
  for (let i = 0; i < weight.length; i++) {
    const value = (n - i) * weight[i];
    total.push(value);
  }

  const max = Math.max(...total);
  console.log(max);
};

solution(input);
