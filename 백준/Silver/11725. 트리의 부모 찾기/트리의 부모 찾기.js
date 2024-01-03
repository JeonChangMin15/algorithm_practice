

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째 줄에 노드의 개수
// 두번째 줄부터는 두 정점들이 주어짐
// graph를 만들고 1부터 깊이 우선 탐색을 한다
// dfs로 이전노드와 현재노드를 파라미터로 가져가서 
// 현재 노드의 인덱스에 이전노드를 넣어주면된다
// 시간초과 문제는 console.log가 느려서 일일이 출력하면 시간초과가 나올 수 있다.

const solution = (input) => {
  const n = Number(input[0]);
  const graph = {};

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const parentArr = Array(n + 1).fill(0);
  const visited = Array(n + 1).fill(false);

  const dfs = (node, prev) => {
    if (visited[node]) return;
    visited[node] = true;
    parentArr[node] = prev;

    for (let i = 0; i < graph[node].length; i++) {
      const next = graph[node][i];
      dfs(next, node);
    }
  };

  dfs(1, -1);

  let answer = "";

  for (let i = 2; i < parentArr.length; i++) {
    answer += parentArr[i] + "\n";
  }

  console.log(answer);
};

solution(input);
