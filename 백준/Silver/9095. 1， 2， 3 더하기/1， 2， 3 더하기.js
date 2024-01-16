const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 테이스 케이스의 개수가 주어진다
// 그다음줄부터 숫자가 주어지는데 1,2,3의 합으로 나타내는
// 1
// 1 + 1, 2
// 1 + 1 + 1, 1+2, 2+1, 3

// dp[n] = dp[n-3] + dp[n-2] + dp[n-1]
const solution = (input) => {
  const n = Number(input[0]);
  const testCase = [];

  for (let i = 1; i < input.length; i++) {
    testCase.push(Number(input[i]));
  }
  const dp = Array(11).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  for (let val of testCase) {
    console.log(dp[val]);
  }
};

solution(input);
