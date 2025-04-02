const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 점들의 개수 두번째줄에 가로,세로길이
// 그 다음줄부터 좌표들이 주어진다. 가능한 경우의 수를 구해라
// 한 지점을 기준으로 x,y (x+가로, y) (x, y+세로) (x+가로, y+세로)가 있는지 구하면된다
// n^2이면 무조건 시간 초과 일단 set에 넣어서 확인해보는걸
const solution = (input) => {
  const n = Number(input[0]);
  const [width, height] = input[1].split(" ").map((v) => Number(v));
  const set = new Set();
  const coor = [];

  for (let i = 2; i < 2 + n; i++) {
    const [x, y] = input[i].split(" ").map((v) => Number(v));
    set.add(`${x},${y}`);
    coor.push([x, y]);
  }

  let answer = 0;

  for (const [x, y] of coor) {
    const c1 = `${x + width},${y}`;
    const c2 = `${x},${y + height}`;
    const c3 = `${x + width},${y + height}`;

    if (set.has(c1) && set.has(c2) && set.has(c3)) answer += 1;
  }

  console.log(answer);
};

solution(input);
