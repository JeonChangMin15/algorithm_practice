const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 가장 처음과 마지막 문자는 숫자. 연속해서 두개 이사으이 연산자는 없다
// 먼저 -로 스플릿한다음에
// 해당 문자열을 하나씩 +로 스플릿한다
// 첫번째만 더하고 나머지는 싹다 빼주면된다
const solution = (input) => {
  const sample = input[0];
  const minusSplit = sample.split("-");

  let answer = 0;

  for (let i = 0; i < minusSplit.length; i++) {
    const plusSplit = minusSplit[i].split("+").map((v) => Number(v));
    const total = plusSplit.reduce((prev, cur) => prev + cur, 0);
    if (i === 0) {
      answer += total;
    } else {
      answer -= total;
    }
  }

  console.log(answer);
};

solution(input);
