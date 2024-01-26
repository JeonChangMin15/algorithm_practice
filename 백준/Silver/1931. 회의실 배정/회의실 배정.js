const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 회의갯수 둘째줄부터 회의 시작과 끝이 담겨져있다
// 회의실은 하나이고 겹치지지않도록 회의실을 사용할 수 있는 회의의 최대의 개수를 찾는다
// 시작과 끝나는 시간이 같을 수 있다.
// 시작시간을 기준으로 오름차순으로 정렬한다
// start, finish 두개의 변수를 두고 start가 크거나 같고 finish보다 작거나 같으면 바꾸고
// start가 finish보다 크면 교체 강의실 +1
const solution = (input) => {
  const n = Number(input[0]);

  const times = [];
  for (let i = 1; i < input.length; i++) {
    times.push(input[i].split(" ").map((v) => Number(v)));
  }
  times.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let answer = 1;

  let prevStartTime = times[0][0];
  let prevFinishTime = times[0][1];

  for (let i = 1; i < times.length; i++) {
    const [start, finish] = times[i];

    if (start === prevFinishTime && finish === start) {
      prevStartTime = start;
      prevFinishTime = finish;
      answer += 1;
      continue;
    }

    if (start >= prevStartTime && finish <= prevFinishTime) {
      prevStartTime = start;
      prevFinishTime = finish;
      continue;
    }

    if (start >= prevFinishTime) {
      prevStartTime = start;
      prevFinishTime = finish;
      answer += 1;
      continue;
    }
  }

  console.log(answer);
};

solution(input);
