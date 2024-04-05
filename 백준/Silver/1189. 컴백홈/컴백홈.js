const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, colN, K가 주어진다
// 시작점은 rowN-1, 0 도착점은 0, colN-1다
// 방문한곳은 다시 방문이 안되고 T인곳은 못간다
// 도착하는 경우 중 거리가 K인 가짓수를 구해야된다
// dfs로 탐색하면서 visited를 마킹하고 상하좌우 다 탐색을 하고나면 마킹을 지운다
// dfs 시작점을 rowN-1,0,1 로하고 row col depth가 맞으면 answer +=1 로 하면된다
const solution = (input) => {
  const [rowN, colN, dist] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(""));
  }

  let answer = 0;
  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  const dfs = (row, col, depth) => {
    if (
      row < 0 ||
      row >= rowN ||
      col < 0 ||
      col >= colN ||
      visited[row][col] ||
      grid[row][col] === "T"
    )
      return;

    if (row === 0 && col === colN - 1 && depth === dist) {
      answer += 1;
      return;
    }

    visited[row][col] = true;
    dfs(row + 1, col, depth + 1);
    dfs(row - 1, col, depth + 1);
    dfs(row, col + 1, depth + 1);
    dfs(row, col - 1, depth + 1);
    visited[row][col] = false;
  };

  dfs(rowN - 1, 0, 1);

  console.log(answer);
};

solution(input);
