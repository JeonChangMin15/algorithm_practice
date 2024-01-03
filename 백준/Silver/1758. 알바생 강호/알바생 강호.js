// 첫번째 줄에는 인원수고 그다음줄부터는 주려고하는 팁 액수이다
// 손님의 순서를 임의로 바꿔서 팁의 액수를 최대로 받을 수 있는 액수를 구해야된다
// 금액을 내림차순으로 바꿔서 해당 인덱스의 값 - (i+1 -1)
// 0보다 크면 더해주며된다

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");


const solution = (input) => {
  const n = Number(input[0]);
  const tip = [];
  for (let i = 1; i < input.length; i++) {
    const val = Number(input[i]);
    tip.push(val);
  }

  tip.sort((a, b) => b - a);

  let total = 0;
  for (let i = 0; i < tip.length; i++) {
    const currentTip = tip[i] - i;
    if (currentTip > 0) total += currentTip;
  }

  console.log(total);
};

solution(input);
