const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자의 개수 둘째줄에는 숫자 리스트
// 세번째줄에 숫자 M,네번째줄에 M개의 숫자 리스트가 주어지고 네번째줄에 있는 숫자들이
// 두번째 줄에 있는 리스트에 포함되는지 판단 존재하면 1 없으면 0
const solution = (input) => {
  const n = Number(input[0]);
  const target = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const m = Number(input[2]);
  const nums = input[3].split(" ").map((v) => Number(v));

  const answer = [];

  for (let num of nums) {
    let isSame = false;
    let lt = 0;
    let rt = n - 1;

    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);

      if (target[mid] === num) {
        isSame = true;
        break;
      }

      if (num > target[mid]) {
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }

    if (isSame) answer.push(1);
    else answer.push(0);
  }

  const str = answer.join("\n");
  console.log(str);
};

solution(input);
