// 첫번째줄에는 거스름돈이 주어진다
// 2원, 5원으로만 거스름돈을 줘야한다
// 동전의 개수가 최소가 되도록해줘야한다
// 5원을 언제빼야지?
// 아니면 5로 나눈 몫을 먼저 구해서
// 그 몫을 5로 값한 나머지가 짝수일때까지 계속 구하면된다

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const solution = (input) => {
  let money = Number(input[0]);
  let fiveCoin = parseInt(money / 5);

  while (fiveCoin >= 0) {
    let res = money - fiveCoin * 5;
    if (res % 2 === 0) {
      let twoCoin = parseInt(res / 2);
      console.log(fiveCoin + twoCoin);
      return;
    } else {
      fiveCoin--;
    }
  }

  console.log(-1);
};

solution(input);
