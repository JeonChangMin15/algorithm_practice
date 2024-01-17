const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 계단의 수 그다음줄부터는 점수
// 계단은 한번에 한개 or 두개만 오를 수 있다
// 연속된 세 개의 계단을 모두 밟으면 안된다
// 123안됨 마지막 도착계단은 반드시 밟아야한다
// 최대값을 구해야된다\
// 거꾸로 위에서 아래로 내려간다고 생각해보자
// [전전칸, 전칸]의 누적합을 넣어줘야한다
const solution = (input) => {
  const n = Number(input[0]);
  const score = [];
  for (let i = 1; i < input.length; i++) {
    score.push(Number(input[i]));
  }

  const dp = Array(n)
    .fill(0)
    .map((v) => [0, 0]);
  dp[0] = [score[0], score[0]];
  dp[1] = [score[1], score[0] + score[1]];

  for (let i = 2; i < n; i++) {
    dp[i] = [
      Math.max(dp[i - 2][1] + score[i], dp[i - 2][0] + score[i]),
      dp[i - 1][0] + score[i],
    ];
  }

  console.log(Math.max(dp[n - 1][0], dp[n - 1][1]));
};

solution(input);
