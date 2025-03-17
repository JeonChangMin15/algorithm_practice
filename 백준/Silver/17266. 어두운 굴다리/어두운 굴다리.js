const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 길이가 주어진다 두번째줄에 가로등의 개수가 주어진다
// 다음줄에 가로등의 위치가 주어진다
// 굴다리 길이를 다 커버가 가능한 가로등의 최소 높이를 출력
// 최대 길이는 굴다리 길이 최소 길이는 1
// 먼저 해당 길이가 다 커버하는지 알 수 있는 방법은?

const solution = (input) => {
  const len = Number(input[0]);
  const n = Number(input[1]);
  const position = input[2].split(" ").map((v) => Number(v));

  let lt = 1;
  let rt = len;
  let answer = len;

  while (lt <= rt) {
    const lightArea = [];
    const mid = Math.floor((lt + rt) / 2);

    position.forEach((pos) => {
      lightArea.push([pos - mid, pos + mid]);
    });

    let prevStart = 0;
    let prevEnd = 0;
    let isValid = true;

    for (const [start, end] of lightArea) {
      if (start > prevEnd) {
        isValid = false;
        break;
      } else {
        prevStart = start;
        prevEnd = end;
      }
    }

    if (isValid && prevEnd >= len) {
      answer = Math.min(mid, answer);
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  console.log(answer);
};

solution(input);
