const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 부등호의 갯수가 주어지고 둘째줄에 부등호들이 주어진다
// 숫자조합은 0부터 9까지 하나씩만 사용해서 부등호 갯수 +1의 숫자 조합을 만들어서
// 부등호 관계를 다 만족하는 최대, 최소 정수를 출력해야된다 021 이런숫자도
// 일단 조합으로 해당 숫자의 길이에 해당되는걸 다 넣고 하나씩 부등호 조합을 비교하면될거같다
const solution = (input) => {
  const n = Number(input[0]);
  const relations = input[1].split(" ");

  let maxNum = -Infinity;
  let minNum = Infinity;

  let maxAnswer = "";
  let minAnswer = "";

  const dfs = (arr) => {
    if (arr.length === n + 1) {
      const val = arr.join("");
      let isValid = true;

      for (let i = 0; i < relations.length; i++) {
        if (relations[i] === "<" && arr[i] > arr[i + 1]) {
          isValid = false;
          break;
        }

        if (relations[i] === ">" && arr[i] < arr[i + 1]) {
          isValid = false;
          break;
        }
      }

      if (isValid && Number(val) > maxNum) {
        maxNum = Number(val);
        maxAnswer = val;
      }

      if (isValid && Number(val) < minNum) {
        minNum = Number(val);
        minAnswer = val;
      }
      return;
    }

    for (let i = 0; i <= 9; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);

  console.log(maxAnswer);
  console.log(minAnswer);
};

solution(input);
