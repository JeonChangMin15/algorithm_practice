const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 현재값에서 2를 곱하거나 10을 곱한 후 +1을 할 수 있다
// A -> B로 바꾸는데 필요한 연산의 최소값
// 만들 수 없으면 -1을 출력
// 현재값이 타겟보다 크면 continue
// 큐에 [value, cnt]
const solution = (input) => {
  const [start, end] = input[0].split(" ").map((v) => Number(v));
  const queue = [[start, 1]];
  let answer = -1;

  while (queue.length) {
    const [val, cnt] = queue.shift();
    if (val > end) {
      continue;
    }

    if (val === end) {
      answer = cnt;
      break;
    }

    queue.push([val * 2, cnt + 1]);
    queue.push([val * 10 + 1, cnt + 1]);
  }

  console.log(answer);
};

solution(input);
