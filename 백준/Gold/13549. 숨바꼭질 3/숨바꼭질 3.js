const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 수빈이의 위치N과 동생이 있는 위치K가 주어진다.
// X일때 걷는다면 1초후에 X-1, X+1로 이동 순간이동하는 경우에는 0초후에 2*X의 위치로 이동
// 가장 빠른 시간이 몇초 후 인지 구해라
// 먼저 큐에다가 [거리, 시간]을 넣고 현재 거리*2 === 동생 or 현재거리===동생위치면 리턴
// 그게 아니라면 현재 거리에서 -1 , +1한 값과 시간+1을 넣어준다

const solution = (input) => {
  const [position, target] = input[0].split(" ").map((v) => Number(v));

  if (position >= target) {
    console.log(Math.abs(position - target));
    return;
  }

  const queue = [];
  queue.push([position, 0]);
  const visited = Array(100000).fill(false);
  visited[position] = true;

  while (queue.length) {
    const [current, time] = queue.shift();

    if (current * 2 === target || current === target) {
      console.log(time);
      return;
    }

    if (current > target && !visited[current - 1]) {
      visited[current - 1] = true;
      queue.push([current - 1, time + 1]);
      continue;
    }
    if (current < target && !visited[current * 2] && current * 2 <= 100000) {
      visited[current * 2] = true;
      queue.push([current * 2, time]);
    }
    if (current - 1 >= 0 && !visited[current - 1]) {
      visited[current - 1] = true;
      queue.push([current - 1, time + 1]);
    }
    if (!visited[current + 1]) {
      visited[current + 1] = true;
      queue.push([current + 1, time + 1]);
    }
  }
};

solution(input);
