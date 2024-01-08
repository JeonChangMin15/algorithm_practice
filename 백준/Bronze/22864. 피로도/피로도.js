const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 A,B,C와 마지노선M 이 주어진다
// 하루에 한 시간 일하면 피로도는 A만큼쌓이고 B만큼 처리
// 한시간을 쉬면 C만큼 피로도 줄어듬. 피로도가 M이상 넘기지않는다.
// 처음 피로도는 0
// 5 3 2 10
// work tired time 변수로
// 먼저 tired + A가 M보다 작으면 time +1, work +B, tired +A
// tired > M break
//
const solution = (input) => {
  const [A, B, C, limit] = input[0].split(" ").map((v) => Number(v));
  let time = 0;
  let work = 0;
  let tired = 0;

  if (A > limit) {
    console.log(0);
    return;
  }

  while (time < 24) {
    if (tired > limit) break;

    if (tired + A <= limit) {
      work += B;
      tired += A;
    } else {
      tired = tired - C >= 0 ? tired - C : 0;
    }

    time += 1;
  }
  console.log(work);
};

solution(input);
