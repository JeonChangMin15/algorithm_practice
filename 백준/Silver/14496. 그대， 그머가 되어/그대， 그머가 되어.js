const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 시작점 끝점이 주어지고
// 두번째줄에는 N(문자의 수), 노드쌍의 수가 주어진다
// 이후 노드 쌍수만큼 주어진다. 최소 치환 횟수를 출력한다.
// 불가능하면 -1을 출력
const solution = (input) => {
  const [startNode, endNode] = input[0].split(" ").map((v) => Number(v));
  const [nodeN, lineN] = input[1].split(" ").map((v) => Number(v));
  const graph = {};

  for (let i = 1; i <= nodeN; i++) {
    graph[i] = [];
  }

  for (let i = 2; i < 2 + lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const queue = [[startNode, 0]];
  const visited = Array(nodeN + 1).fill(false);
  visited[startNode] = true;

  let answer = -1;

  while (queue.length) {
    const [curNode, cnt] = queue.shift();
    if (curNode === endNode) {
      answer = cnt;
      break;
    }

    for (const nextNode of graph[curNode]) {
      if (visited[nextNode]) continue;
      queue.push([nextNode, cnt + 1]);
      visited[nextNode] = true;
    }
  }

  console.log(answer);
};

solution(input);
