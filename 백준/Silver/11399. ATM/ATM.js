const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에는 사람의 수가 주어지고 두번째줄에는 각 사람마다 걸리는 시간이 주어진다
// 걸리는 시간을 오름차순으로 정렬하고 걸린 시간을 prev이라는 변수와 자기가 걸린시간을 넣는다
// 그리고 prev에 자기가 걸린시간을 더하면된다
const solution = (input) => {
  const n = Number(input[0]);

  const times = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  let prevTime = 0;
  let total = 0;

  for (let i = 0; i < times.length; i++) {
    const cur = times[i];
    total += prevTime + cur;
    prevTime += cur;
  }

  console.log(total);
};

solution(input);
