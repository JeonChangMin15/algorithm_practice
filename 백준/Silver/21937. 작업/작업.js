const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [nodeN, lineN] = input[0].split(" ").map((v) => Number(v));
  const graph = Array(nodeN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 1; i <= lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n2].push(n1);
  }

  const startNode = Number(input[input.length - 1]);

  const visited = Array(nodeN + 1).fill(false);

  const dfs = (curNode) => {
    if (visited[curNode]) return;

    visited[curNode] = true;

    for (const nextNode of graph[curNode]) {
      dfs(nextNode);
    }
  };

  dfs(startNode);

  console.log(visited.filter((v) => v === true).length - 1);
};

solution(input);
