const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 인형의 갯수 라이언 포함수
// 1이 라이언 2가 어피치
// K개 이상의 라이언 인형을 포함하는 가장 작은 연속된 인형들의 집합
// 투포인터로 lt=0, rt=0으로 시작을 한다
// 만약 갯수가 부족하면 계속해서 rt +=1
// 채워지면 lt +=1
// 집합수와, 현재 라이언 인형수를 기록을 해야된다
const solution = (input) => {
  const [n, lionN] = input[0].split(" ").map((v) => Number(v));
  const arr = input[1].split(" ").map((v) => Number(v));

  let lt = 0;
  let rt = 0;
  let curLionN = arr[0] === 1 ? 1 : 0;
  let answer = Infinity;

  while (lt < n && rt < n) {
    if (curLionN < lionN) {
      rt += 1;
      if (arr[rt] === 1) curLionN += 1;
    } else {
      answer = Math.min(rt - lt + 1, answer);
      if (arr[lt] === 1) curLionN -= 1;
      lt += 1;
    }
  }

  console.log(answer === Infinity ? -1 : answer);
};

solution(input);
