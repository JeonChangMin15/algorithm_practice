const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 start, end 가주어진다
// 두번째줄에 nodeN, lineN이 주어진다
// 최소한의 횟수와 안되면 -1을 출력한ㄷ
// graph로 저장을 하고 bfs로 탐색을하면된다
const solution = (input) => {
  const [start, end] = input[0].split(" ").map((v) => Number(v));
  const [nodeN, lineN] = input[1].split(" ").map((v) => Number(v));
  const graph = Array(nodeN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 2; i < 2 + lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const visited = Array(nodeN + 1).fill(false);
  visited[start] = true;

  const queue = [[start, 0]];
  let answer = -1;

  while (queue.length) {
    const [curNode, cnt] = queue.shift();
    if (curNode === end) {
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
