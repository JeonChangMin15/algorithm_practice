const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const solution = (input) => {
  const computerN = Number(input[0]);
  const networkN = Number(input[1]);
  const graph = {};
  for (let i = 1; i <= computerN; i++) {
    graph[i] = [];
  }

  for (let i = 2; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const visited = new Set();

  const dfs = (node) => {
    visited.add(node);

    for (let nextNode of graph[node]) {
      if (!visited.has(nextNode)) {
        dfs(nextNode);
      }
    }
  };

  dfs(1);

  console.log(visited.size - 1);
};

solution(input);
