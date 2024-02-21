const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 총 F층 건물이고 G층이 목표지점이고 S지점에서 시작을한다
// U D밖에 없고 G층에 도착하려면 최소 몇번을 눌러야하는지 알아야한다
// 만약 못가면 use the stairs를 출력한다
// bfs와 visited를 사용하면 되는 문제다
/// 첫줄은 F S G U D가 주어진다 1층부터 F층까지 있는 건물이라고 생각하면 된다
const solution = (input) => {
  const [maxFloor, start, target, up, down] = input[0]
    .split(" ")
    .map((v) => Number(v));

  const queue = [[start, 0]];
  const visited = Array(maxFloor + 1).fill(false);
  visited[start] = true;

  while (queue.length) {
    const [currentFloor, cnt] = queue.shift();

    const upNext = currentFloor + up;
    const downNext = currentFloor - down;

    if (currentFloor === target) {
      console.log(cnt);
      return;
    }

    if (upNext <= maxFloor && !visited[upNext]) {
      queue.push([upNext, cnt + 1]);
      visited[upNext] = true;
    }

    if (downNext >= 1 && !visited[downNext]) {
      queue.push([downNext, cnt + 1]);
      visited[downNext] = true;
    }
  }

  console.log("use the stairs");
};

solution(input);
