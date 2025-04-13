const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 수빈이 위치와 동생 위치가 주어짐
// 1초후에 앞뒤 한칸 or 2배 위치로 이동 가능
// 동생 위치로 갈 수 있는 최소 시간을 구해라
// bfs로 각 조건마다 visited 검사하면서 가면된다
const solution = (input) => {
  const [start, end] = input[0].split(" ").map((v) => Number(v));
  const queue = [[start, 0]];
  const visited = Array(100001).fill(false);
  visited[start] = true;

  while (queue.length) {
    const [pos, time] = queue.shift();
    if (pos === end) {
      console.log(time);
      break;
    }

    if (pos * 2 <= 100000 && !visited[pos * 2]) {
      queue.push([pos * 2, time + 1]);
      visited[pos * 2] = true;
    }

    if (pos - 1 >= 0 && !visited[pos - 1]) {
      queue.push([pos - 1, time + 1]);
      visited[pos - 1] = true;
    }

    if (pos + 1 <= 100000 && !visited[pos + 1]) {
      queue.push([pos + 1, time + 1]);
      visited[pos + 1] = true;
    }
  }
};

solution(input);
