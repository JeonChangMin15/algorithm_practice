const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");


// 첫번째줄에는 문제의 수 두번째줄에는 RB가 공백없이 주어진다
// 덩어리의 개수를 각각 구해야되나?
const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split("");

  let blue = 0;
  let red = 0;
  let prev = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      prev = arr[i];
      if (arr[i] === "R") red += 1;
      else blue += 1;
    }
  }

  const min = Math.min(blue, red);

  console.log(min + 1);
};

solution(input);
