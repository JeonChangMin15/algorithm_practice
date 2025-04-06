// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n");

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 돌다리의 수(1부터 시작)
// 두번째줄에 돌의 각 위치에서 점프 할 수 있는 거리
// 다음 줄에는 출발점 s가 주어진다
// 방문 가능한 돌들의 갯수를 구해라
// bfs로 visited를 마킹하면서 좌우로 0,n-1 범위 확인하면서 가면된다
// vistied가 true 갯수 반환
const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map((v) => Number(v));
  const start = Number(input[2]) - 1;

  const queue = [start];
  const visited = Array(n).fill(false);
  visited[queue] = true;

  while (queue.length) {
    const curPos = queue.shift();
    const nextLeftPos = curPos - arr[curPos];
    const nextRightPos = curPos + arr[curPos];

    if (nextLeftPos >= 0 && !visited[nextLeftPos]) {
      queue.push(nextLeftPos);
      visited[nextLeftPos] = true;
    }

    if (nextRightPos < n && !visited[nextRightPos]) {
      queue.push(nextRightPos);
      visited[nextRightPos] = true;
    }
  }

  console.log(visited.filter((v) => v === true).length);
};

solution(input);
