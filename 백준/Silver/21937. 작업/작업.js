const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 작업개수와 작업 순서정보의 개수 주어진다
// 두번째줄부터 작업 정보가 주어지고 마지막줄에 끝내야할 작업
// 끝내야할 작업을 하기위해서 해야할 일의 수를 구해야된다
// graph에 넣을때 graph[end] = start로 넣고
// dfs로 방문한 지점의 갯수를 출력하면 될거 같다
const solution = (input) => {
  const [nodeN, lineN] = input[0].split(" ").map((v) => Number(v));
  const graph = Array(nodeN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 1; i <= lineN; i++) {
    const [start, end] = input[i].split(" ").map((v) => Number(v));
    graph[end].push(start);
  }

  const targetNode = Number(input[lineN + 1]);
  const visited = Array(nodeN + 1).fill(false);

  const dfs = (curNode) => {
    if (visited[curNode]) return;
    visited[curNode] = true;

    for (const nextNode of graph[curNode]) {
      dfs(nextNode);
    }
  };

  dfs(targetNode);

  console.log(visited.filter((v) => v === true).length - 1);
};

solution(input);
