const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째 줄에 숫자의 수와 목표값이 주어진다
// 두번째줄에 숫자들이 주어진다
// 부분수열의 원소값을 다 더한게 목표값이 되는 경우의 수를 구해라
// 백트레킹으로 인덱스 값들을 중복안되게 넣어서 모든 경우의 수를 체크하면된다
const solution = (input) => {
  const [n, sumVal] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  let answer = 0;

  const backTrack = (arr, lastIndex) => {
    if (lastIndex >= 0) {
      const total = arr
        .map((v) => nums[v])
        .reduce((prev, cur) => prev + cur, 0);

      if (total === sumVal) {
        answer += 1;
      }
    }

    for (let i = 0; i < n; i++) {
      if (i > lastIndex) {
        arr.push(i);
        backTrack(arr, i);
        arr.pop();
      }
    }
  };

  backTrack([], -1);
  console.log(answer);
};

solution(input);
