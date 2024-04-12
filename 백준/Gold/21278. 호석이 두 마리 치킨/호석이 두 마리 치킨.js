const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 도시의 갯수N, 도로의 갯수가 주어진다. 도시의 번호는 1부터 N
// 둘째줄 부터 두개의 도시를 양방향으로 이동할 수 있는 도로들이 주어진다
// 2개의 도시를 골라서 매장을 지어서 모든 건물에서 접근성의 합을 최소화하려고 한다
// 2개의 건물 번호를 오름차순으로 출력하고 왕복시간의 합을 출력한다
// 먼저 두개의 도시의 중복없는 조합을 만든다
// 그리고나서 각 조합마다 치킨집에서 시작을해서 각 도시마다 거리와 방문을 체킹한다
// 그리고나서 거리가 최솟값이면 갱신하는 방법으로 하면된다
const solution = (input) => {
  const [cityN, roadN] = input[0].split(" ").map((v) => Number(v));
  const graph = {};

  for (let i = 1; i <= cityN; i++) {
    graph[i] = [];
  }

  for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(" ").map((v) => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  const chickenCity = [];

  const dfs = (arr, start) => {
    if (arr.length === 2) {
      chickenCity.push([...arr]);
      return;
    }

    for (let i = start; i <= cityN; i++) {
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 1);

  let totalLength = Infinity;
  let cityComb = "";

  const bfs = (city1, city2) => {
    const visited = Array(cityN + 1).fill(false);
    const distToChicken = Array(cityN + 1).fill(0);
    const queue = [
      [city1, 0],
      [city2, 0],
    ];

    visited[city1] = true;
    visited[city2] = true;

    while (queue.length) {
      const [currentCity, dist] = queue.shift();
      distToChicken[currentCity] = dist * 2;

      for (let nextCity of graph[currentCity]) {
        if (visited[nextCity]) continue;
        queue.push([nextCity, dist + 1]);
        visited[nextCity] = true;
      }
    }

    return distToChicken.reduce((prev, cur) => prev + cur, 0);
  };

  for (let [c1, c2] of chickenCity) {
    const value = bfs(c1, c2);

    if (value < totalLength) {
      totalLength = value;
      cityComb = `${c1} ${c2}`;
    }
  }

  console.log(cityComb, totalLength);
};

solution(input);
