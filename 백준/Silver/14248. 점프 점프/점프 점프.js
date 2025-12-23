const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번재줄에 돌의 갯수 두번째줄에 돌이 주어진다
// 해당 위치에 적힌 숫자만큼 왼, 오른쪽을 점프 가능하다
// 세번재줄에는 출발점이 주어진다
// bfs로 visited로 마킹하면서 탐색한 후 true인 갯수를 출력
const solution = (input) => {
  const rockN = Number(input[0]);
  const arr = input[1].split(" ").map((v) => Number(v));
  const start = Number(input[2]) - 1;

  const visited = Array(rockN + 1).fill(false);
  visited[start] = true;
  const queue = [start];

  while (queue.length) {
    const position = queue.shift();
    const nextStep = arr[position];

    if (position - nextStep >= 0 && !visited[position - nextStep]) {
      queue.push(position - nextStep);
      visited[position - nextStep] = true;
    }

    if (position + nextStep < rockN && !visited[position + nextStep]) {
      queue.push(position + nextStep);
      visited[position + nextStep] = true;
    }
  }

  console.log(visited.filter((v) => v === true).length);
};

solution(input);
