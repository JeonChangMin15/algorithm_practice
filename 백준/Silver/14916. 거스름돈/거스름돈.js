const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 2원, 5원으로 거스름돈을 준다. 동전의 개수는 무한대고 동전의 갯수가 최소가 되도록 거슬러 준다
// 첫번째줄에 거스름돈 N이 주어지고 만약 안되면 -1을 출력한다
// 먼저 5원짜리를 최대 갯수를 구하고 해당 액수를 제외한 금액에서 2원으로 가능하면 된다
const solution = (input) => {
  const money = Number(input[0]);
  let answer = -1;
  let fiveWonCoin = Math.floor(money / 5);

  while (fiveWonCoin >= 0) {
    const res = money - fiveWonCoin * 5;
    if (res % 2 === 0) {
      answer = fiveWonCoin + res / 2;
      break;
    } else {
      fiveWonCoin -= 1;
    }
  }

  console.log(answer);
};

solution(input);
