const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫째줄에 rowN, colN 둘째줄부터 기호들이 주어진다
//빈공간은 . 울타리# 늑대 v, 양 k
// 울타리 영역안에서 양들의 숫자가 늑대보다 많으면 양이 살고 그외에는 전부 늑대 생존
// 살아남는 양과 늑대의 수를 순서대로 출력
// 이중 for문으로 dfs로 울타리가 아니면서 방문하지 않은 영역을 탐색
// 그렇게 해서 curShip, curWolf를 비교해서 양 늑대의 수를 비교해서 값을 누적해주면 된다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(""));
  }

  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  let curSheep = 0;
  let curWolf = 0;
  let totalSheep = 0;
  let totalWolf = 0;

  const dfs = (x, y) => {
    if (
      x < 0 ||
      x >= rowN ||
      y < 0 ||
      y >= colN ||
      grid[x][y] === "#" ||
      visited[x][y]
    )
      return;

    visited[x][y] = true;

    if (grid[x][y] === "v") {
      curWolf += 1;
    }
    if (grid[x][y] === "k") {
      curSheep += 1;
    }

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  };

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (visited[i][j] || grid[i][j] === "#") continue;
      curWolf = 0;
      curSheep = 0;
      dfs(i, j);
      if (curSheep > curWolf) {
        totalSheep += curSheep;
      } else {
        totalWolf += curWolf;
      }
    }
  }

  console.log(totalSheep, totalWolf);
};

solution(input);
