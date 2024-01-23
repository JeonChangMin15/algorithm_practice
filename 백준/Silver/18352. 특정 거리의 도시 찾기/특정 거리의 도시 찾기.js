const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 단방향 그래프가 주어진다
//출발도시에서 최단거리가 K인 도시들을 출력한다
// 첫째줄에 도시의개수, 도로의 개수, 거리의 정보, 출발도시
// 이후에는 단방향 도로
// bfs로 탐색하면된다
// 도시가 하나도 없으면 -1츨력 그리고오름차순으로 하나씩 출력
const solution = (input) => {
  const [cityN, loadN, distance, start] = input[0]
    .split(" ")
    .map((v) => Number(v));

  const graph = {};
  for (let i = 1; i <= cityN; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
  }

  const queue = [[start, 0]];
  const cityArr = [];

  const visited = Array(cityN + 1).fill(false);
  visited[start] = true;

  while (queue.length) {
    const [cur, len] = queue.shift();
    if (len > distance) break;
    if (len === distance) {
      cityArr.push(cur);
    }

    for (let i = 0; i < graph[cur].length; i++) {
      const nextCity = graph[cur][i];
      if (visited[nextCity]) continue;
      queue.push([nextCity, len + 1]);
      visited[nextCity] = true;
    }
  }

  if (cityArr.length === 0) {
    console.log(-1);
    return;
  }

  cityArr.sort((a, b) => a - b);
  for (let i = 0; i < cityArr.length; i++) {
    console.log(cityArr[i]);
  }
};

solution(input);
