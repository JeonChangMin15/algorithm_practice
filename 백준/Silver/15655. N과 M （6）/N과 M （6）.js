const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 백트래킹으로 순열을 만드느데 중복없이 만들어야하낟
// 인자 arr, prev로 이전값보다 큰 값만 넣어서
// 첫번째줄에 숫자의 개수와 조합 길이가 주어진다
// 숫자를 오름차순 정렬을 한 뒤에 백트래킹을 실행
const solution = (input) => {
  const [n, comLen] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  nums.sort((a, b) => a - b);

  const answer = [];

  const backTracking = (arr, start) => {
    if (arr.length === comLen) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = start; i < n; i++) {
      arr.push(nums[i]);
      backTracking(arr, i + 1);
      arr.pop();
    }
  };

  backTracking([], 0);

  console.log(answer.join("\n"));
};

solution(input);
