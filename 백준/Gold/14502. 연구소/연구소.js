const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 0 빈위치, 1 벽, 2바이러스다
// 첫번째줄에 rowN, colN이주어지고 그다음부터 그리드다
// 먼저 삼중 for문으로 해당 포지션이 전부 다 0 이면 일단 벽으로 만든다
// 그리고 나서 이중 for문으로 바이러스 인 지점을 dfs로 돌리면서 0인곳은 visited로
// 마킹을 한다. 그리고나서 방문안한 0 지점의 갯수를 카운팅을 해주면된다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dfs = (x, y, visited) => {
    if (x < 0 || x >= rowN || y < 0 || y >= colN) return;
    if (visited[x][y] || grid[x][y] === 1) return;
    visited[x][y] = true;

    dfs(x - 1, y, visited);
    dfs(x + 1, y, visited);
    dfs(x, y - 1, visited);
    dfs(x, y + 1, visited);
  };

  const viriusMove = () => {
    const visited = Array(rowN)
      .fill(0)
      .map((v) => Array(colN).fill(false));

    for (let i = 0; i < rowN; i++) {
      for (let j = 0; j < colN; j++) {
        if (grid[i][j] === 2 && !visited[i][j]) {
          dfs(i, j, visited);
        }
      }
    }

    let cnt = 0;

    for (let i = 0; i < rowN; i++) {
      for (let j = 0; j < colN; j++) {
        if (grid[i][j] === 0 && !visited[i][j]) {
          cnt += 1;
        }
      }
    }

    return cnt;
  };

  let answer = 0;

  for (let i = 0; i < rowN * colN; i++) {
    for (let j = 0; j < rowN * colN; j++) {
      for (let k = 0; k < rowN * colN; k++) {
        const x1 = Math.floor(i / colN);
        const y1 = i % colN;
        const x2 = Math.floor(j / colN);
        const y2 = j % colN;
        const x3 = Math.floor(k / colN);
        const y3 = k % colN;
        const firstG = grid[x1][y1];
        const secondG = grid[x2][y2];
        const thridG = grid[x3][y3];
        const isAllDiff = i !== j && j !== k && i !== k;
        if (isAllDiff && firstG === 0 && secondG === 0 && thridG === 0) {
          grid[x1][y1] = 1;
          grid[x2][y2] = 1;
          grid[x3][y3] = 1;
          const cnt = viriusMove();
          answer = Math.max(cnt, answer);
          grid[x1][y1] = 0;
          grid[x2][y2] = 0;
          grid[x3][y3] = 0;
        }
      }
    }
  }

  console.log(answer);
};

solution(input);
