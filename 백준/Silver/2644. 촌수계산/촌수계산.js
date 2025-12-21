const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 촌수를 계산해야된다
// 첫번째줄에 사람의 인원수 두번째줄에 관계 촌수를 구해야할 사람 번호
// 세번째줄에 관계수 그다음부터 부모-자식 번호가 주어진다
// bfs로 visited로 마킹하면서 몇번째 촌수인지 하면된다
// 만약 친척 관계가 아니면 -1 출력
const solution = (input) => {
  const peopleN = Number(input[0]);
  const [start, end] = input[1].split(" ").map((v) => Number(v));
  const lineN = Number(input[2]);
  const grid = Array(peopleN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 3; i < 3 + lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    grid[n1].push(n2);
    grid[n2].push(n1);
  }

  const visit = Array(peopleN + 1).fill(false);
  visit[start] = true;
  const queue = [[start, 0]];
  let answer = -1;

  while (queue.length) {
    const [curPerson, dist] = queue.shift();
    if (end === curPerson) {
      answer = dist;
      break;
    }

    for (const nextPerson of grid[curPerson]) {
      if (visit[nextPerson]) continue;
      visit[nextPerson] = true;
      queue.push([nextPerson, dist + 1]);
    }
  }

  console.log(answer);
};

solution(input);
