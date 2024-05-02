const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에서 도시의 개수 두번재줄에는 간선들이 주어진다
// 시작도시, 도착도시, 비용이 주어진다.
// 각 1번도시부터 N번도시까지 각각의 시작점에서 모든도시 최소 비용을 출력
// 만약 갈 수 없으면 0을 출력한다
// 다익스트라 알고리즘을 반복문으로 하면된다
const solution = (input) => {
  const cityN = Number(input[0]);
  const lineN = Number(input[1]);
  const graph = {};
  for (let i = 1; i <= cityN; i++) {
    graph[i] = [];
  }

  for (let i = 2; i < input.length; i++) {
    const [start, end, cost] = input[i].split(" ").map((v) => Number(v));
    graph[start].push([cost, end]);
  }

  const findListCost = (startCity) => {
    const cityCost = Array(cityN + 1).fill(Infinity);
    cityCost[startCity] = 0;
    const queue = [[0, startCity]];

    while (queue.length) {
      const [curCost, curCity] = queue.shift();

      if (curCost > cityCost[curCity]) continue;

      for (const [nextCost, nextCity] of graph[curCity]) {
        if (nextCost + curCost < cityCost[nextCity]) {
          queue.push([nextCost + curCost, nextCity]);
          cityCost[nextCity] = curCost + nextCost;
        }
      }
    }

    return cityCost
      .slice(1)
      .map((v) => (v !== Infinity ? v : 0))
      .join(" ");
  };

  for (let i = 1; i <= cityN; i++) {
    const costs = findListCost(i);
    console.log(costs);
  }
};

solution(input);
