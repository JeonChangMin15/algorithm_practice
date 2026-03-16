const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 세곳을 정해서 심는데 심는곳 상하좌우 + 해당 지점까지 포함이된다
// 해당 지점이 벗어나거나 겹치면 안된다
// 그렇다면 삼중 for문으로 통해서 모든 지점의 상하좌우를 넣는다
// 그리고나서 set에 저장한 후 15개인지 확인 후 유효한 지점인지 확인
// 다 체킹된다면 해당 지점의 위치의 가격을 다 합산해서 비교
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dirs = [
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  let answer = Infinity;

  for (let i = 0; i < n * n; i++) {
    for (let j = 0; j < n * n; j++) {
      for (let k = 0; k < n * n; k++) {
        const set = new Set();
        const firstX = Math.floor(i / n);
        const firstY = i % n;
        const secondX = Math.floor(j / n);
        const secondY = j % n;
        const thirdX = Math.floor(k / n);
        const thirdY = k % n;
        const original = [
          [firstX, firstY],
          [secondX, secondY],
          [thirdX, thirdY],
        ];

        for (const [x, y] of original) {
          for (const [dx, dy] of dirs) {
            const nextX = x + dx;
            const nextY = y + dy;
            if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < n) {
              set.add(`${nextX} ${nextY}`);
            }
          }
        }

        if (set.size === 15) {
          let cost = 0;
          for (const coor of set) {
            const [x, y] = coor.split(" ").map((v) => Number(v));
            cost += grid[x][y];
          }
          answer = Math.min(answer, cost);
        }
      }
    }
  }

  console.log(answer);
};

solution(input);
