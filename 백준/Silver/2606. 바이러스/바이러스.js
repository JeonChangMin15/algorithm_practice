const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1번노드부터 깊이 우선 탐색을 시작해서 몇개의 노드가 감염되는지 구하는지 문제
// 그래프 객체를 하나만들어서 방문한 노드인지 체크
// 배열에다가 방문한 노드를 담아서 해당 길이의 -1을 리턴하면된다.
// 첫번째 줄은 컴퓨터의 수, 두번째수는 컴퓨터쌍의 수

const solution = (input) => {
  const computerN = Number(input[0]);
  const nodeN = Number(input[1]);
  const grpah = {};

  for (let i = 1; i <= computerN; i++) grpah[i] = [];

  for (let i = 2; i <= nodeN + 1; i++) {
    const [n, m] = input[i].split(" ").map((v) => Number(v));
    grpah[n].push(m);
    grpah[m].push(n);
  }

  const visited = [];

  // node를 들어왔으면 먼저 visited에 있는지 확인
  // 그리고 visited에 해당 노드 푸쉬
  // 해당 노드에 있는 그래프 노드를 반복문 돌면서 확인
  const dfs = (node) => {
    if (visited.includes(node)) return;
    visited.push(node);

    for (let i = 0; i < grpah[node].length; i++) {
      dfs(grpah[node][i]);
    }
  };

  dfs(1);

  console.log(visited.length - 1);
};

solution(input);
