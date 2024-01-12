

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 3개의 씨앗을 뿌리고 중앙 상하좌우 5칸을 차지한다
// 3개의 꽃이 겹치지 않도록, 밖으로 나가지않도록 뿌리면서 가장 낮은 가격으로
// 임대할 수 있도록  해야된다.
// 첫째줄에는 길이 둘째줄에는 각 지역마다 가격이 찍힌 그리드가 주어짐
// 3중 for문으로 0-> n*n전까지 탐색하면서 몫을 row 나머지를 col로한다
// 근데 셋중 하나라도 몫이 0, 나머지가 나머지가0, 몫이 n-1 나머지가 n-1이면 스킵
// 상하좌우의 위치가 총 15개면 price 계산
const solution = (input) => {
  const n = Number(input[0]);
  const prices = [];
  for (let i = 1; i < input.length; i++) {
    prices.push(input[i].split(" ").map((v) => Number(v)));
  }

  let cost = Infinity;

  for (let i = 0; i < n * n - 1; i++) {
    for (let j = 0; j < n * n - 1; j++) {
      for (let k = 0; k < n * n - 1; k++) {
        if (
          parseInt(i / n) === 0 ||
          i % n === 0 ||
          parseInt(i / n) === n - 1 ||
          i % n === n - 1 ||
          parseInt(j / n) === 0 ||
          j % n === 0 ||
          parseInt(j / n) === n - 1 ||
          j % n === n - 1 ||
          parseInt(k / n) === 0 ||
          k % n === 0 ||
          parseInt(k / n) === n - 1 ||
          k % n === n - 1
        )
          continue;

        const firstRow = parseInt(i / n);
        const firstCol = i % n;
        const secondRow = parseInt(j / n);
        const secondCol = j % n;
        const thirdRow = parseInt(k / n);
        const thirdCol = k % n;

        const position = [
          [firstRow, firstCol],
          [secondRow, secondCol],
          [thirdRow, thirdCol],
        ];

        const dirs = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
        ];

        const set = new Set();
        set.add(`${firstRow}${firstCol}`);
        set.add(`${secondRow}${secondCol}`);
        set.add(`${thirdRow}${thirdCol}`);

        let sideCost = 0;

        for (let [row, col] of position) {
          for (let [dx, dy] of dirs) {
            sideCost += prices[row + dx][col + dy];
            set.add(`${row + dx}${col + dy}`);
          }
        }

        if (set.size === 15) {
          cost = Math.min(
            cost,
            sideCost +
              prices[firstRow][firstCol] +
              prices[secondRow][secondCol] +
              prices[thirdRow][thirdCol]
          );
        }
      }
    }
  }

  console.log(cost);
};

solution(input);
