const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 N과 수열 길이가 주어진다
// 1부터 시작해서 여러번 골라도 되는 오름차순 수열을 하나씩 출력해라
// for문을 돌리면서 가장 맨뒤에 있는 숫자보다 크거나 같으면 넣으면된다
const solution = (input) => {
  const [n, combN] = input[0].split(" ").map((v) => Number(v));
  const answer = [];

  const backTracking = (arr, lastNum) => {
    if (arr.length === combN) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (i >= lastNum) {
        arr.push(i);
        backTracking(arr, i);
        arr.pop();
      }
    }
  };

  backTracking([], 0);

  console.log(answer.join("\n"));
};

solution(input);
