const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 서로다른 용액을 2개 골라서 합이 0에 가장 가까운 조합을 출력
// 두 용액은 오름차순으로 출력
// 브루투포스로는 시간초과가 나온다
// 투포인터로 두 수의 합의 절대값이 이전값보다 작으면 answer에다가 넣어준다
// 만약 이전값보다 크다면 lt의 절대값이 더 크면 lt ++
// rt의 절대값이 더 크면 rt --
const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map((v) => Number(v));

  arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = n - 1;
  let diff = Infinity;
  let answer;

  while (lt < rt) {
    const cur = Math.abs(arr[lt] + arr[rt]);

    if (cur < diff) {
      answer = [arr[lt], arr[rt]];
      diff = cur;
    }

    if (Math.abs(arr[lt]) > Math.abs(arr[rt])) {
      lt++;
    } else {
      rt--;
    }
  }

  console.log(answer.join(" "));
};

solution(input);
