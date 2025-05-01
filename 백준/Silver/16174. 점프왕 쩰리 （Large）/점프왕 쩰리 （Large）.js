const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 0,0에서 시작 정사각형 그리드
// 오른쪽과 아래로만 이동 가능하다
// 가장 끝에 도달하면 게임은 종료
// 한번에 이동 가능한 칸수는 현재 밟고 있는 칸에 쓰여 있는 수
// 맨 아래 칸에 -1로 쓰여 있고 나머지 칸에 0부터 100 이하 정수
// 도달할 수 있으면 HaruHaru 불가능하면 Hing
// bfs로 해당 위치에서 +grid[x][y] 만큼 움직이는데 방문한 지점과 그리드 크기를 유효
// 하면 가면된다 끝지점에 도달하면 HaruHaru를 할당하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = "Hing";

  const queue = [[0, 0]];
  const visited = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    if (grid[x][y] === -1) {
      answer = "HaruHaru";
      break;
    }

    const jumpN = grid[x][y];

    if (x + jumpN < n && !visited[x + jumpN][y]) {
      queue.push([x + jumpN, y]);
      visited[x + jumpN][y] = true;
    }

    if (y + jumpN < n && !visited[x][y + jumpN]) {
      queue.push([x, y + jumpN]);
      visited[x][y + jumpN] = true;
    }
  }

  console.log(answer);
};

solution(input);
