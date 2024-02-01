const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 도시는 빈칸, 치킨집, 집중 하나이다 1,1 시작
// 치킨거리 -> 집과 가장 가까운 치킨집 사이의 거리 도시의 치킨거리=모든 집의 치킨 거리의 합이다
// 두칸의 거리 행의 차이와 열의 차이의 합이다
// 0 -> 빈집, 1->집, 2->치킨집
// M개의 치킨집만 살릴텐데 거기에 해당되는 도시의 치킨 거리가 최솟값을 구해야된다
// 집의 좌표와 치킨집 좌표를 구한후 -> 치킨집 좌표의 조합을 중복없는 조합으로 구한다
// 그리고 각 조합마다 치킨거리를 구하면될거같다
// 첫째줄에 길이, 선택하는 치킨집 수
// 둘째줄부터 그리드가 주어진다.
const solution = (input) => {
  const [n, limit] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const home = [];
  const store = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        home.push([i, j]);
      }
      if (grid[i][j] === 2) {
        store.push([i, j]);
      }
    }
  }

  let min = Infinity;

  const dfs = (arr, start) => {
    if (arr.length === limit) {
      const chicken = arr.map((v) => store[v]);
      let total = 0;
      for (let i = 0; i < home.length; i++) {
        let homeMin = Infinity;
        let [x1, y1] = home[i];
        for (let j = 0; j < chicken.length; j++) {
          const [x2, y2] = chicken[j];
          let curLen = Math.abs(x1 - x2) + Math.abs(y1 - y2);
          homeMin = Math.min(curLen, homeMin);
        }

        total += homeMin;
      }

      min = Math.min(min, total);
      return;
    }

    for (let i = start; i < store.length; i++) {
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 0);

  console.log(min);
};

solution(input);
