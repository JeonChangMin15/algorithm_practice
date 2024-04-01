const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));


const solution = (input) => {
  const [nodeN, linkN, startNode] = input[0].split(" ").map((v) => Number(v));
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

  let dist = 1;
  const visited = Array(nodeN + 1).fill(false);
  const nodeDist = Array(nodeN + 1).fill(0);
  visited[startNode] = true;
  nodeDist[startNode] = 1;

  const queue = [startNode];

  while (queue.length) {
    const currentNode = queue.shift();

    for (const nextNode of graph[currentNode]) {
      if (visited[nextNode]) continue;
      visited[nextNode] = true;
      nodeDist[nextNode] = dist + 1;
      queue.push(nextNode);
      dist += 1;
    }
  }

  const answer = nodeDist.slice(1).join("\n");
  console.log(answer);
};

solution(input);
