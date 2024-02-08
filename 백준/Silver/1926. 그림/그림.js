const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 영역의 개수와 가장큰 영역을 각각 출력해라
// dfs로 영역 탐색을하면된다.
// 첫째줄에 rowN, colN
// 두번째줄부터 그리드가 주어진다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= rowN ||
      col < 0 ||
      col >= colN ||
      grid[row][col] === 0
    )
      return 0;

    grid[row][col] = 0;

    const up = dfs(row - 1, col);
    const down = dfs(row + 1, col);
    const left = dfs(row, col - 1);
    const right = dfs(row, col + 1);

    return 1 + up + down + left + right;
  };
  const answer = [];
  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === 0) continue;
      const area = dfs(i, j);
      answer.push(area);
    }
  }
  answer.sort((a, b) => b - a);
  console.log(answer.length);
  const max = answer.length === 0 ? 0 : answer[0];
  console.log(max);
};

solution(input);
