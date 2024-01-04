// 첫번째 줄에는 인원수 두번째 줄에는 인출하는데 걸리는 시간이다
// 걸리는 시간을 오름차순으로 배열하고
// 이전에 걸린 총 시간에 자기 시간을 더한게 해당 사람이 걸리는 시간이다
// 그래서 변수는 이전에 총 걸린 시간하고 해당 인원이 걸린시간을 등록하면된다

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const timeLine = input[1].split(" ").map((v) => Number(v));
  timeLine.sort((a, b) => a - b);

  let prevTime = 0;
  const totalTime = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const current = timeLine[i];
    const waiting = current + prevTime;
    totalTime[i] = waiting;

    prevTime += current;
  }

  const answer = totalTime.reduce((prev, cur) => prev + cur, 0);

  console.log(answer);
};

solution(input);
