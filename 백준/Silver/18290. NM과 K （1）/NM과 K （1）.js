const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 rowN, colN, 선택할 격자갯수
// 선택한 칸의 수를 모두 더한값의 최댓값
// 단 선택한 두칸이 인접하면 안된다 -> 상하좌우
// 일단 0부터 row*col-1까지을 중복없는 백트레킹을 한다
// 갯수가 채워지면 거기서 인접한게 하나도 없으면 합을 구해준다
const solution = (input) => {
  const [rowN, colN, pickN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = -Infinity;

  const backTrack = (arr, start) => {
    if (arr.length === pickN) {
      const coor = arr.map((v) => [Math.floor(v / colN), v % colN]);
      let isValid = true;

      for (let i = 0; i < coor.length - 1; i++) {
        for (let j = i + 1; j < coor.length; j++) {
          const [x1, y1] = coor[i];
          const [x2, y2] = coor[j];
          if (Math.abs(x1 - x2) === 0 && Math.abs(y1 - y2) === 1) {
            isValid = false;
          }
          if (Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 0) {
            isValid = false;
          }
        }
      }

      if (isValid) {
        let total = 0;
        for (const [x, y] of coor) {
          total += grid[x][y];
        }
        answer = Math.max(total, answer);
      }

      return;
    }

    for (let i = start; i < rowN * colN; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTrack(arr, i + 1);
      arr.pop();
    }
  };

  backTrack([], 0);
  console.log(answer);
};

solution(input);
