const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [nodeN, lineN, startNode] = input[0].split(" ").map((v) => Number(v));
  const graph = {};

  for (let i = 1; i <= nodeN; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  for (let i = 1; i <= nodeN; i++) {
    graph[i].sort((a, b) => a - b);
  }

  const visited = Array(nodeN + 1).fill(false);
  const distance = Array(nodeN + 1).fill(0);
  let order = 1;

  const dfs = (curNode) => {
    if (visited[curNode]) return;

    visited[curNode] = true;
    distance[curNode] = order;
    order += 1;

    for (let nextNode of graph[curNode]) {
      if (visited[nextNode]) continue;
      dfs(nextNode);
    }
  };

  dfs(startNode);

  const answer = distance.slice(1).join("\n");

  console.log(answer);
};

solution(input);
