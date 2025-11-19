const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 인원수가 주어진다
// money - i 액수만큼 받는다
// 금액을 내림차순으로 정렬한후 Math.max(money-i, 0)을 더해주면 된다
const solution = (input) => {
  const n = Number(input[0]);
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }
  arr.sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < n; i++) {
    answer += Math.max(arr[i] - i, 0);
  }

  console.log(answer);
};

solution(input);
