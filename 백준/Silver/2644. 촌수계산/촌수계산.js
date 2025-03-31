const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 인원수가 주어진다 1부터 N
// 두번째줄에는 촌수 계산해야하는 서로다른 두사람 번호
// 셋째줄에는 부모 자식간의 관계 개수가 주어진다
// 네번째줄부터는 부모 자식간의 관계를 부모 자식이 주어진다
// 촌수를 구하고 만약 관계가 없으면 -1을 출력해라
// 먼저 그래프로 각 관계를 다 넣고 dfs로 하나씩 탐색하면 된다
const solution = (input) => {
  const peopleN = Number(input[0]);
  const [start, end] = input[1].split(" ").map((v) => Number(v));
  const lineN = Number(input[2]);
  const graph = Array(peopleN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 3; i < 3 + lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const visited = Array(peopleN + 1).fill(false);
  let answer = -1;

  const dfs = (node, relation) => {
    if (visited[node]) return;
    visited[node] = true;

    if (node === end) {
      answer = relation;
      return;
    }

    for (const nextNode of graph[node]) {
      dfs(nextNode, relation + 1);
    }
  };

  dfs(start, 0);

  console.log(answer);
};

solution(input);
