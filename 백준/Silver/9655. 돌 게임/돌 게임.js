const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 탁자위에 돌 N개 상근이와 창여이가 턴을 번갈아가면서 돌을 가져간다
// 1개 또는 3개 마지막돌을 가져가는 사람이이긴다
// 두 사람이 완벽하게 게임을 했을때
// 상근이가 이기면 SK, 창영이가 이기면 CY

const solution = (input) => {
  const n = Number(input[0]);

  if (n % 2 === 1) {
    console.log("SK");
  } else {
    console.log("CY");
  }
};

solution(input);
