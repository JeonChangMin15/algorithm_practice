const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 별표는 단 한개 그럼 해당 패턴을 split을하고 두개의 문자열이 존재하는지
// 그리고 두개의 문자열이 양끝에 존재하는지 확인을 해야한다
// 하나씩 다 확인을 해봐야될거같다
const solution = (input) => {
  const n = Number(input[0]);
  const pattern = input[1].split("*");
  const sample = [];

  for (let i = 2; i < input.length; i++) {
    sample.push(input[i]);
  }

  for (let str of sample) {
    const initialPattern = pattern[0];
    const endPattern = pattern[1];

    let isInitialValid = true;
    let isEndValid = true;

    if (initialPattern.length + endPattern.length > str.length) {
      console.log("NE");
      continue;
    }

    for (let i = 0; i < initialPattern.length; i++) {
      if (initialPattern[i] !== str[i]) isInitialValid = false;
    }

    for (let i = 0; i < endPattern.length; i++) {
      if (endPattern[i] !== str[str.length - endPattern.length + i]) {
        isEndValid = false;
      }
    }

    if (isInitialValid && isEndValid) {
      console.log("DA");
    } else {
      console.log("NE");
    }
  }
};

solution(input);
