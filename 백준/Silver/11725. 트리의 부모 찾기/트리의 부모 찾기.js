// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n");

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// grid를 만들고 bfs로 [curNode, parent]로 넣어서 돌리면된다
// visited로 방문한곳 마킹하면된다
// 첫째줄에 노드 수 두번째줄부터 정점이 주어진다
// 루트노드느 1로 고정된다
// 각 노드들의 부모를 출력하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = Array(n + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 1; i < n; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    grid[n1].push(n2);
    grid[n2].push(n1);
  }

  const visited = Array(n + 1).fill(false);
  const queue = [1];
  const answer = Array(n + 1).fill(0);

  while (queue.length) {
    const curNode = queue.shift();

    for (const nextNode of grid[curNode]) {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        answer[nextNode] = curNode;
        queue.push(nextNode);
      }
    }
  }

  console.log(answer.slice(2).join("\n"));
};

solution(input);