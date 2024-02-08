const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const cardN = Number(input[0]);
  const cards = input[1].split(" ").map((v) => Number(v));
  const testN = Number(input[2]);
  const testCase = input[3].split(" ").map((v) => Number(v));

  cards.sort((a, b) => a - b);

  const value = {};

  cards.forEach((v) => {
    if (!value[v]) {
      value[v] = 1;
    } else {
      value[v] += 1;
    }
  });

  const answer = [];

  for (let i = 0; i < testN; i++) {
    const target = testCase[i];
    let lt = 0;
    let rt = cardN - 1;

    let cnt = 0;

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      if (target === cards[mid]) {
        cnt = value[target];
        break;
      }

      if (cards[mid] < target) {
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }

    answer.push(cnt);
  }

  console.log(answer.join(" "));
};

solution(input);
