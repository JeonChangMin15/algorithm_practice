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
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  let answer = 0;
  const visited = Array(nodeN + 1).fill(false);

  const dfs = (node) => {
    if (visited[node]) return;
    visited[node] = true;

    for (const nextNode of graph[node]) {
      dfs(nextNode);
    }
  };

  for (let i = 1; i <= nodeN; i++) {
    if (visited[i]) continue;
    dfs(i);
    answer += 1;
  }

  console.log(answer);
};

solution(input);
