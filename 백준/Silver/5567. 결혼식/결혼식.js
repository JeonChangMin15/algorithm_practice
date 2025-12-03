const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 사람수, 두번째줄에 관계수다
// 3번째부터 관계가 주어지고 양방향이다
// 1로 연결된 모든 사람의 수를 구하면된다
// bfs로 탐색하면서 visited로 마킹하면된다
const solution = (input) => {
  const peopleN = Number(input[0]);
  const lineN = Number(input[1]);
  const graph = Array(peopleN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 2; i < 2 + lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const visited = Array(peopleN + 1).fill(false);
  visited[1] = true;

  const queue = [[1, 0]];

  while (queue.length) {
    const [curPerson, relation] = queue.shift();
    if (relation > 1) break;

    for (const nextPerson of graph[curPerson]) {
      if (visited[nextPerson]) continue;
      queue.push([nextPerson, relation + 1]);
      visited[nextPerson] = true;
    }
  }

  console.log(visited.filter((v) => v === true).length - 1);
};

solution(input);
