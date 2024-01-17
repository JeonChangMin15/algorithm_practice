const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 재료 N개가 주어지고 재료의 신맛S, 쓴맛B
// 여러 재료를 이용하면 신맛은 신맛의 곱, 쓴맛은 합
// 신맛과 쓴맛의 차이를 작게한다
// 재료는 적어도 하나를 사용한다
// 조합문제다 재귀함수를 사용하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const score = [];

  for (let i = 1; i < input.length; i++) {
    score.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = Infinity;

  const dfs = (arr) => {
    if (arr.length > n) return;
    if (arr.length > 0) {
      let a = 1;
      let b = 0;

      arr.forEach((index) => {
        const [n1, n2] = score[index];
        a *= n1;
        b += n2;
      });
      answer = Math.min(answer, Math.abs(a - b));
    }

    for (let i = 0; i < n; i++) {
      if (!arr.includes(i)) {
        arr.push(i);
        dfs(arr);
        arr.pop();
      }
    }
  };

  dfs([]);

  console.log(answer);
};

solution(input);
