const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1부터 N개의 섬이 있고 첫째줄에 N이 주어진다
// N-2개의 줄에는 두섬을 잇는 두 섬의 번호가 주어진다
// 서로 다른 두 섬을 다리로 이어서 다시 어떤 두 섬 사이든 왕복할 수 있도록
// 다리로 이을 두 섬의 번호를 출력한다
// 먼저 그래프로 두섬 사이의 관계를 저장한다
// dfs로 1번 섬부터 탐색을 해서 건널 수 있는 섬을 마킹한다
// 그리고나서 마킹한 섬과 마킹안된섬을 하나씩 골라서 출력하면된다
const solution = (input) => {
  const n = Number(input[0]);
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

  const dfs = (node) => {
    if (visited[node]) return;
    visited[node] = true;

    for (let nextNode of graph[node]) {
      dfs(nextNode);
    }
  };

  dfs(1);

  const visitLand = [];
  const notVisitLand = [];

  for (let i = 1; i < n + 1; i++) {
    if (visited[i]) {
      visitLand.push(i);
    } else {
      notVisitLand.push(i);
    }
  }

  console.log(visitLand[0], notVisitLand[0]);
};

solution(input);
