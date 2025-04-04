const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const coins = [1, 5, 10, 50];
  const set = new Set();

  function backtrack(coinIndex, left, sum) {
    if (coinIndex === 3) {
      set.add(sum + coins[3] * left);
      return;
    }

    for (let i = 0; i <= left; i++) {
      const curSum = coins[coinIndex] * i;
      backtrack(coinIndex + 1, left - i, curSum + sum);
    }
  }

  backtrack(0, n, 0);

  console.log(set.size);
};

solution(input);
