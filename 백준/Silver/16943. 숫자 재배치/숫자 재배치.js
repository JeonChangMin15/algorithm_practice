const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 두정수 A,B 가 주어지고 A에 포함된 숫자의 순서를 섞어서 새로운 수 C를 만든다
// C중에서 B보다 작으면 가장 큰 값을 구한다.
// 만약 없으면 -1을 출력해야된다
// 먼저 A를 string, split -> Number를 통해서 숫자 배열로 만들고나서
// 중복없는 숫자 조합을 만든다. 배열을 만들어서 하나씩 확인을 한다
const solution = (input) => {
  const [num, target] = input[0].split(" ").map((v) => Number(v));
  const numArr = String(num)
    .split("")
    .map((v) => Number(v));

  let max = -1;

  const dfs = (arr) => {
    if (arr.length === numArr.length) {
      if (numArr[arr[0]] === 0) return;
      const value = Number(arr.map((v) => numArr[v]).join(""));
      if (value < target && value !== num) {
        max = Math.max(value, max);
      }

      return;
    }

    for (let i = 0; i < numArr.length; i++) {
      if (!arr.includes(i)) {
        arr.push(i);
        dfs(arr);
        arr.pop();
      }
    }
  };

  dfs([]);
  console.log(max);
};

solution(input);
