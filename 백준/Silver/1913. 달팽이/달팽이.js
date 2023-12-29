// 먼저 그리드가 n x n 과 0으로 채워진걸 하나 만들고
// n x n부터 시작해서 처음에는 down으로 간다
// 그리고 down이면 raw+1 씩하면서 1씩 감소된 값을 넣어준다
// 만약 다음 값으로 못넘어가면 right로 변경해서  col + 1씩 하면서 1씩 감소되는값을 넣어준다
// 다음은 up으로 raw-1씩해서
// 다음은 left으로 col-1씩
// 값이 0인곳이고 접근 가능한곳이어야한다

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const target = Number(input[1]);

  const grid = Array.from(Array(n), () => Array(n).fill(0));

  let dir = "down";
  const obj = { down: "right", right: "up", up: "left", left: "down" };
  let value = n * n;

  let raw = 0;
  let col = 0;

  for (let i = 0; i < n * n; i++) {
    if (dir === "down") {
      grid[raw][col] = value;
      value--;
      if (raw + 1 < n && grid[raw + 1][col] === 0) {
        raw++;
      } else {
        dir = obj["down"];
        col++;
      }
      continue;
    }

    if (dir === "right") {
      grid[raw][col] = value;
      value--;
      if (col + 1 < n && grid[raw][col + 1] === 0) {
        col++;
      } else {
        dir = obj["right"];
        raw--;
      }
      continue;
    }

    if (dir === "up") {
      grid[raw][col] = value;
      value--;
      if (raw - 1 >= 0 && grid[raw - 1][col] === 0) {
        raw--;
      } else {
        dir = obj["up"];
        col--;
      }

      continue;
    }

    if (dir === "left") {
      grid[raw][col] = value;
      value--;
      if (col - 1 >= 0 && grid[raw][col - 1] === 0) {
        col--;
      } else {
        dir = obj["left"];
        raw++;
      }
      continue;
    }
  }

  for (let i = 0; i < n; i++) {
    const r = grid[i].join(" ");
    console.log(r);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === target) {
        console.log(i + 1, j + 1);
        return;
      }
    }
  }
};

solution(input);
