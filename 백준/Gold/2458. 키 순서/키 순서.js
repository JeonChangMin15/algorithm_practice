const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 자기 노드를 포함해서 뒤에 있는놈 앞에 있는놈이 학생수와 같으면 등수를 알 수 있다
const solution = (input) => {
  const [studentN, lineN] = input[0].split(" ").map((v) => Number(v));
  let visited = Array(studentN + 1).fill(false);
  const relation = Array(studentN + 1).fill(0);
  const graph = {};

  for (let i = 1; i <= studentN; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
  }

  const dfs = (node) => {
    relation[node] += 1;
    visited[node] = true;

    for (let nextNode of graph[node]) {
      if (visited[nextNode]) continue;
      dfs(nextNode);
    }
  };

  for (let i = 1; i <= studentN; i++) {
    dfs(i);
    relation[i] += visited.filter((v) => v).length - 1;
    visited = Array(studentN + 1).fill(false);
  }

  const answer = relation.filter((v) => v === studentN).length;
  console.log(answer);
};

solution(input);
