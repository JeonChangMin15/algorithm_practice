const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const [n, testN] = input[0].split(" ").map((v) => Number(v));
  const arr = [];
  const testArr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }
  arr.sort((a, b) => a - b);

  for (let i = n + 1; i <= n + testN; i++) {
    testArr.push(Number(input[i]));
  }

  const answer = [];

  for (const num of testArr) {
    let lt = 0;
    let rt = n - 1;
    let targetIndex = -1;

    while (lt <= rt) {
      const midIndex = Math.floor((lt + rt) / 2);
      if (num === arr[midIndex]) {
        targetIndex = midIndex;
        rt = midIndex - 1;
      } else if (arr[midIndex] > num) {
        rt = midIndex - 1;
      } else {
        lt = midIndex + 1;
      }
    }

    answer.push(targetIndex);
  }
  console.log(answer.join("\n"));
};

solution(input);
