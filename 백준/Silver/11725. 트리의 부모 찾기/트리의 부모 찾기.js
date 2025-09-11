const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 트리의 루트를 1이라고 정한다
// 각 노드의 부모를 구한다
// 첫번째줄에 노드의 갯수가 주어진다. 두번째줄부터 두 정점이 주어진다
// 2번노드부터 각 노드의 부모 노드번호를 출력한다
// dfs로 visited로 마킹하면서 1번부터 돌린다
// dfs(prev, cur)로 하면서 parent[cur] = prev로 하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const graph = Array(n + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 1; i < n; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const vistied = Array(n + 1).fill(false);
  const parentArr = Array(n + 1).fill(0);

  const dfs = (prev, cur) => {
    vistied[cur] = true;
    parentArr[cur] = prev;

    for (const nextNode of graph[cur]) {
      if (vistied[nextNode]) continue;
      dfs(cur, nextNode);
    }
  };

  dfs(0, 1);

  console.log(parentArr.slice(2).join("\n"));
};

solution(input);
