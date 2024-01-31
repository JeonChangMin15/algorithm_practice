const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 숫자 하나가 주어지고 1이 될때까지 연산한다
// 3의 배수면 3으로 나눈다
// 2의 배수면 2로 나눈다
// 1로 뺀다
// 연산을 사용하는 횟수의 최솟값을 출력
// 첫째줄에는 횟수의 최솟값 둘째줄에는 1로되는 과정으로 공백으로 구분해서 순서대로 출력
// bfs로 진행한다 [cur, cnt, arr]
const solution = (input) => {
  const n = Number(input[0]);

  const queue = [[n, 0, [n]]];
  const visited = Array(n + 1).fill(false);
  visited[n] = true;

  while (queue.length) {
    const [value, cnt, arr] = queue.shift();

    if (value === 1) {
      console.log(cnt);
      console.log(arr.join(" "));
      return;
    }

    if (value % 3 === 0 && !visited[value / 3]) {
      queue.push([value / 3, cnt + 1, [...arr, value / 3]]);
      visited[value / 3] = true;
    }

    if (value % 2 === 0 && !visited[value / 2]) {
      queue.push([value / 2, cnt + 1, [...arr, value / 2]]);
      visited[value / 2] = true;
    }

    if (!visited[value - 1]) {
      queue.push([value - 1, cnt + 1, [...arr, value - 1]]);
      visited[value - 1] = true;
    }
  }
};

solution(input);
