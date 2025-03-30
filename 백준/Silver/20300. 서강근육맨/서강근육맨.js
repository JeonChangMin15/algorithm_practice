const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 갯수 N이 주어진다
// 두번째줄에 운동기구들 근손실이 주어진다
// 한번에 최대 두개를 들고 두개의 합이 근손실이다
// 근소실 정도가 M을 넘지않도록 하고 싶고 해당값 최솟값을 구해라
// 만약 운동기구의 근손실을 오름차순으로 정렬을 한다
// 그리고나서 만약 운동기구수가 홀수면 맨 끝에 있는걸 팝을해서 해당 근손실을 min으로 둔다
// 그게 짝수면 n/2-1 까지 양끝을 더한값을 max로 비교하면 된다
const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1]
    .split(" ")
    .map((v) => BigInt(v)) // ← BigInt로 변환
    .sort((a, b) => (a < b ? -1 : 1)); // ← BigInt 정렬 주의

  let answer = n % 2 === 0 ? BigInt(0) : arr.pop();
  const lastIndex = Math.floor(n / 2) - 1;

  for (let i = 0; i <= lastIndex; i++) {
    const protinLose = arr[i] + arr[arr.length - i - 1];
    if (protinLose > answer) {
      answer = protinLose;
    }
  }

  console.log(String(answer)); // ← BigInt 출력 시 문자열로
};

solution(input);
