const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 회원수 N, 치킨의 종류 M
// 한사람의 만족도는 시킨 치킨중에서 선호도가 가장 큰 값으로 결정
// 회원ㄷ르의 만족도가 최대가 되도록 주문
// 최대 세가지 종류만의 치킨을 시킨다

// 세로로 3묶음을 골라서 최대로 되는걸 찾으면된다
//
const solution = (input) => {
  const [peopleN, chickN] = input[0].split(" ").map((v) => Number(v));
  let max = 0;
  const score = [];
  for (let i = 1; i < input.length; i++) {
    score.push(input[i].split(" ").map((v) => Number(v)));
  }

  for (let i = 0; i < chickN - 2; i++) {
    for (let j = i + 1; j < chickN - 1; j++) {
      for (let k = j + 1; k < chickN; k++) {
        let cur = 0;
        for (let p = 0; p < peopleN; p++) {
          const max = Math.max(score[p][i], score[p][j], score[p][k]);
          cur += max;
        }
        if (cur > max) max = cur;
      }
    }
  }

  console.log(max);
};

solution(input);
