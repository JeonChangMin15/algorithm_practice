const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 제곱근의 합으로 나타내는 최소 갯수를 구해라
// Math.sqrt로 해서 각 케이스마다 다 계산을 해서
// 4 3 2 1로 체킹을 한다
const solution = (input) => {
  const n = Number(input[0]);
  const sqartN = Math.floor(Math.sqrt(n));

  let answer = Infinity;

  for (let i = 1; i <= sqartN; i++) {
    for (let j = 1; j <= sqartN; j++) {
      for (let k = 1; k <= sqartN; k++) {
        const res = n - i * i - j * j - k * k;
        if (res >= 0 && Math.sqrt(res) === Math.floor(Math.sqrt(res))) {
          answer = Math.min(answer, 4);
        }
      }
    }
  }

  for (let i = 1; i <= sqartN; i++) {
    for (let j = 1; j <= sqartN; j++) {
      const res = n - i * i - j * j;
      if (res >= 0 && Math.sqrt(res) === Math.floor(Math.sqrt(res))) {
        answer = Math.min(answer, 3);
      }
    }
  }

  for (let i = 1; i <= sqartN; i++) {
    const res = n - i * i;
    if (res >= 0 && Math.sqrt(res) === Math.floor(Math.sqrt(res))) {
      answer = Math.min(answer, 2);
    }
  }

  if (n === sqartN * sqartN) {
    answer = Math.min(answer, 1);
  }

  console.log(answer);
};

solution(input);
