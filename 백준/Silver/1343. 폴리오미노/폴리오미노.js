const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// AAAA BB로 X를 전부 덮는다
// .은 그대로 두고 사전순으로 한다
// 만약 안되면 -1을 출력한다
// for문으로 X의 갯수를 카운팅을 한다
// 그러다가 .이 나오면 X를 탐색을한다
// 2로 나눈 나머지가 1이면 -1로 바꾸고 끝
// 4로 나눈 몫만큼 AAAA더하고 나머지가 2면 BB를 더해준다
// X개수를 0으로 초기화한다
// 그리고 마지막에 for문이 끝나고 한번더 따로 검사를 해준다
const solution = (input) => {
  const testStr = input[0];
  let answer = "";
  let xCnt = 0;

  for (let i = 0; i < testStr.length; i++) {
    const cur = testStr[i];
    if (cur === "X") {
      xCnt += 1;
      continue;
    }

    if (xCnt % 2 === 1) {
      answer = -1;
      break;
    }
    const aaaaCnt = Math.floor(xCnt / 4);
    const bbCnt = xCnt % 4;

    for (let i = 0; i < aaaaCnt; i++) {
      answer += "AAAA";
    }

    if (bbCnt === 2) {
      answer += "BB";
    }

    answer += ".";
    xCnt = 0;
  }

  if (xCnt > 0) {
    if (xCnt % 2 === 1) {
      answer = -1;
    } else {
      const aaaaCnt = Math.floor(xCnt / 4);
      const bbCnt = xCnt % 4;

      for (let i = 0; i < aaaaCnt; i++) {
        answer += "AAAA";
      }

      if (bbCnt === 2) {
        answer += "BB";
      }
    }
  }

  console.log(answer);
};

solution(input);
