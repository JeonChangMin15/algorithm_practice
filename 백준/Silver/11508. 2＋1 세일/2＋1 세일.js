const input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 내림차순으로 정렬한후 해당 인덱스 i%3 === 2인건 스킵하고 더하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  arr.sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (i % 3 !== 2) {
      answer += arr[i];
    }
  }

  console.log(answer);
};

solution(input);
