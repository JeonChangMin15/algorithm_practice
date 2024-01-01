const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");


const solution = (input) => {
  const [nodeN, lineN, startNode] = input[0].split(" ").map((v) => Number(v));

  const graph = {};
  for (let i = 1; i <= nodeN; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));

    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  for (let i = 1; i <= nodeN; i++) {
    graph[i].sort((a, b) => a - b);
  }

  const dfsArray = [];
  const dfsVisited = new Set();

  const dfs = (node) => {
    dfsArray.push(node);
    dfsVisited.add(node);

    for (let nextNode of graph[node]) {
      if (!dfsVisited.has(nextNode)) {
        dfs(nextNode);
      }
    }
  };

  dfs(startNode);

  console.log(dfsArray.join(" "));

  const bfsArray = [];
  const bfsVisited = new Set();
  bfsVisited.add(startNode);

  const queue = [startNode];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    bfsArray.push(currentNode);

    for (let nextNode of graph[currentNode]) {
      if (!bfsVisited.has(nextNode)) {
        bfsVisited.add(nextNode);
        queue.push(nextNode);
      }
    }
  }

  console.log(bfsArray.join(" "));
};

solution(input);