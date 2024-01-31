const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 스카이콩콩의 힘 A,B 현재위치 목표위치가 주어진다
// +1, -1 이동가능하다. -+A, -+B, 현재위치의 A,B배 위치로 이동가능하다
// 최소한의 횟수를 구해야된다
// bfs로 케이스
const solution = (input) => {
  const [A, B, current, target] = input[0].split(" ").map((v) => Number(v));
  const dirs = [1, -1, -A, A, -B, B];

  const queue = [[current, 0]];

  const visited = Array(100001).fill(false);
  visited[current] = true;

  while (queue.length) {
    const [position, cnt] = queue.shift();

    if (position === target) {
      console.log(cnt);
      return;
    }

    if (position * A <= 100001 && !visited[position * A]) {
      queue.push([position * A, cnt + 1]);
      visited[position * A] = true;
    }

    if (position * B <= 100001 && !visited[position * B]) {
      queue.push([position * B, cnt + 1]);
      visited[position * B] = true;
    }

    for (let dir of dirs) {
      const next = position + dir;

      if (next >= 0 && !visited[next]) {
        queue.push([next, cnt + 1]);
        visited[next] = true;
      }
    }
  }
};

solution(input);
