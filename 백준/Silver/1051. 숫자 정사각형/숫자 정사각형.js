const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 rowN, colN이 주어진다. 그다음줄부터 빈칸없이 숫자가 주어진다
// 그리고 각 칸에 한자리 숫자가 적혀있다. 꼭지점에 적혀 있는 수가 모두 같은 가장큰
// 정사각형의 너비를 찾는다.
// 각 지점에 전부 다 체크를 해본다.
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  let max = 1;

  const findMaxArea = (x, y) => {
    let step = 0;
    let area = 0;

    while (x + step < rowN && y + step < colN) {
      const leftUp = grid[x][y];
      const leftDown = grid[x + step][y];
      const rightUp = grid[x][y + step];
      const rightDown = grid[x + step][y + step];

      if (leftUp === leftDown && leftUp === rightUp && leftUp === rightDown) {
        area = (step + 1) ** 2;
      }

      step++;
    }

    return area;
  };

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      max = Math.max(findMaxArea(i, j), max);
    }
  }

  console.log(max);
};

solution(input);
