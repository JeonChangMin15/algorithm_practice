const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 비밀번호 길이, 알게된 비밀번호에 들어가는 수
// 두번째줄에 비밀번호에 무조건 포함되는 수
// 중복포함되는 순열에서 대조해봐야된다
const solution = (input) => {
  const [passwordLen, includeN] = input[0].split(" ").map((v) => Number(v));
  let includeArr = [];
  if (includeN > 0) {
    includeArr = input[1].split(" ").map((v) => Number(v));
  }

  let answer = 0;

  const backTrack = (arr) => {
    if (arr.length === passwordLen) {
      const curVal = arr.join("");
      let isValid = true;

      for (const val of includeArr) {
        if (!curVal.includes(val)) isValid = false;
      }

      if (isValid) {
        answer += 1;
      }

      return;
    }

    for (let i = 0; i <= 9; i++) {
      arr.push(i);
      backTrack(arr);
      arr.pop();
    }
  };

  backTrack([]);

  console.log(answer);
};

solution(input);
