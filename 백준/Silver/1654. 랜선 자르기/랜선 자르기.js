const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 랜선의 개수, 필요한 랜선의 개수가 주어진다
// 그다음줄부터 길이가 하나씩 주어진다
// lt = 1 rt = 랜선중 가장 짧은거
// 이분탐색으로 mid로 나눈 몫을 쭉 더해서 해당 목표보다 작으면 rt = mid -1
// 해당 목표다 크거나 같으면 lt = mid +1로 구하면될거같다
const solution = (input) => {
  const [n, target] = input[0].split(" ").map((v) => Number(v));
  const arr = [];
  for (let i = 1; i < input.length; i++) {
    arr.push(Number(input[i]));
  }
  arr.sort((a, b) => a - b);

  let lt = 1;
  let rt = arr[n - 1];
  let answer = 1;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let sum = 0;
    arr.forEach((v) => {
      sum += Math.floor(v / mid);
    });

    if (sum >= target) {
      lt = mid + 1;
      answer = mid;
    } else {
      rt = mid - 1;
    }
  }

  console.log(answer);
};

solution(input);
