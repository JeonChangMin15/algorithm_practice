const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자들의 개수와 조합 수가 주어진다
// 오름차순, 중복은 가능하다.
// 백트레킹으로 해당 숫자보다 크거나 같으면 된다
// 먼저 숫자들을 오름차순으로 정렬해줘야한다.
const solution = (input) => {
  const [n, combN] = input[0].split(" ").map((v) => Number(v));
  const nums = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const answer = [];

  const backTrack = (arr, prev) => {
    if (arr.length === combN) {
      answer.push(arr.join(" "));
      return;
    }

    for (const val of nums) {
      if (val < prev) continue;
      arr.push(val);
      backTrack(arr, val);
      arr.pop();
    }
  };

  backTrack([], 0);

  console.log(answer.join("\n"));
};

solution(input);
