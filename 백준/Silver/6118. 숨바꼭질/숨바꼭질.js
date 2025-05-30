const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째는 숨어야할 헛간 번호(여러개면 가장 작은 헛간 번호), 두번재 헛간까지 거리, 세번째는 같은 거리를 갖는 헛간의 개수
// 첫번재줄에는 헛간의 갯수와 간선의 수(양방향)이 주어진다
// 두번재줄부터 간선이 주어진다
// 1번에서 시작을 한다 -> bfs로 해당 지점을 grid Infinity로 마킹한 후 +1보다 작으면 가면 된다
// 가장 먼곳의 거리와 해당 지점을 모으면 된다
const solution = (input) => {
  const [nodeN, lineN] = input[0].split(" ").map((v) => Number(v));
  const graph = Array(nodeN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 1; i <= lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const dist = Array(nodeN + 1).fill(Infinity);
  dist[1] = 0;
  const queue = [[1, 0]];

  let maxDist = 0;

  while (queue.length) {
    const [curNode, curLen] = queue.shift();

    maxDist = Math.max(maxDist, curLen);

    for (const nextNode of graph[curNode]) {
      if (dist[nextNode] > curLen + 1) {
        queue.push([nextNode, curLen + 1]);
        dist[nextNode] = curLen + 1;
      }
    }
  }

  const answer = [];

  for (let i = 1; i <= nodeN; i++) {
    if (dist[i] === maxDist) {
      answer.push(i);
    }
  }

  answer.sort((a, b) => a - b);

  console.log(answer[0], maxDist, answer.length);
};

solution(input);
