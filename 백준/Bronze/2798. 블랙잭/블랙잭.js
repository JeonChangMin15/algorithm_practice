const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에는 카드의 개수와 목표 숫자가 주어진다
// 두번째줄에는 카드넘버들이 주어진다
// 카드 세개를 골라서 목표숫자를 넘지않으면서 가장 가까운 숫자를 출력해야된다.
// 삼중 for문으로 전부 탐색하면 가능할거같다.
const solution = (input) => {
  const [n, target] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  nums.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];

        if (sum <= target && sum > answer) {
          answer = sum;
        }
      }
    }
  }

  console.log(answer);
};

solution(input);
