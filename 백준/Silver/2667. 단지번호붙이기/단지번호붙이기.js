const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에는 정사각형의 크기
// 두번째줄부터는 지도 0 1 형식 0은 집이 없고 1은 집이 있음
// 단지의 수를 첫줄에 출력하고 해당 단지에 있는 집의 수를 오름차순으로 출력
// 먼저 grid변수에다가 집을 받고 dfs로 집인지 아닌지 탐색을한다
// 이중 for문으로 grid === 1인 지점만 방문한다
const solution = (input) => {
  const n = Number(input[0]);
  const grid = [];

  const houseArr = [];
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  const dfs = (row, col) => {
    if (row < 0 || row >= n || col < 0 || col >= n || grid[row][col] === 0)
      return 0;

    grid[row][col] = 0;

    const down = dfs(row + 1, col);
    const up = dfs(row - 1, col);
    const right = dfs(row, col + 1);
    const left = dfs(row, col - 1);

    return 1 + down + up + right + left;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const val = dfs(i, j);
        houseArr.push(val);
      }
    }
  }

  houseArr.sort((a, b) => a - b);
  console.log(houseArr.length);
  for (let i = 0; i < houseArr.length; i++) {
    console.log(houseArr[i]);
  }
};

solution(input);
