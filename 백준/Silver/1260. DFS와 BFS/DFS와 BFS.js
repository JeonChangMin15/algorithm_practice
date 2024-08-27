const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫째줄에 정점의 개수 간선의 갯수 시작점
// 그다음 줄부터 간선의 조합 정점 번호가 작은것부터 방문
// 첫째줄에 dfs 두번째줄에 bfs 출력
// 먼저 그래프로 넣고 sort한다 그다음부터 탐색하면서 배열에다가 넣으면 된다
const solution = (input) => {
  const [nodeN, lineN, startN] = input[0].split(" ").map((v) => Number(v));
  const graph = {};
  for (let i = 1; i <= nodeN; i++) {
    graph[i] = [];
  }
  for (let i = 1; i <= lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }
  for (let i = 1; i <= nodeN; i++) {
    graph[i].sort((a, b) => a - b);
  }

  const dfsArr = [];
  const dfsVisited = Array(nodeN + 1).fill(false);

  const dfs = (curNode) => {
    dfsVisited[curNode] = true;
    dfsArr.push(curNode);

    for (const nextNode of graph[curNode]) {
      if (dfsVisited[nextNode]) continue;
      dfs(nextNode);
    }
  };

  dfs(startN);
  console.log(dfsArr.join(" "));

  const bfs = (startNode) => {
    const bfsArr = [];
    const bfsVisited = Array(nodeN + 1).fill(false);

    const queue = [startNode];
    bfsVisited[startNode] = true;
    bfsArr.push(startNode);

    while (queue.length) {
      const curNode = queue.shift();

      for (const nextNode of graph[curNode]) {
        if (bfsVisited[nextNode]) continue;
        bfsArr.push(nextNode);
        queue.push(nextNode);
        bfsVisited[nextNode] = true;
      }
    }

    console.log(bfsArr.join(" "));
  };

  bfs(startN);
};

solution(input);
