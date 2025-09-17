const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 랜선의 수, 필요한 랜선의 갯수가 주어지고
// 그다음줄부터 랜선의 길이가 주어진다
// 필요한 랜선의 갯수이상으로 가능한 최대 랜선의 길이를 구해라
// 1부터 가장 큰 랜선의 길이를 두고 이분 탐색으로 몫의 총합이
// 크거나 같으면 lt = mid+1, 안되면 rt=mid-1로 계산을 해주면된다
const solution = (input) => {
  const [n, needN] = input[0].split(" ").map((v) => Number(v));
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  let lt = 1;
  let rt = Math.max(...arr);
  let answer = 1;

  while (lt <= rt) {
    let cur = 0;
    const mid = Math.floor((lt + rt) / 2);
    for (const len of arr) {
      cur += Math.floor(len / mid);
    }

    if (cur >= needN) {
      lt = mid + 1;
      answer = mid;
    } else {
      rt = mid - 1;
    }
  }

  console.log(answer);
};

solution(input);
