const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [n, lineN, start] = input[0].split(" ").map((v) => Number(v));
  const grid = Array(n + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 1; i <= lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    grid[n1].push(n2);
    grid[n2].push(n1);
  }

  for (let i = 0; i <= n; i++) {
    grid[i].sort((a, b) => a - b);
  }

  const dfsArr = [];
  const dfsVisit = Array(n + 1).fill(false);

  const dfs = (node) => {
    dfsVisit[node] = true;
    dfsArr.push(node);

    for (const nextNode of grid[node]) {
      if (dfsVisit[nextNode]) continue;
      dfs(nextNode);
    }
  };

  dfs(start);

  const bfsVisit = Array(n + 1).fill(false);
  const bfsArr = [];
  const queue = [start];
  bfsVisit[start] = true;
  bfsArr.push(start);

  while (queue.length) {
    const node = queue.shift();

    for (const nextNode of grid[node]) {
      if (bfsVisit[nextNode]) continue;
      bfsVisit[nextNode] = true;
      bfsArr.push(nextNode);
      queue.push(nextNode);
    }
  }

  console.log(dfsArr.join(" "));
  console.log(bfsArr.join(" "));
};

solution(input);
