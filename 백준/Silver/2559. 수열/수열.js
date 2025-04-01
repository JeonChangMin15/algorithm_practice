const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에는 N온도를 측정한 전체 날짜의 수, K는 연속날짜수다
// 두번째줄에는 온도들이 주어진다
// 온도의 수열에서 합이 최대가되는 되는값을 출력한다
// 먼저 투포인터로 lt=0, rt=k-1로 시작하고
// rt+1가 N보다 작을때까지 계속해서 비교하면된다
// 날짜가 증가할때마다 temp[lt]를 빼고 temp[rt+1]을 해주면되는데
const solution = (input) => {
  const [n, date] = input[0].split(" ").map((v) => Number(v));
  const temp = input[1].split(" ").map((v) => Number(v));
  let maxTemp = 0;
  let curTemp = 0;

  for (let i = 0; i < date; i++) {
    maxTemp += temp[i];
    curTemp += temp[i];
  }

  let lt = 0;
  let rt = date - 1;

  while (rt + 1 < n) {
    curTemp = curTemp - temp[lt] + temp[rt + 1];
    maxTemp = Math.max(curTemp, maxTemp);
    lt += 1;
    rt += 1;
  }

  console.log(maxTemp);
};

solution(input);
