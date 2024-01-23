const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const cardN = Number(input[0]);

  const cards = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const testN = Number(input[2]);

  const testCase = input[3]
    .split(" ")
    .map((v, index) => [Number(v), index])
    .sort((a, b) => a[0] - b[0]);

  const answer = Array(testN).fill(0);

  for (let i = 0; i < testCase.length; i++) {
    let lt = 0;
    let rt = cardN - 1;
    const target = testCase[i][0];
    const targetIndex = testCase[i][1];

    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);

      if (target === cards[mid]) {
        answer[targetIndex] = 1;
        break;
      }
      if (target < cards[mid]) {
        rt = mid - 1;
      }
      if (target > cards[mid]) {
        lt = mid + 1;
      }
    }
  }

  console.log(answer.join(" "));
};

solution(input);
