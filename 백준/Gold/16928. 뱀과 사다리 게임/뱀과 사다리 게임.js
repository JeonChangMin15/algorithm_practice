const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, m] = input[0].split(" ").map((v) => Number(v));
  const stair = Array(101).fill(0);
  const snake = Array(101).fill(0);
  const visited = Array(101).fill(Infinity);

  for (let i = 1; i <= n; i++) {
    const [u, v] = input[i].split(" ").map((v) => Number(v));
    stair[u] = v;
  }

  for (let i = n + 1; i < input.length; i++) {
    const [u, v] = input[i].split(" ").map((v) => Number(v));
    snake[u] = v;
  }

  const queue = [[1, 0]];
  visited[1] = 0;

  let answer = Infinity;

  // 도착지점의 마킹된 숫자보다 지금 숫자가 크면 안가는걸로
  while (queue.length) {
    const [position, cnt] = queue.shift();
    if (cnt >= answer) continue;

    if (position === 100) {
      answer = Math.min(answer, cnt);
    }

    if (stair[position] !== 0 && visited[stair[position]] >= cnt) {
      queue.push([stair[position], cnt]);
      visited[stair[position]] = cnt;
      visited[position] = cnt;
    }

    if (snake[position] !== 0 && visited[snake[position]] >= cnt) {
      queue.push([snake[position], cnt]);
      visited[snake[position]] = cnt;
      visited[position] = cnt;
    }

    for (let i = 1; i <= 6; i++) {
      const next = position + i;

      if (next > 100 || visited[next] <= cnt + 1) continue;
      visited[next] = cnt + 1;

      if (stair[next] !== 0) {
        queue.push([stair[next], cnt + 1]);
        visited[stair[next]] = cnt + 1;
        continue;
      }

      if (snake[next] !== 0) {
        queue.push([snake[next], cnt + 1]);
        visited[snake[next]] = cnt + 1;
        continue;
      }

      queue.push([next, cnt + 1]);
    }
  }

  console.log(answer);
};

solution(input);
