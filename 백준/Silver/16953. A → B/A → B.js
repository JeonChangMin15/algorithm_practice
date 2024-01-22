const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자 2개가 주어지고 A를 B로 바꾸는데 연산의 최솟값에 1을 더한값을 출력
// 2를 곱하거나 10을 곱하고 1을 더하는 연산 두가지가 있다.
// bfs로 풀면될거같은데
const solution = (input) => {
  const [start, target] = input[0].split(" ").map((v) => Number(v));

  const queue = [[start, 0]];

  while (queue.length) {
    const [value, cnt] = queue.shift();

    if (value === target) {
      console.log(cnt + 1);
      return;
    }

    if (value * 10 + 1 <= target) {
      queue.push([value * 10 + 1, cnt + 1]);
    }

    if (value * 2 <= target) {
      queue.push([value * 2, cnt + 1]);
    }
  }

  console.log(-1);
};

solution(input);
