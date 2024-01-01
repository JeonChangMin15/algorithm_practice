const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");


// 첫번째줄에 N(노드개수) M(선갯수) V(시작점 번호)
// dfs, bfs로 탐색한 결과를 출력 정점이 여러개의 경우에는 정점이 작은것을 먼저 방문
// 먼저 그래프를 만들고 각 그래프를 오름차순으로 sort 중복제거
const solution = (input) => {
  const [nodeN, connectionN, start] = input[0].split(" ").map((v) => Number(v));
  const dfsVisited = [];
  const graph = {};

  for (let i = 1; i <= nodeN; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < input.length; i++) {
    const [n, m] = input[i].split(" ").map((v) => Number(v));
    graph[n].push(m);
    graph[m].push(n);
  }

  for (let i = 1; i <= nodeN; i++) {
    graph[i].sort((a, b) => a - b);
  }

  const dfs = (node) => {
    if (dfsVisited.includes(node)) return;
    dfsVisited.push(node);

    for (let i = 0; i < graph[node].length; i++) {
      dfs(graph[node][i]);
    }
  };

  dfs(start);

  console.log(dfsVisited.join(" "));

  const bfsVisited = [];
  const queue = [start];
  const visited = new Set();
  visited.add(start);

  while (queue.length) {
    const node = queue.shift();
    bfsVisited.push(node);

    for (let i = 0; i < graph[node].length; i++) {
      const nextNode = graph[node][i];

      if (!visited.has(nextNode)) {
        visited.add(nextNode);
        queue.push(nextNode);
      }
    }
  }

  console.log(bfsVisited.join(" "));
};

solution(input);
