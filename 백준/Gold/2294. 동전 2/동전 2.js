const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 동전의 종류 개수 n, 타겟 k가 주어진다
// 그 다음줄 부터 각각의 동전의 가치가 주어진다
// 동전의 최소 개수를 출력하고 불가능하면 -1을 출력한다
// 12  2 3 7
const solution = (input) => {
  const [coinN, target] = input[0].split(" ").map((v) => Number(v));
  const coins = [];

  for (let i = 1; i < input.length; i++) {
    coins.push(Number(input[i]));
  }

  const dp = Array(target + 1).fill(Infinity);

  for (let i = 1; i <= target; i++) {
    if (coins.includes(i)) {
      dp[i] = 1;
    } else {
      let lt = 1;
      let rt = i - 1;
      let cnt = Infinity;

      while (lt <= rt) {
        cnt = Math.min(dp[lt] + dp[rt], cnt);
        lt++;
        rt--;
      }

      dp[i] = cnt;
    }
  }

  console.log(dp[target] === Infinity ? -1 : dp[target]);
};

solution(input);
