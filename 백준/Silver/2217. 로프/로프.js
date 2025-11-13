const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 로프의 개수, 그다음줄부터 로프가 견딜 수 있는 무게
// 로프를 활용해서 최대로 견딜 수 있는 무게를 구해라
// 모든 로프를 사용할 필요는 없고 필요한 로프만 사용하면된다
// 로프를 오름차순으로 정렬한후 본인무게 *(총갯수-i)를 해서 최대값 비교
const solution = (input) => {
  const totalN = Number(input[0]);
  const lopeWeight = [];

  for (let i = 1; i <= totalN; i++) {
    lopeWeight.push(Number(input[i]));
  }
  lopeWeight.sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i < totalN; i++) {
    const w = lopeWeight[i];
    answer = Math.max(answer, w * (totalN - i));
  }

  console.log(answer);
};

solution(input);
