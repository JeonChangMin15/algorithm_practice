const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 rowN, colN이 주어지고 그다음부터 각 마을의 사람이 있는 그리드가 주어진다
// rowN+1줄에 직사각형의 범위의 개수가 주어지고 x1,y1,x2,y2가 주어진다
// 직사각형 범위 내에 살고 있는 사람 수의 합을 구해야된다.
// 이중 for문으로 풀면 최대 천억개의 연산이 들어가야해서 이럴때 dp로 풀어야한다
// 일단 각 지점에서 0,0에서 현재지점까지 더한 값을 구한다
// 시작점 -> 0,0에서 시작점까지 더한값, 끝지점 0,0 끝지점까지 더한값
// 우리가 구해야하는 값은 시작점
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  const areaCase = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  for (let i = rowN + 2; i < input.length; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map((v) => Number(v));
    areaCase.push([x1 - 1, y1 - 1, x2 - 1, y2 - 1]);
  }

  const dp = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(0));

  dp[0][0] = grid[0][0];

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (i === 0 && j === 0) continue;

      if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
        continue;
      }

      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
        continue;
      }

      dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + grid[i][j];
    }
  }
  for (const [startX, startY, endX, endY] of areaCase) {
    let endAreaPeople = dp[endX][endY];
    if (startX - 1 >= 0) endAreaPeople -= dp[startX - 1][endY];
    if (startY - 1 >= 0) endAreaPeople -= dp[endX][startY - 1];
    if (startX - 1 >= 0 && startY - 1 >= 0)
      endAreaPeople += dp[startX - 1][startY - 1];

    console.log(endAreaPeople);
  }
  // 1,1 ~ 2,2  dp[2][2] - dp[0][2] - dp[2][0] + dp[0][0]
  // 0,1 ~ 3,3  dp[3][3] - dp[3][0]
  // 2,2 ~ 3,3  dp[3][3] - dp[2][1] - dp[1][2] + dp[1][1]
  // 결국 끝지점 dp에서 시작점 dp[startX-1][endY], dp[endX][startY-1]를 빼주고
  // dp[startX-1][startY-1]을 더해주면된다
};

solution(input);
