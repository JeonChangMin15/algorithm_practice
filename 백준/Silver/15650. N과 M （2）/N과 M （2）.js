const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 중복 없고 오름차순 조합을 출력하면된다
const solution = (input) => {
  const [n, comLen] = input[0].split(" ").map((v) => Number(v));
  const answer = [];

  const backTrack = (arr, start) => {
    if (arr.length === comLen) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = start; i <= n; i++) {
      arr.push(i);
      backTrack(arr, i + 1);
      arr.pop();
    }
  };

  backTrack([], 1);
  console.log(answer.join("\n"));
};

solution(input);
