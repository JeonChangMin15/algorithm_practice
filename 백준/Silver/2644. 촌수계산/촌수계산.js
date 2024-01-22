const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");


// 첫번째줄에는 총 인원수 두번째줄에는 촌수를 계산해야하는 두개의 사람숫자
// 3번째줄은 관계수 4번째줄부터 관계
// dfs로 노드 탐색해야하는데 부모 자식 관계이니깐 양방향 그래프
// 만약 촌수가 없으면 -1 출력
const solution = (input) => {
  const n = Number(input[0]);
  const [p1, p2] = input[1].split(" ").map((v) => Number(v));
  const graph = {};

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (let i = 3; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const visited = Array(n + 1).fill(false);
  let answer = -1;

  const dfs = (node, depth) => {
    if (visited[node]) return;
    if (node === p2) {
      answer = depth;
      return;
    }
    visited[node] = true;

    for (let i = 0; i < graph[node].length; i++) {
      const nextNode = graph[node][i];
      dfs(nextNode, depth + 1);
    }
  };

  dfs(p1, 0);

  console.log(answer);
};

solution(input);
