const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째는 숨어야하는 헛간번호(거리가 같으면 가장 짧은 작은 번호)
// 그다음은 헛간 거리, 세번째는 해당거리까지 있는 헛간의 총 갯수
// 첫번째줄에 헛간의 수와 라인의 갯수
// bfs로 각 노드마다 지점을 다 넣고 1번부터 탐색을하면된ㄷ
// dist 배열에다가 각 노드마다 거리를 Infinity로 초기화 후 짧은곳이면 방문
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

  const queue = [[1, 0]];
  const distArr = Array(nodeN + 1).fill(Infinity);
  distArr[1] = 0;
  distArr[0] = 0;

  while (queue.length) {
    const [curNode, curDist] = queue.shift();

    for (const nextNode of graph[curNode]) {
      if (distArr[nextNode] > curDist + 1) {
        queue.push([nextNode, curDist + 1]);
        distArr[nextNode] = curDist + 1;
      }
    }
  }

  const maxDist = Math.max(...distArr);
  const answer = [];

  for (let i = 1; i <= nodeN; i++) {
    if (distArr[i] === maxDist) {
      answer.push(i);
    }
  }

  console.log(answer[0], maxDist, answer.length);
};

solution(input);
