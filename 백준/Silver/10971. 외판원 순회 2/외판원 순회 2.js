// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.replace(/\r/, ""));

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 외원판의 크기가 주어진다
// 두번째줄에 그리드가 주어진다
// 순열조합을 만든 후 해당 거리의 총합이 가장 적은것
// 대신 0이면 도시간의 이동은 불가능하다
// 그렇다면 백트레킹으로 조합을 전부 구한후
// 0이면 Infinty -> break 전부다 1보다 크면 더해서 비교하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = Infinity;

  const backTracking = (arr) => {
    if (arr.length === n) {
      let totalDist = 0;

      for (let i = 0; i < n; i++) {
        if (i === n - 1) {
          const curCity = arr[i];
          const nextCity = arr[0];
          const d = grid[curCity][nextCity];
          if (d > 0) {
            totalDist += d;
          } else {
            totalDist = Infinity;
          }
        } else {
          const curCity = arr[i];
          const nextCity = arr[i + 1];
          const d = grid[curCity][nextCity];
          if (d > 0) {
            totalDist += d;
          } else {
            totalDist = Infinity;
          }
        }
      }

      answer = Math.min(answer, totalDist);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTracking(arr);
      arr.pop();
    }
  };

  backTracking([]);

  console.log(answer);
};

solution(input);
