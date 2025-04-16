const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 N이주이지고 중복없는 순열을 하나씩 출력한다
// 먼저 백트래킹으로 1부터 N까지 넣고 배열 길이가 N이면 join해서
// 전체 배열에다가 추가해주면된다.
const solution = (input) => {
  const n = Number(input[0]);
  const answer = [];

  const backTracking = (arr) => {
    if (arr.length === n) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTracking(arr);
      arr.pop();
    }
  };

  backTracking([]);

  console.log(answer.join("\n"));
};

solution(input);
