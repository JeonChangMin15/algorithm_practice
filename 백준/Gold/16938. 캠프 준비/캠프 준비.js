const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// N개의 문제가 주어지고 각 문제마다 점수가 주어진다
// 문제는 2문제 이상이어야한다. 점수의 합은 L보다 이상 R이하
// 가장 쉬운문제와 어려운 문제의 차이는 X보다 크거나 같아야한다
// 고르는 방법의 수를 구해야한다
// 중복없는 조합을 통해서 고르면 될거같다
// 첫째줄에 N,L,R,X 둘째줄에 난이도들이 주어진다
// 방법의 수를 출력해라
const solution = (input) => {
  const [problemN, minTotal, maxTotal, minDiff] = input[0]
    .split(" ")
    .map((v) => Number(v));

  const scores = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  let answer = 0;

  const dfs = (arr, start) => {
    if (arr.length >= 2) {
      const val = arr.map((v) => scores[v]);
      const total = val.reduce((prev, cur) => prev + cur, 0);
      const diff = Math.abs(val[0] - val[val.length - 1]);

      if (total >= minTotal && total <= maxTotal && diff >= minDiff) {
        answer += 1;
      }
    }

    for (let i = start; i < problemN; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 0);

  console.log(answer);
};

solution(input);
