const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 각 칸에는 0 이상인 숫자가 적혀있고 해당 칸 이하의 숫자만큼
// 오른쪽으로 이동이 가능하다. 가장 왼쪽에 있고 가장 오른쪽으로 이동하려고 한다
// 이때 최소 몇번 점프를 해야하는지 구해라. 오른쪽 끝으로 갈 수 없다 -1을 출력
// 첫째줄에는 칸수 둘째줄에 각 칸의 숫자들이 주어진다.
// bfs로 풀이하면된다. 1부터 칸에 적혀있는 숫자까지 방문안했으면 큐에 넣는다
// 로 이동하고 만약 n-1과 같으면 break
const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map((v) => Number(v));
  const visited = Array(n).fill(false);

  const queue = [[0, 0, arr[0]]];
  visited[0] = true;

  let answer = -1;

  while (queue.length) {
    const [pos, step, maxJump] = queue.shift();
    if (pos === n - 1) {
      console.log(step);
      return;
    }

    for (let i = 1; i <= maxJump; i++) {
      const next = pos + i;
      if (visited[next] || next >= n) continue;
      queue.push([next, step + 1, arr[next]]);
      visited[next] = true;
    }
  }

  console.log(answer);
};

solution(input);
