const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 테스트 케이스수, 그 다음부터 징검다리수가 한줄씩 주어진다
// 1부터 N까지 합이 해당 징검다리수랑 똑같으면 break,
// 만약 크면 해당 갯수에서 -1, rt = mid -1, 부족하면 lt = mid +1
const solution = (input) => {
  const n = Number(input[0]);
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  const countRock = (rockN) => {
    let lt = 1;
    let rt = rockN;
    let answer = rockN;

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      const totalRock = (mid * (mid + 1)) / 2;

      if (totalRock === rockN) {
        answer = mid;
        break;
      } else if (totalRock > rockN) {
        answer = Math.min(mid - 1, answer);
        rt = mid - 1;
      } else {
        lt = mid + 1;
      }
    }

    console.log(answer);
  };

  arr.forEach((val) => {
    countRock(val);
  });
};

solution(input);
