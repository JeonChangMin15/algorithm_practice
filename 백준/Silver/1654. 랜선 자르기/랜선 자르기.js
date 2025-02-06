const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 선의 갯수와 필요한 선의 개수
// 가장 길게 자를 수 있는 선분의 길이를 구해라
// left = 1, right = max()
// 만약 길이로 나눈 몫들의 합이 타겟보다 크면 선분의 길이를 left = mid +1, 값 갱신
// 작으면 right = mid - 1
const solution = (input) => {
  const [n, targetN] = input[0].split(" ").map((v) => Number(v));
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  let left = 1;
  let right = Math.max(...arr);
  let answer = 1;

  while (left <= right) {
    let cnt = 0;
    let mid = Math.floor((left + right) / 2);

    arr.forEach((v) => {
      cnt += Math.floor(v / mid);
    });

    if (cnt >= targetN) {
      answer = Math.max(answer, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(answer);
};

solution(input);
