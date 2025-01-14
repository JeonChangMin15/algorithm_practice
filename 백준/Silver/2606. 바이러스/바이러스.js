const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const computerN = Number(input[0]);
  const lineN = Number(input[1]);
  const grid = Array(computerN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 2; i < 2 + lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    grid[n1].push(n2);
    grid[n2].push(n1);
  }

  const visited = Array(computerN + 1).fill(false);

  const dfs = (curNode) => {
    visited[curNode] = true;

    for (const nextNode of grid[curNode]) {
      if (!visited[nextNode]) {
        dfs(nextNode);
      }
    }
  };

  dfs(1);

  console.log(visited.filter((v) => v === true).length - 1);
};

solution(input);
