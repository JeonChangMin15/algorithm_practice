// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.replace(/\r/, ""));

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 S, 두번째줄에 T가 주어진다
// S를 T로 바꾸는데 성공하면1, 실패하면 0
// 문자열의 뒤에서 A를 추가  or 문자열 뒤에 B를 추가하고 뒤집는다
// T -> S로 바꾸는 방식으로 진행
// 맨뒤에 A가 있으면 제거
// 맨앞에 B면 뒤집고 B를 제거
const solution = (input) => {
  const startStr = input[0];
  const startLength = input[0].length;
  const endStr = input[1];

  const queue = [endStr];
  const set = new Set();
  set.add(endStr);

  while (queue.length) {
    const curStr = queue.shift();
    const curLen = curStr.length;
    if (curStr.length <= startLength) continue;

    if (curStr[curLen - 1] === "A") {
      const newStr = curStr.slice(0, curLen - 1);
      if (!set.has(newStr)) {
        set.add(newStr);
        queue.push(newStr);
      }
    }

    if (curStr[0] === "B") {
      const newStr = curStr
        .split("")
        .reverse()
        .join("")
        .slice(0, curLen - 1);

      if (!set.has(newStr)) {
        set.add(newStr);
        queue.push(newStr);
      }
    }
  }

  console.log(set.has(startStr) ? 1 : 0);
};

solution(input);
