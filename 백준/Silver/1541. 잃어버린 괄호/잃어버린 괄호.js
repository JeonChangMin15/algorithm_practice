const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 가장 처음과 마지막은 무조건 숫자
// - + 기호가 주어지고 괄호를 잘 사용해서 최솟값을 구한다
// 일단 숫자 기호를 분리해서 배열에다가 넣는다
// 10 - 5 + 20 - 9 + 19 +10
// 기호가 한번이라도 마이너스가 나오면 그때부터는 계속 빼주면된다


const solution = (input) => {
  const example = input[0];
  let val = "";
  const arr = [];

  for (let i = 0; i < example.length; i++) {
    if (example[i] === "-" || example[i] === "+") {
      arr.push(Number(val));
      arr.push(example[i]);
      val = "";
    } else {
      val += String(example[i]);
    }
  }

  arr.push(Number(val));

  let isMinus = false;
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") continue;
    if (arr[i] === "-") isMinus = true;
    if (arr[i] !== "+" && arr[i] !== "-") {
      if (isMinus) answer -= arr[i];
      else answer += arr[i];
    }
  }

  console.log(answer);
};

solution(input);
