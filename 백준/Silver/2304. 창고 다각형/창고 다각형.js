const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번재줄에 기둥의 개수, 2번째줄부터 각 기둥의 x축과 높이가 주어진다
// 모든 면적을 커버할 수 있는 최소한의 다각형의 면적을 구해라
// start, end 지점을 구하고
// 가장 큰 지점을 구한다. 그리고 각 사이드에서 이전 최대값을 더하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const arr = [];
  let maxHeightPos = 0;
  let maxHeight = 0;
  const validPos = [];
  for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(" ").map((v) => Number(v));
    arr.push([x, y]);
    validPos.push(x);

    if (y > maxHeight) {
      maxHeightPos = x;
      maxHeight = y;
    }
  }

  arr.sort((a, b) => a[0] - b[0]);
  const start = arr[0][0];
  const end = arr[n - 1][0];

  let leftSide = 0;
  let rightSide = 0;

  let leftMax = 0;
  let rightMax = 0;

  for (let i = start; i < maxHeightPos; i++) {
    if (validPos.includes(i)) {
      const curPosHeight = arr.find((v) => v[0] === i)[1];
      if (curPosHeight > leftMax) {
        leftMax = curPosHeight;
      }
    }
    leftSide += leftMax;
  }

  for (let i = end; i > maxHeightPos; i--) {
    if (validPos.includes(i)) {
      const curPosHeight = arr.find((v) => v[0] === i)[1];
      if (curPosHeight > rightMax) {
        rightMax = curPosHeight;
      }
    }
    rightSide += rightMax;
  }

  console.log(leftSide + rightSide + maxHeight);
};

solution(input);
