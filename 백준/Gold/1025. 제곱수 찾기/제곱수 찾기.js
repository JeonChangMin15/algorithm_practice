const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  let answer = -1;

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  const checkValid = (num) => {
    if (num < 0) return false;

    const root = Math.sqrt(num);
    return root === Math.floor(root);
  };

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      for (let dx = -rowN; dx < rowN; dx++) {
        for (let dy = -colN; dy < colN; dy++) {
          if (dx === 0 && dy === 0) {
            continue;
          } else {
            let curX = i;
            let curY = j;
            let S = "";

            while (curX >= 0 && curX < rowN && curY >= 0 && curY < colN) {
              S += String(grid[curX][curY]);
              const isValid = checkValid(Number(S));
              if (isValid) {
                answer = Math.max(answer, Number(S));
              }
              curX += dx;
              curY += dy;
            }
          }
        }
      }
    }
  }

  console.log(answer);
};

solution(input);
