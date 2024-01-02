const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");


// k개의 로프를 사용해서 w인 물체를 들어올린다
// 로프를 사용해서 최대의 무게를 구해라
// 먼저 무게를 오름차순으로 정렬
// 해당무게에다가 갯수의 -1씩 감소시켜서 곱한 값들의 최대값을 출력하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const weights = [];
  for (let i = 1; i < input.length; i++) {
    weights.push(Number(input[i]));
  }

  weights.sort((a, b) => a - b);
  const limitN = [];
  for (let i = n; i >= 1; i--) {
    limitN.push(i);
  }

  const total = [];
  for (let i = 0; i < weights.length; i++) {
    total.push(weights[i] * limitN[i]);
  }

  console.log(Math.max(...total));
};

solution(input);
