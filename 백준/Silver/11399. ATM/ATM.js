const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 오름차순으로 넣고 이전 시간이랑 본인시간을  total타임에 넣어서 계산
const solution = (input) => {
  const n = Number(input[0]);
  const times = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  let prev = 0;
  let answer = 0;

  for (const time of times) {
    answer += prev + time;
    prev += time;
  }

  console.log(answer);
};

solution(input);
