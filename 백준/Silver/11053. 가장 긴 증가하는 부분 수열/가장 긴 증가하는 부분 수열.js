const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 수열의 크기 둘째줄에는 숫자들이 주어진다
// 수열의 가장 긴 증가하는 부분 수열의 길이를 구해라
// 10 20 10 30 20 50

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map((v) => Number(v));
  const dp = Array(n).fill(1);
  let max = arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
      const prevDp = dp.slice(0, i);
      dp[i] += Math.max(...prevDp);
      max = arr[i];
    } else {
      let prevMax = 0;
      for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
          prevMax = Math.max(prevMax, dp[j]);
        }
      }

      dp[i] += prevMax;
    }
  }

  console.log(Math.max(...dp));
};

solution(input);
