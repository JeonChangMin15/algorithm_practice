const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 드링크의 수, 두번째줄에 드링크의 양이 주어진다
// 임의 두개의 드링크를 고른후 둘중 하나를 반으로 줄이고 합친다
// 드링크의 양을 최대로 한다
//
const solution = (input) => {
  const n = Number(input[0]);
  const drink = input[1].split(" ").map((v) => Number(v));
  drink.sort((a, b) => a - b);

  const res = drink.slice(0, n - 1).reduce((prev, cur) => prev + cur, 0);

  console.log(res / 2 + drink[n - 1]);
};

solution(input);
