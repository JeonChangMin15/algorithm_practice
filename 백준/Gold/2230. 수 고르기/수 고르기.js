const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자의 갯수와 차이의 최솟값이 주어진다
// 두번째줄부터 숫자들이 주어진다
// 이중for문은 무조건 안된다
// 숫자 두개를 골랐을때 차이가 M이상이면서 가장 작은 경우를 구해라
// 먼저 숫자를 오름차순으로 셋팅한 후에 lt = 0, rt = 0
// 그리고나서 arr[rt] - arr[lt] < 최솟값이면 rt++
// arr[rt] - arr[lt] >= 최솟값이면 lt++ 하고 값을 갱신한다
const solution = (input) => {
  const [n, minVal] = input[0].split(" ").map((v) => Number(v));
  const nums = [];

  for (let i = 1; i <= n; i++) {
    nums.push(Number(input[i]));
  }
  nums.sort((a, b) => a - b);

  let answer = Infinity;

  let lt = 0;
  let rt = 0;

  while (rt < n && lt < n) {
    const diff = nums[rt] - nums[lt];

    if (diff < minVal) {
      rt += 1;
    } else {
      answer = Math.min(answer, diff);
      lt += 1;
    }
  }

  console.log(answer);
};

solution(input);
