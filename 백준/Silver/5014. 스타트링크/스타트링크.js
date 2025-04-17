const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// F층으로 이루어진 건물을 G층으로 가려고한다
// 지금있는곳은 S층이고 U, D 버튼을 눌러서 이동이 가능하다
// 1층부터 시작이다
// 첫번째줄에 F,S,G,U,D 가 주어진다
// 최소 몇번 버튼을 눌러야하는지 최솟값을 출력
// 이동할 수 없으면 use the stairs를 출력
// bfs로 u,d를 visited와 갈 수있는지 체킹하면서 구하면된다
const solution = (input) => {
  const [lastFloor, start, end, up, down] = input[0]
    .split(" ")
    .map((v) => Number(v));

  const visited = Array(lastFloor + 1).fill(false);
  const queue = [[start, 0]];
  let answer = "use the stairs";

  while (queue.length) {
    const [cur, cnt] = queue.shift();

    if (cur === end) {
      answer = cnt;
      break;
    }

    if (cur + up <= lastFloor && !visited[cur + up]) {
      queue.push([cur + up, cnt + 1]);
      visited[cur + up] = true;
    }

    if (cur - down >= 1 && !visited[cur - down]) {
      queue.push([cur - down, cnt + 1]);
      visited[cur - down] = true;
    }
  }

  console.log(answer);
};

solution(input);
