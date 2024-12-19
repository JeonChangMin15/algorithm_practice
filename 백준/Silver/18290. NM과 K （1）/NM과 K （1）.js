// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n");

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const [rowN, colN, cnt] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i <= rowN; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = -Infinity;

  const dfs = (arr, start) => {
    if (arr.length === cnt) {
      let isValid = true;
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          let x1 = Math.floor(arr[i] / colN);
          let y1 = arr[i] % colN;
          let x2 = Math.floor(arr[j] / colN);
          let y2 = arr[j] % colN;
          let diffX = Math.abs(x1 - x2);
          let diffY = Math.abs(y1 - y2);
          if ((diffX === 0 && diffY === 1) || (diffX === 1 && diffY === 0)) {
            isValid = false;
          }
        }
      }

      if (isValid) {
        let cur = 0;
        arr.forEach((val) => {
          let x = Math.floor(val / colN);
          let y = val % colN;
          cur += grid[x][y];
        });
        answer = Math.max(cur, answer);
      }
      return;
    }

    for (let i = start; i < rowN * colN; i++) {
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 0);

  console.log(answer);
};

solution(input);
