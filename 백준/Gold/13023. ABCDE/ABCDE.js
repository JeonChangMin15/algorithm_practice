const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 사람수와 관계수가 주어진다
// 두번째줄부터 관계들이 주어진다
// 4 depth 관계가 있는지 구해야된다
// 각 지점마다 다 dfs로 체킹을 해봐야된다
const solution = (input) => {
  const [peopleN, relationN] = input[0].split(" ").map((v) => Number(v));
  const grid = Array(peopleN)
    .fill(0)
    .map((v) => []);

  for (let i = 1; i <= relationN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    grid[n1].push(n2);
    grid[n2].push(n1);
  }
  const visited = Array(peopleN).fill(false);
  let isValid = false;

  const dfs = (node, depth) => {
    if (visited[node]) return;
    visited[node] = true;

    if (depth === 4) {
      isValid = true;
      return;
    }

    for (const nextNode of grid[node]) {
      dfs(nextNode, depth + 1);
    }

    visited[node] = false;
  };

  for (let i = 0; i < peopleN; i++) {
    dfs(i, 0);
  }

  console.log(isValid ? 1 : 0);
};

solution(input);
