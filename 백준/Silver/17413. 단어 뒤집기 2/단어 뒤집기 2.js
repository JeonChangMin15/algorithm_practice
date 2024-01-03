const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 띄어쓰기로 단어를 구분한다 뒤집어야한다
// <>괄호안에 있는 문자열은 뒤집지 않는다
// 반복문으로 돌려서 꺽쇠가 들어온 상태면 계속 문자열을 넣는다 그리고 닫힌 꺽쇠가 들어오면 문자열을 담는 배열에다가 넣는다
// 꺽쇠와 다음에는 공백은 없다
// 배열에 들어간 단어들은 꺽쇠가 없다면 무조건 띄어쓰기
const solution = (input) => {
  const str = input[0];

  const arr = [];
  let isArrow = false;
  let cur = "";
  for (let s of str) {
    if (s === "<") {
      if (cur.length > 0) {
        arr.push(cur);
        cur = "";
      }
      isArrow = true;
      cur += s;
      continue;
    }
    if (isArrow && s !== ">") {
      cur += s;
      continue;
    }
    if (isArrow && s === ">") {
      cur += s;
      arr.push(cur);
      isArrow = false;
      cur = "";
      continue;
    }

    if (!isArrow && s !== " ") {
      cur += s;
      continue;
    }

    if (!isArrow && s === " ") {
      arr.push(cur);
      cur = "";
      continue;
    }
  }

  if (cur.length > 0) arr.push(cur);

  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (i === 0) {
      if (current.includes("<")) answer += current;
      else {
        const rever = current.split("").reverse().join("");
        answer += rever;
      }
      continue;
    }

    const isPrevArrow = arr[i - 1].includes("<");
    const isCurrentArrow = current.includes("<");
    if (isCurrentArrow) {
      answer += current;
      continue;
    }

    if (isPrevArrow) {
      const rever = current.split("").reverse().join("");
      answer += rever;
    } else {
      const rever = current.split("").reverse().join("");
      answer += " " + rever;
    }
  }

  console.log(answer);
};

solution(input);
