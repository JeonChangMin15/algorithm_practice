const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// -1,+1, -A, A, B,-B 그리고 해당 위치에서 A,B배
// 첫번째줄에 A,B 현재 위치, 타겟 위치가 주어진다
// 최소이동횟수를 출력
// 그렇다면 bfs로 탐색하면된다
// 0 100000 제한 걸려있다
const solution = (input) => {
  const [A, B, start, end] = input[0].split(" ").map((v) => Number(v));
  const queue = [[start, 0]];
  const visited = Array(100001).fill(false);
  visited[start] = true;

  const move = [-1, 1, A, -A, B, -B];

  while (queue.length) {
    const [pos, cnt] = queue.shift();
    if (pos === end) {
      console.log(cnt);
      break;
    }

    const jump1 = pos * A;
    const jump2 = pos * B;

    if (jump1 <= 100000 && !visited[jump1]) {
      queue.push([jump1, cnt + 1]);
      visited[jump1] = true;
    }

    if (jump2 <= 100000 && !visited[jump2]) {
      queue.push([jump2, cnt + 1]);
      visited[jump2] = true;
    }

    for (const dx of move) {
      const nextX = pos + dx;
      if (nextX >= 0 && nextX <= 100000 && !visited[nextX]) {
        queue.push([nextX, cnt + 1]);
        visited[nextX] = true;
      }
    }
  }
};

solution(input);
