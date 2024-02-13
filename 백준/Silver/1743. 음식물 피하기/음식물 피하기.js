const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 rowN, colN, 음식물 수가 주어진다
// 그다음줄 부터 음식물 좌표가 주어지는데 각각 -1씩해서 마킹을 해야된다
// dfs로 덩어리가 가장 큰걸 구하면 된다.
const solution = (input) => {
  const [rowN, colN, n] = input[0].split(" ").map((v) => Number(v));
  const grid = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  for (let i = 1; i < input.length; i++) {
    const [row, col] = input[i].split(" ").map((v) => Number(v));
    grid[row - 1][col - 1] = true;
  }

  let max = 0;

  const dfs = (x, y) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN || !grid[x][y]) return 0;

    grid[x][y] = false;
    const up = dfs(x - 1, y);
    const down = dfs(x + 1, y);
    const left = dfs(x, y - 1);
    const right = dfs(x, y + 1);

    return 1 + up + down + left + right;
  };

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (!grid[i][j]) continue;
      const area = dfs(i, j);
      max = Math.max(max, area);
    }
  }

  console.log(max);
};

solution(input);
