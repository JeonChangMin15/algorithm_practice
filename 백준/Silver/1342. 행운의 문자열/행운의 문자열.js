const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 첫번째줄에 문자열이 주어지고 문자열을 재배치해서 인접해 있는 모든 문자가 같지 않으면 카운팅을한다
// 백트래킹으로 문자열을 더했는지 체킹하면서 더하고 문자열이 원래 문자열길이가 되면 검사를하면된다?
const solution = (input) => {
  const orginString = input[0];
  const n = input[0].length;
  const isContain = Array(n).fill(false);
  let cnt = 0;
  const unique = new Set();

  const dfs = (curStr) => {
    if (curStr.length === n) {
      let isValid = true;

      for (let i = 0; i < n; i++) {
        if (i - 1 >= 0 && curStr[i] === curStr[i - 1]) {
          isValid = false;
        }

        if (i + 1 < n && curStr[i] === curStr[i + 1]) {
          isValid = false;
        }
      }

      if (isValid && !unique.has(curStr)) {
        cnt += 1;
        unique.add(curStr);
      }
    }

    for (let i = 0; i < n; i++) {
      if (isContain[i]) continue;
      isContain[i] = true;
      dfs(curStr + orginString[i]);
      isContain[i] = false;
    }
  };

  dfs([]);

  console.log(cnt);
};

solution(input);
