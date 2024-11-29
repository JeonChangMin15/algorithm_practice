const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 0-9 까지 숫자가 단 하나만 들어갈 수 있다
// 해당 부등호를 만족하는 숫자조합을 최대 최소를 각각 출력해야된다
// step으로 바로 직전값과 해당 부등호를 보고 판단해서 넣으면된다.
const solution = (input) => {
  const n = Number(input[0]);
  const method = input[1].split(" ");
  const answer = [];

  const dfs = (arr, step) => {
    if (step === n) {
      answer.push(arr.join(""));
      return;
    }

    for (let i = 0; i <= 9; i++) {
      if (arr.includes(i)) continue;
      if (step === -1) {
        arr.push(i);
        dfs(arr, step + 1);
        arr.pop();
      } else {
        if (method[step] === "<" && arr[step] < i) {
          arr.push(i);
          dfs(arr, step + 1);
          arr.pop();
        }

        if (method[step] === ">" && arr[step] > i) {
          arr.push(i);
          dfs(arr, step + 1);
          arr.pop();
        }
      }
    }
  };

  dfs([], -1);

  console.log(answer[answer.length - 1]);
  console.log(answer[0]);
};

solution(input);
