const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 작업수와 정보의 개수가 주어진다
// 두번째줄부터 정보의 개수만큼 n1 -> n2간선이 주어지고
// 마지막줄에 끝내야할 작업이 주어진다
// 끝내야할 작업을 하기전에 먼저 해야하는일의 개수
// 간선에서 graph[n2].push(n1)을 넣어준다음에
// dfs로 탐색을 해주면된다
const solution = (input) => {
  const [nodeN, lineN] = input[0].split(" ").map((v) => Number(v));
  const graph = Array(nodeN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 1; i <= lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n2].push(n1);
  }
  const workNode = Number(input[lineN + 1]);
  const visited = Array(nodeN + 1).fill(false);

  const dfs = (node) => {
    if (visited[node]) return 0;
    visited[node] = true;
    let cnt = 1;

    for (const nextNode of graph[node]) {
      cnt += dfs(nextNode);
    }

    return cnt;
  };

  const answer = dfs(workNode);

  console.log(answer - 1);
};

solution(input);
