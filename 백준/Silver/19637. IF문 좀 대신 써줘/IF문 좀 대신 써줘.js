const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const [n, caseN] = input[0].split(" ").map((v) => Number(v));
  const arr = [];
  const test = [];

  for (let i = 1; i <= n; i++) {
    const a = input[i].split(" ");
    arr.push([a[0], Number(a[1])]);
  }
  for (let i = n + 1; i < n + caseN + 1; i++) {
    test.push(Number(input[i]));
  }

  const answer = [];

  for (const val of test) {
    let lt = 0;
    let rt = n - 1;
    let index = Infinity;

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);

      if (arr[mid][1] >= val) {
        rt = mid - 1;
        index = Math.min(index, mid);
      } else {
        lt = mid + 1;
      }
    }

    answer.push(arr[index][0]);
  }

  console.log(answer.join("\n"));
};

solution(input);
