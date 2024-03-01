const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 55 숫자판이 주어지고 상하좌우 네 방향으로 다섯 번 이동해서 총 6자리수가 된다
// 서로 다른 여섯자리의 수들의 개수를 구하라
// 각 숫자들을 담는 배열과 depth와 함께 dfs로 탐색해서 depth 5면 해당 배열에 있는 숫자들을 join하고 Number시키면된다
// include하면된다
const solution = (input) => {
  const grid = [];
  for (let i = 0; i < 5; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }
  const nums = [];

  const dfs = (x, y, arr) => {
    if (x < 0 || x > 4 || y < 0 || y > 4 || arr.length >= 6) return;
    arr.push(grid[x][y]);

    if (arr.length === 6) {
      const num = Number(arr.join(""));
      if (!nums.includes(num)) nums.push(num);
    }

    dfs(x + 1, y, arr);
    dfs(x - 1, y, arr);
    dfs(x, y + 1, arr);
    dfs(x, y - 1, arr);

    arr.pop();
  };

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      dfs(i, j, []);
    }
  }

  console.log(nums.length);
};

solution(input);
