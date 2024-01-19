const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [peopleN, relationN] = input[0].split(" ").map((v) => Number(v));

  const graph = {};

  for (let i = 0; i < peopleN; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const visited = Array(peopleN).fill(false);
  let isValidRelation = false;

  const dfs = (node, depth) => {
    visited[node] = true;

    if (depth === 4) {
      isValidRelation = true;
      return;
    }

    for (let i = 0; i < graph[node].length; i++) {
      const nextNode = graph[node][i];
      if (!visited[nextNode]) {
        dfs(nextNode, depth + 1);
      }
    }

    visited[node] = false;
  };

  for (let i = 0; i < peopleN; i++) {
    dfs(i, 0);
  }

  if (isValidRelation) {
    console.log(1);
  } else {
    console.log(0);
  }
};

solution(input);
