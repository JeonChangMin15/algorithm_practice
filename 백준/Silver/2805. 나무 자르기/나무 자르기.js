const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 나무의 수와 가져가려고하는 나무의 길이
// 둘째줄에 나무의 높이가 주어진다
// 절단기보다 낮은 나무는 안자르고 최소한 같거나 큰 나무만 자른다
// 자르고 남은 나무들의 길이합이 목표 길이만큼 가능한 절단기의 길이를 최대값
// 이분탐색으로 하며 된다
const solution = (input) => {
  const [treeN, targetLen] = input[0].split(" ").map((v) => Number(v));
  const arr = input[1].split(" ").map((v) => Number(v));

  let lt = 1;
  let rt = Math.max(...arr);
  let answer = 0;

  while (lt <= rt) {
    let res = 0;
    const mid = Math.floor((lt + rt) / 2);
    arr.forEach((len) => {
      if (len >= mid) {
        res += len - mid;
      }
    });

    if (res >= targetLen) {
      lt = mid + 1;
      answer = Math.max(answer, mid);
    } else {
      rt = mid - 1;
    }
  }

  console.log(answer);
};

solution(input);
