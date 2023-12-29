const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// X로 처리된건 AAAA BB로 처리하고 .은 그대로 .으로 출력한다
// 만약 저 두개로 출력이 안되면 -1로 처리를 해야된다
// 먼저 .과 X를 구분해야된다
// 반복문으로 먼저 돌려서 X와 .을 분리한후
// X의 length가 4로 나누어서 나머지가 0이면 해당 몫만큼 AAAA붙여주고
// 만약 2면 해당 몫 + BB를 붙여준다
// 만약 나머지가 홀수면 -1 출력한다.
const solution = (input) => {
  const arr = [];
  const val = input[0];

  let str = "";

  for (s of val) {
    if (s === "X") {
      str += "X";
    } else {
      if (str.length > 0) arr.push(str);
      arr.push(".");
      str = "";
    }
  }
  if (str.length > 0) arr.push(str);

  let answer = "";

  for (s of arr) {
    if (s === ".") {
      answer += ".";
      continue;
    }

    if (s.length % 4 === 0) {
      let n = parseInt(s.length / 4);
      answer += "AAAA".repeat(n);
    }

    if (s.length % 4 === 2) {
      let n = parseInt(s.length / 4);
      answer += "AAAA".repeat(n);
      answer += "BB";
    }

    if (s.length % 4 === 1 || s.length % 4 === 3) {
      console.log(-1);
      return;
    }
  }

  console.log(answer);
};

solution(input);