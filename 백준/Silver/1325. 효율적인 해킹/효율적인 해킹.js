const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 n,m이 주어지고 컴퓨터수, 노드수가 주어진다
// 노드는 n1, n2가 주어지고 n2의 그래프에 n1이 들어가는 구도이다
// bfs로 각 노드를 전부 다 탐색을 해서 하위 노드의 개수를 출력해야된다
// 가장 많이 하위노드를 가진 노드를 오름차순으로 출력한다.
const solution = (input) => {
  const [n, m] = input[0].split(" ").map((v) => Number(v));
  const graph = {};
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n2].push(n1);
  }

  const childNodeCount = Array(n + 1).fill(0);

  const bfs = (node) => {
    const queue = [node];
    const visited = Array(n + 1).fill(false);
    visited[node] = true;

    while (queue.length) {
      const cur = queue.shift();
      for (let i = 0; i < graph[cur].length; i++) {
        const next = graph[cur][i];
        if (!visited[next]) {
          visited[next] = true;
          childNodeCount[node] += 1;
          queue.push(next);
        }
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    bfs(i);
  }

  const maxCnt = Math.max(...childNodeCount);
  const answer = [];
  for (let i = 1; i < childNodeCount.length; i++) {
    if (childNodeCount[i] === maxCnt) answer.push(i);
  }

  console.log(answer.join(" "));
};

solution(input);
