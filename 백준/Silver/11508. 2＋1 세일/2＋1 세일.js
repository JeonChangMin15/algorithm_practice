const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에는 제품의 수
// 두번째 줄부터 제품의 가격들이 출력
// 3묶음으로 구매하면 가장 싼 가격의 제품은 할인해준다
// 가장 싼 가격으로 살 수 있는 총 가격
// 10 4 5 6 6 8
// 내림차순으로 정렬하고나서 3으로 나눈 나머지가 2이면 값에서 포함시키지 않는다
const solution = (input) => {
  const n = Number(input[0]);
  const cost = [];

  for (let i = 1; i < input.length; i++) {
    cost.push(Number(input[i]));
  }

  cost.sort((a, b) => b - a);

  let total = 0;

  for (let i = 0; i < cost.length; i++) {
    if (i % 3 !== 2) {
      total += cost[i];
    }
  }

  console.log(total);
};

solution(input);
