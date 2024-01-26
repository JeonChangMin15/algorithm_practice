const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 괄호가 서로 여닫는 형태면 YES 아니면 NO를 출력
// 첫째줄에는 데이터 수
// 일단 "("는 stack에 넣는다
// ")"차례일때 stack이 비어있으면 NO 아니면 pop을 하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const testCase = [];

  for (let i = 1; i < input.length; i++) {
    testCase.push(input[i]);
  }

  for (let i = 0; i < testCase.length; i++) {
    const stack = [];
    let isValid = true;
    const str = testCase[i];

    for (let j = 0; j < str.length; j++) {
      if (str[j] === "(") {
        stack.push("(");
      } else {
        if (stack.length > 0) stack.pop();
        else {
          isValid = false;
          break;
        }
      }
    }

    if (stack.length > 0 || !isValid) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  }
};

solution(input);
