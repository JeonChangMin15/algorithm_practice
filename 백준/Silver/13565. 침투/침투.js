const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// row가 0인지점에만 dfs로 탐색을 한다
// visited를 만들고 rowN-1 지점에 도착하면 true로 한다
// 0이 통하고 1은 전류가 안통한다
// 도착하면 YES, 아니면 NO를 출력한다.
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  let isValid = false;

  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= rowN ||
      col < 0 ||
      col >= colN ||
      grid[row][col] === 1
    )
      return;

    grid[row][col] = 1;

    if (row === rowN - 1) {
      isValid = true;
      return;
    }

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let i = 0; i < colN; i++) {
    dfs(0, i);
  }

  if (isValid) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

solution(input);
