const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const cards = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const testN = Number(input[2]);
  const testCases = input[3].split(" ").map((v) => Number(v));
  const answer = [];
  const numObj = {};
  for (const val of cards) {
    if (numObj[val]) {
      numObj[val] += 1;
    } else {
      numObj[val] = 1;
    }
  }

  const checkCount = (value) => {
    let lt = 0;
    let rt = n - 1;
    let cnt = 0;

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);

      if (value === cards[mid]) {
        cnt = numObj[value];
        break;
      }

      if (value > cards[mid]) {
        lt = mid + 1;
      }

      if (value < cards[mid]) {
        rt = mid - 1;
      }
    }

    return cnt;
  };

  for (const testVal of testCases) {
    answer.push(checkCount(testVal));
  }

  console.log(answer.join(" "));
};

solution(input);
