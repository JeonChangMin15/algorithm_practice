const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [cityN, lineN] = input[0].split(" ").map((v) => Number(v));
  const graph = Array(cityN + 1)
    .fill(0)
    .map((v) => []);

  for (let i = 1; i <= lineN; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  let answer = 0;
  const visited = Array(cityN + 1).fill(false);

  const dfs = (curCity) => {
    visited[curCity] = true;

    for (const nextCity of graph[curCity]) {
      if (visited[nextCity]) continue;
      dfs(nextCity);
    }
  };

  for (let i = 1; i <= cityN; i++) {
    if (visited[i]) continue;
    dfs(i);
    answer += 1;
  }

  console.log(answer);
};

solution(input);
