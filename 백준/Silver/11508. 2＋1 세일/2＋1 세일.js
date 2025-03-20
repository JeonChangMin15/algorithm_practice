const input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 3개를 구매하면 가장싼 제품 하나는 공짜이다
// 최소비용으로 구매해야된다
// 첫번째줄에 유제품의 수 두번째줄에 유제품 가격이 한줄씩 있다
// 가격 배열을 내림차순으로 정렬한후 해당 인덱스가 3의배수면 제외하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const price = [];

  for (let i = 1; i <= n; i++) {
    price.push(Number(input[i]));
  }
  price.sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (i % 3 !== 2) {
      answer += price[i];
    }
  }

  console.log(answer);
};

solution(input);
