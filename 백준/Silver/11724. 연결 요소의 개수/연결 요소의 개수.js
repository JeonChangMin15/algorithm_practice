const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫째줄에 정점의 개수 간선의 갯수가 주어진다
// 1부터 N까지 dfs로 탐색하면된다
const solution = (input) => {
  const [n, m] = input[0].split(" ").map((v) => Number(v));

  const graph = {};

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }
  const visited = Array(n + 1).fill(false);
  let answer = 0;

  const dfs = (node) => {
    if (visited[node]) return;
    visited[node] = true;

    for (let i = 0; i < graph[node].length; i++) {
      const nextNode = graph[node][i];
      dfs(nextNode);
    }
  };

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    dfs(i);
    answer += 1;
  }

  console.log(answer);
};

solution(input);
