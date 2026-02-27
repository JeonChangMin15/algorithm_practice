const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1부터 N까지 이루어진 순열을 사전순대로
// backTracking으로 중복없는 순열을 만들면된다
const solution = (input) => {
  const n = Number(input[0]);
  const answer = [];

  const backTrack = (arr) => {
    if (arr.length === n) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTrack(arr);
      arr.pop();
    }
  };

  backTrack([]);

  console.log(answer.join("\n"));
};

solution(input);
