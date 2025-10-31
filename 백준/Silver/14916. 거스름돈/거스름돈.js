const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 2원 5원으로 거스름돈을 준다
// 동전의 개수가 최소가 되도록 거슬러 주어야한다
// 동전의 최소 개수를 출력하고 만약 거슬러 줄 수 없으면 -1을 출력한다
// 먼저 해당 금액을 5로 나눈 몫부터 0까지 차례대로 경우의 수를 계산을 한다
// 그래서 2로 나눈 나머지가 0이되면 break하고 총 개수를 갱신해준다
const solution = (input) => {
  const totalMoney = Number(input[0]);
  const fiveWonCoinMax = Math.floor(totalMoney / 5);
  let answer = -1;
  for (let i = fiveWonCoinMax; i >= 0; i--) {
    const resMoney = totalMoney - 5 * i;

    if (resMoney % 2 === 0) {
      answer = i + resMoney / 2;
      break;
    }
  }

  console.log(answer);
};

solution(input);
