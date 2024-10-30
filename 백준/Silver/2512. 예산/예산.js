const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const cityN = Number(input[0]);
  const arr = input[1].split(" ").map((v) => Number(v));
  const totalMoney = Number(input[2]);

  let start = 1;
  let end = Math.max(...arr);
  let answer = 1;

  while (start <= end) {
    let curMoney = Math.floor((start + end) / 2);
    let needTotal = 0;

    arr.forEach((val) => {
      if (val < curMoney) {
        needTotal += val;
      } else {
        needTotal += curMoney;
      }
    });

    if (needTotal <= totalMoney) {
      answer = Math.max(answer, curMoney);
      start = curMoney + 1;
    } else {
      end = curMoney - 1;
    }
  }

  console.log(answer);
};

solution(input);
