const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 컴퓨터수 두번째줄에 간선수
// 그다움줄부터 컴퓨터 쌍이 주어진다
// 1번 감염시켯을때 감염된 컴퓨터의 수를 구해라
// dfs로 visitid 마킹하면된다
const solution = (input) => {
  const computerN = Number(input[0]);
  const lineN = Number(input[1]);
  const graph = Array(computerN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 2; i < 2 + lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const visited = Array(computerN + 1).fill(false);

  const dfs = (curNode) => {
    visited[curNode] = true;

    for (const nextNode of graph[curNode]) {
      if (visited[nextNode]) continue;
      dfs(nextNode);
    }
  };

  dfs(1);

  console.log(visited.filter((v) => v === true).length - 1);
};

solution(input);
