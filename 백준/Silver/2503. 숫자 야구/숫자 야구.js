const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1부터 9까지 서로 다른 숫자 세개로 구성된 조합을 만들고
// 물어본다 -> 만약 세자리수에 동일한 위치면 스트라이크, 있긴한데 다른위치면 볼
// 세자리수를 정확히 맞추어 3스트라이크가 되면 게임이 끝난다
// 아니라면 계속해서 새로운 수를 계속해서 물어본다
// 첫번째줄에 몇번 질문했는지 나오고 그다음줄부터 세자리수와 스트, 볼 카운트가 한줄에 줄어진다
// 먼저 세자리 조합수를 전부 다 만들고 질문마다 비교를 한다
// 모든 질문에 스트, 볼 합이 같다면 카운팅을 해주면된다
// 만약에 3스트가 있다면 무조건 1
// 각 자릿수마다 포함되어있고 위치 같은지 확인
const solution = (input) => {
  const n = Number(input[0]);
  const questions = [];

  for (let i = 1; i <= n; i++) {
    const [val, strike, ball] = input[i].split(" ");
    questions.push([val, Number(strike), Number(ball)]);
  }

  const combs = [];

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        if (i !== j && j !== k && i !== k) {
          combs.push(`${i}${j}${k}`);
        }
      }
    }
  }

  let answer = 0;
  let isAllStrike = false;

  for (const comb of combs) {
    let isValid = true;

    for (const [question, strike, ball] of questions) {
      let s = 0;
      let b = 0;
      for (let i = 0; i < 3; i++) {
        const s1 = comb[i];
        if (question.includes(s1) && question[i] === s1) {
          s += 1;
        } else if (question.includes(s1) && question[i] !== s1) {
          b += 1;
        }
      }

      if (strike === 3) isAllStrike = true;
      if (s !== strike || b !== ball) isValid = false;
    }

    if (isValid) answer += 1;
  }

  console.log(isAllStrike ? 1 : answer);
};

solution(input);
