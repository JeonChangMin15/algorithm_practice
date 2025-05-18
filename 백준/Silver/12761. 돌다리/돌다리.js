const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// bfs로 너비 탐색을 진행하면된다
// 방문한 지점은 visited로 마킹
// 첫번째줄에 powerA, powerB, start, end가 주어진다
// 움직일 수 있는건 +1, -1, A,B만큼 좌우로 그리고 A배, B배 위치로 이동가능
// 0부터 100000이고 최소 이동횟수 출력
const solution = (input) => {
  const [powerA, powerB, start, end] = input[0]
    .split(" ")
    .map((v) => Number(v));

  const visited = Array(100001).fill(false);
  visited[start] = true;
  const queue = [[start, 0]];

  while (queue.length) {
    const [pos, cnt] = queue.shift();
    if (pos === end) {
      console.log(cnt);
      break;
    }

    const nextPosArr = [
      pos * powerA,
      pos * powerB,
      pos + powerA,
      pos - powerA,
      pos + powerB,
      pos - powerB,
      pos + 1,
      pos - 1,
    ];

    for (const nextPos of nextPosArr) {
      if (nextPos >= 0 && nextPos <= 100000 && !visited[nextPos]) {
        queue.push([nextPos, cnt + 1]);
        visited[nextPos] = true;
      }
    }
  }
};

solution(input);
