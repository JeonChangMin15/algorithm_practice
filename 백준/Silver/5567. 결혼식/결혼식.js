const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);
  const graph = {};

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (let i = 2; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const visited = Array(n + 1).fill(false);
  visited[1] = true;

  const queue = [[1, 0]];
  let friend = 0;

  while (queue.length) {
    const [node, depth] = queue.shift();
    if (depth > 2) break;
    if (depth > 0 && depth < 3) {
      friend += 1;
    }

    for (let i = 0; i < graph[node].length; i++) {
      const nextNode = graph[node][i];
      if (visited[nextNode]) continue;

      queue.push([nextNode, depth + 1]);
      visited[nextNode] = true;
    }
  }

  console.log(friend);
};

solution(input);
