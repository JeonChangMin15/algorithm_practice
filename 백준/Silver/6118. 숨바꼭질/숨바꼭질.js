const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1번부터 찾는다
// 첫번째줄에는 헛간의 갯수, 엣지의 갯수가 주어진다
// 양방향이고 1번 노드에서 가장 먼 헛간의 번호(여러개면 가장 작은 헛간번호),
// 거리, 그 헛간과 같은 거리를 갖는 헛간의 개수를 한줄에 출력해야된다.
// 그래프를 만들고 bfs로 탐색을 해야한다
// visited를 만들어서 하고 각 노드의 거리를 마킹을하는 배열도 만든다.

const solution = (input) => {
  const [houseN, edgeN] = input[0].split(" ").map((v) => Number(v));
  const graph = {};
  for (let i = 1; i <= houseN; i++) {
    graph[i] = [];
  }
  for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const visited = Array(houseN + 1).fill(false);
  const distance = Array(houseN + 1).fill(0);

  const queue = [[1, 0]];
  visited[1] = true;

  while (queue.length) {
    const [area, len] = queue.shift();
    distance[area] = len;

    for (let i = 0; i < graph[area].length; i++) {
      const nextArea = graph[area][i];
      if (visited[nextArea]) continue;
      visited[nextArea] = true;
      queue.push([nextArea, len + 1]);
    }
  }

  const maxDistance = Math.max(...distance);
  const maxArea = [];
  for (let i = 0; i < distance.length; i++) {
    if (maxDistance === distance[i]) maxArea.push(i);
  }

  console.log(maxArea[0], maxDistance, maxArea.length);
};

solution(input);
