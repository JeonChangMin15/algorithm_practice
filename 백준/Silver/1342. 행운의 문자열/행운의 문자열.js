const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 문자열이 하나 주어진다
// 문자를 재배치해서 인접해 있는 문자가 같지 않다면 행운의 문자열로 취급
// 서로다른 행운의 문자열의 갯수를 출력한다
// 백트래킹으로 모든 경우의 수를 구한다
const solution = (input) => {
  const str = input[0];
  const n = str.length;

  const set = new Set();

  const backTrack = (arr) => {
    if (arr.length === n) {
      let isValid = true;
      const curStr = arr.map((v) => str[v]).join("");
      let prev = curStr[0];

      for (let i = 1; i < n; i++) {
        if (prev !== curStr[i]) {
          prev = curStr[i];
        } else {
          isValid = false;
          break;
        }
      }

      if (isValid) set.add(curStr);

      return;
    }

    for (let i = 0; i < n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTrack(arr);
      arr.pop();
    }
  };

  backTrack([]);

  console.log(set.size);
};

solution(input);
