const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 N이 주어지고
// N xN 그리드가 주어진다
// 0,0 에서 시작해서 N-1,N-1이면 된다
// 해당 바닥의 숫자만큼 오른쪽 or 아래로만 갈 수 있다
// 마지막칸에만 -1이 나머지는 0-100 정수
// 도달하면 HaruHaru, 안되면 Hing
// bfs로 visited 찍으면서 가면된다.

const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }
  const visited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));

  const queue = [[0, 0]];
  visited[0][0] = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    if (grid[x][y] === -1) {
      console.log("HaruHaru");
      return;
    }
    const step = grid[x][y];

    if (x + step < n && !visited[x + step][y]) {
      queue.push([x + step, y]);
      visited[x + step][y] = true;
    }

    if (y + step < n && !visited[x][y + step]) {
      queue.push([x, y + step]);
      visited[x][y + step] = true;
    }
  }

  console.log("Hing");
};

solution(input);
