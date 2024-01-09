const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1. 임의의 서로 다른 두 에너지 드링크를 고른다
// 2. 한쪽에너지 드링크를 다른쪽 에너지 드링크에 붙는데 절반만 넣는다
// 3. 이렇게해서 하나의 에너지 드링크만 남을때가지 반복해서 드링크양을 최대로 만든다
// 첫째줄에 드링크수 둘째줄에 드링크 용량이 주어진다
// 오름차순으로 만들고 가장큰 용량을 제외한 나머지의 합 절반과 가장큰 용량을 더하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const size = input[1].split(" ").map((v) => Number(v));
  size.sort((a, b) => a - b);

  const max = size.pop();
  const res = size.reduce((prev, cur) => prev + cur, 0) / 2;

  console.log(max + res);
};

solution(input);
