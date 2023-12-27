const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 5원, 2원으로 최소한의 동전의 개수를 구한다
// 만약 거슬러 줄 수 없다면 -1을 출력
// 1. 5로 나눈 몫을 구한다.
// 2. for문을 몫부터 0까지 -1씩 감소하면서 나머지가 짝수면 바로 리턴한다
// 3. 만약 0까지 나머지가 끝까지 홀수면 -1

const solution = (input) => {
  const money = Number(input[0]);
  const n = parseInt(money / 5);
  let cnt = -1;

  for (let i = n; i >= 0; i--) {
    const res = money - i * 5;
    if (res % 2 === 0) {
      cnt = i + parseInt(res / 2);
      console.log(cnt);
      return;
    }
  }

  console.log(-1);
};

solution(input);
