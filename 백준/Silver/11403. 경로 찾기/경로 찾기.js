const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에는 N 두번째줄부터는 그래프가 주어진다
// i,j로 가는 간선이 주어지면 1 없으면 0
// 먼저 0부터 n-1까지 그래프를 만들고 dfs로 탐색을한다
// 0부터 n-1까지 반복문으로 dfs를 돌고 해당 방문한 모든 지점을 배열에 담아서
// 마킹을한다
const solution = (input) => {
  const n = Number(input[0]);

  const grid = [];
  const graph = {};

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        graph[i].push(j);
      }
    }
  }

  let answer = Array(n)
    .fill(0)
    .map((v) => Array(n).fill(0));

  const dfs = (start, node, depth, visited) => {
    if (visited[node]) return;

    if (depth > 0) {
      answer[start][node] = 1;
      visited[node] = true;
    }

    for (let i = 0; i < graph[node].length; i++) {
      dfs(start, graph[node][i], depth + 1, visited);
    }
  };

  for (let i = 0; i < n; i++) {
    const visited = Array(n).fill(false);
    dfs(i, i, 0, visited);
  }

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i].join(" "));
  }
};

solution(input);
