const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 모든 자연수는 넷혹은 그 이하의 제곱수의 합으로 표현이 가능하다
// n을 최소개수 제곱수의 합으로 표현해라
// 1부터 Math.sqrt(n)까지 전부다 for문으로 돌려봐야 알 수 있나
const solution = (input) => {
  const n = Number(input[0]);
  const sqrtN = Math.floor(Math.sqrt(n));
  let answer = 5;

  for (let i = 1; i <= sqrtN; i++) {
    for (let j = 1; j <= sqrtN; j++) {
      for (let k = 1; k <= sqrtN; k++) {
        const res = n - i * i - j * j - k * k;
        if (Math.sqrt(res) === Math.floor(Math.sqrt(res))) answer = 4;
      }
    }
  }

  for (let i = 1; i <= sqrtN; i++) {
    for (let j = 1; j <= sqrtN; j++) {
      for (let k = 1; k <= sqrtN; k++) {
        if (i * i + j * j + k * k === n) {
          answer = 3;
        }
      }
    }
  }

  for (let i = 1; i <= sqrtN; i++) {
    for (let j = 1; j <= sqrtN; j++) {
      if (i * i + j * j === n) {
        answer = 2;
      }
    }
  }

  for (let i = 1; i <= sqrtN; i++) {
    if (i * i === n) {
      answer = 1;
    }
  }

  console.log(answer);
};

solution(input);
