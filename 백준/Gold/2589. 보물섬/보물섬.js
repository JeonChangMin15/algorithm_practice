const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// W,L이 빈칸없이 주어진다, L은 육지, W는 바다
// 육지로만 돌아다니고 한칸가는 한시간 걸린다. 최단거리로 이동하는데 가장 긴 시간이 걸리는
// 육지 두곳에 묻혀있다. 같은곳을 두번이상 지나갈 수 없다.
// 이중for문으로 모든 곳에서 bfs탐색을 해서 visited을 마킹하면 될거같다
// 첫번째줄에 rowN, colN이 주어지고 두번째줄 부터 그리드가 주어진다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];
  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(""));
  }

  const bfs = (startX, startY) => {
    const visited = Array(rowN)
      .fill(0)
      .map((v) => Array(colN).fill(false));

    const queue = [[startX, startY, 0]];
    visited[startX][startY] = true;
    let maxDist = 0;

    const dirs = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length) {
      const [x, y, len] = queue.shift();
      maxDist = Math.max(maxDist, len);

      for (let [dx, dy] of dirs) {
        const nextX = x + dx;
        const nextY = y + dy;
        const isValid =
          nextX >= 0 &&
          nextX < rowN &&
          nextY >= 0 &&
          nextY < colN &&
          !visited[nextX][nextY] &&
          grid[nextX][nextY] === "L";

        if (isValid) {
          visited[nextX][nextY] = true;
          queue.push([nextX, nextY, len + 1]);
        }
      }
    }

    return maxDist;
  };

  let answer = 0;

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      if (grid[i][j] === "W") continue;
      const result = bfs(i, j);
      answer = Math.max(answer, result);
    }
  }

  console.log(answer);
};

solution(input);
