const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 정수의 개수와 target이 주어진다
// 다 더한 값이 target되는 경우의 수를 구해라
// index를 기준으로 순열을 만들어서 length > 0 보다 크면 무조건 합산해서 검사한다
const solution = (input) => {
  const [n, target] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1].split(" ").map((v) => Number(v));
  let answer = 0;

  const backTrack = (arr, start) => {
    if (arr.length) {
      const vals = arr.map((v) => nums[v]);
      const total = vals.reduce((prev, cur) => prev + cur, 0);
      if (total === target) answer += 1;
    }

    for (let i = start; i < n; i++) {
      arr.push(i);
      backTrack(arr, i + 1);
      arr.pop();
    }
  };

  backTrack([], 0);

  console.log(answer);
};

solution(input);
