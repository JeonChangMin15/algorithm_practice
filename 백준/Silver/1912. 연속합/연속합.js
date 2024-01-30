const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// n개의 정수로 이루어진 임의의 수열이 주어진다. 연속된 몇개의 수를 선택해서
// 구할 수 있는 합 중 가장 큰합을 구한다. 수는 한 개 이상 선택
// 첫째줄에 정수 N이 주어지고 두번째줄부터 숫자들이 주어진다
// dp로 푸는데 이전값이 양수면 현재 인덱스의 값과 더한값을 더하고 아니면 그대로 기존값

const solution = (input) => {
  const n = Number(input[0]);
  const nums = input[1].split(" ").map((v) => Number(v));

  const dp = Array(n).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < n; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = nums[i] + dp[i - 1];
    } else {
      dp[i] = nums[i];
    }
  }

  console.log(Math.max(...dp));
};

solution(input);
