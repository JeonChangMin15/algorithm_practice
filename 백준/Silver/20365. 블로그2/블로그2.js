const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 문제의 수, 두번째줄에 N개의 문자가 공백없이 주어진다
// 연속된건 하나의 색깔로 생각하면된다
//
const solution = (input) => {
  const n = Number(input[0]);
  const colorWork = input[1];
  let prevColor = "";
  let blueN = 0;
  let redN = 0;

  for (let i = 0; i < n; i++) {
    const color = colorWork[i];
    if (color === "R" && color !== prevColor) {
      redN += 1;
      prevColor = "R";
    }

    if (color === "B" && color !== prevColor) {
      blueN += 1;
      prevColor = "B";
    }
  }

  console.log(Math.min(blueN, redN) + 1);
};

solution(input);
