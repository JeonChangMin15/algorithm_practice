const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 1번 노드가 감염됐을때 감염된 컴퓨터 수를 구해라
// 첫번째줄에 컴퓨터수 두번째줄에 연결 수
// dfs로 visited로 체킹하면서 돌면 된다
// dfs(1) 그래프 만들어서 풀면됨
const solution = (input) => {
  const computerN = Number(input[0]);
  const lineN = Number(input[1]);
  const graph = {};

  for (let i = 1; i <= computerN; i++) {
    graph[i] = [];
  }

  for (let i = 2; i < 2 + lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const visited = Array(computerN + 1).fill(false);

  const dfs = (node) => {
    visited[node] = true;

    for (const nextNode of graph[node]) {
      if (visited[nextNode]) continue;
      dfs(nextNode);
    }
  };

  dfs(1);

  console.log(visited.filter((v) => v === true).length - 1);
};

solution(input);
