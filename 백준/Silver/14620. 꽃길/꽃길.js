const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 격자 크기, 두번째줄부터 그리드가 주어진다
// 서로다른 씨앗을 3개를 심어서 하나도 안겹치게해서 최소비용을 구한다
// 삼중 for문으로 set을 넣고 15개면 계산하는 방식
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [0, 0],
  ];

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = Infinity;

  for (let i = 0; i < n * n; i++) {
    for (let j = 0; j < n * n; j++) {
      for (let k = 0; k < n * n; k++) {
        const set = new Set();
        const coors = [
          [Math.floor(i / n), i % n],
          [Math.floor(j / n), j % n],
          [Math.floor(k / n), k % n],
        ];

        for (const [x, y] of coors) {
          for (const [dx, dy] of dirs) {
            if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < n) {
              set.add(`${x + dx} ${y + dy}`);
            }
          }
        }

        if (set.size === 15) {
          let cost = 0;
          for (const [x, y] of coors) {
            for (const [dx, dy] of dirs) {
              cost += grid[x + dx][y + dy];
            }
          }

          answer = Math.min(cost, answer);
        }
      }
    }
  }

  console.log(answer);
};

solution(input);
