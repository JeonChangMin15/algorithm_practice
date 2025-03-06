const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// k개의 로프를 사용하여 중량이 w인 물체를 올리면 고르게 w/k만큼 중량이 걸린다
// 각 로프의 정보가 주어질때 들어올릴 수 있는 최대 중량을 구해내라
// 모든 로프를 사용할 필요는 없고 임의로 몇개의 로프를 골라서 사용해도 된다
// 첫번째줄에 N이 주어지고 N개의 줄에는 각 로프가 버틸 수 있는 최대 중량이 주어진다
// 로프는 최대 100000
// 결국 무게를 오름차순으로 한 후에 해당 무게*(가방갯수 - 인덱스)
const solution = (input) => {
  const n = Number(input[0]);
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }
  arr.sort((a, b) => a - b);

  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer = Math.max(answer, arr[i] * (n - i));
  }
  console.log(answer);
};

solution(input);
