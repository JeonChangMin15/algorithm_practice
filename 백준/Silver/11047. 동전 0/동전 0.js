const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, price] = input[0].split(" ").map((v) => Number(v));
  const coins = [];

  for (let i = 1; i <= n; i++) {
    coins.push(Number(input[i]));
  }

  coins.sort((a, b) => b - a);

  let curPrice = price;
  let answer = 0;
  let index = 0;

  while (curPrice > 0) {
    const cnt = Math.floor(curPrice / coins[index]);
    answer += cnt;
    curPrice -= cnt * coins[index];
    index += 1;
  }

  console.log(answer);
};

solution(input);
