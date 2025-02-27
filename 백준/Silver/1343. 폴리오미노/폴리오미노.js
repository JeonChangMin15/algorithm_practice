const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 문자열이 주어지고 AAAA, BB로 X를 채울거다.
// 사전순으로 가장 앞서는 답을 출력하고 덮을 수 없으면 -1을 출력한다
// for문을 돌리면서 x면 개수를 카운팅하고 .이면 여태 카운팅한걸
// 계산을 한다. 갯수에서 4로 나눈 나머지가 2,0이면 몫만큼 AAAA, 나머지가 있으면 BB
// 만약 1, 3이면 break박고 false
// .이면 갯수 초기화하고 .을 넣어주면된다. 마지막에 갯수가 남아있으면 처리해줘야한다
const solution = (input) => {
  const testStr = input[0];

  let Xcnt = 0;
  let isValid = true;
  let answer = "";

  for (let i = 0; i < testStr.length; i++) {
    const curStr = testStr[i];
    if (curStr === "X") {
      Xcnt += 1;
    } else {
      if (Xcnt % 4 === 1 || Xcnt % 4 === 3) {
        isValid = false;
        break;
      } else {
        const aCount = Math.floor(Xcnt / 4);
        const bCount = Math.floor(Xcnt % 4);
        if (aCount > 0) {
          for (let a = 0; a < aCount; a++) {
            answer += "AAAA";
          }
        }

        if (bCount > 0) {
          answer += "BB";
        }

        Xcnt = 0;
        answer += ".";
      }
    }
  }

  if (Xcnt > 0) {
    if (Xcnt % 4 === 1 || Xcnt % 4 === 3) {
      isValid = false;
    } else {
      const aCount = Math.floor(Xcnt / 4);
      const bCount = Math.floor(Xcnt % 4);
      if (aCount > 0) {
        for (let a = 0; a < aCount; a++) {
          answer += "AAAA";
        }
      }

      if (bCount > 0) {
        answer += "BB";
      }
    }
  }

  console.log(isValid ? answer : -1);
};

solution(input);
