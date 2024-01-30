const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에는 숫자 N이 주어지고 둘째줄부터 숫자들이 주어진다
// 증가하는 부분 수열중에서 합이 가장 큰것을 구해라
// dp로 푸는데 dp[i] = 본인보다 작은 인덱스들중에서 가장 큰값을 더한값과 같다
// 만약 본인보다 작은값이 이전에 없으면 그냥 본인값을 넣어주면 된다.
const solution = (input) => {
  const n = Number(input[0]);
  const nums = input[1].split(" ").map((v) => Number(v));
  const dp = Array(n).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], nums[i] + dp[j]);
      }
    }
    if (dp[i] === 0) dp[i] = nums[i];
  }

  console.log(Math.max(...dp));
};

solution(input);
