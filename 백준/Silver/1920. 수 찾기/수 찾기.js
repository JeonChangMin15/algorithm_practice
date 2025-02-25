const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 N, 두번째줄에 숫자들
// 세번째줄에 M, 네번째줄에 있는지 확인해야하는 숫자들 리슽
// 이분탐색으로 두번째 숫자들을 오름차순으로 정렬한 후 네번째줄에 있는 숫자들을 하나씩
// 탐색한다.
const solution = (input) => {
  const n = Number(input[0]);
  const nums = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);
  const m = Number(input[2]);
  const testCase = input[3].split(" ").map((v) => Number(v));

  const answer = [];

  for (const target of testCase) {
    let lt = 0;
    let rt = n - 1;
    let cur = 0;

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      const value = nums[mid];

      if (value === target) {
        cur = 1;
        break;
      } else if (value > target) {
        rt = mid - 1;
      } else {
        lt = mid + 1;
      }
    }

    answer.push(cur);
  }

  console.log(answer.join("\n"));
};

solution(input);
