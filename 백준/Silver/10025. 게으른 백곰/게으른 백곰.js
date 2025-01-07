// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.replace(/\r/, ""));

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 갯수와 좌표 너비가 주어진다
// 그다음줄부터 얼음양과 좌표가 주어진다
// 한 좌표에 자리잡아서 얼음의 최대합을 구해야된다
// 좌표는 1000000 최대임
// 좌표 하나 잡으면 좌우로 jumpN 안에 있는 좌표의 얼음들을 먹을 수 있다
// jumpN >=500000이면 배열에 있는 모든값을 더한값이고
// 만약 작으면 0+jumpN에서 시작을 하는데 슬라이싱 윈도우로 한다
const solution = (input) => {
  const [n, jumpN] = input[0].split(" ").map((v) => Number(v));
  const iceArr = Array(1000001).fill(0);

  for (let i = 1; i <= n; i++) {
    const [iceN, x] = input[i].split(" ").map((v) => Number(v));
    iceArr[x] = iceN;
  }

  if (jumpN >= 500000) {
    const answer = iceArr.reduce((prev, cur) => prev + cur, 0);
    console.log(answer);
    return;
  }

  let posX = jumpN;
  let prevSum = 0;
  let maxSum = 0;

  for (let i = 0; i <= jumpN * 2; i++) {
    prevSum += iceArr[i];
    maxSum += iceArr[i];
  }

  while (posX + jumpN + 1 <= 1000000) {
    const curSum = prevSum + iceArr[posX + jumpN + 1] - iceArr[posX - jumpN];
    maxSum = Math.max(maxSum, curSum);
    prevSum = curSum;
    posX += 1;
  }

  console.log(maxSum);
};

solution(input);
