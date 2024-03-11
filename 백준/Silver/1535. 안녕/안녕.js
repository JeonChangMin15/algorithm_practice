const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// n명의 사람한테 인사를 해서 최대의 기쁨을 얻을 수 있는 값을 구해야된다
// 모든 조합의 수를 구해야하나?
// 첫번째줄에는 사람의 수
// 두번째줄에는 각 사람에 들어가는 피로도, 세번째줄은 각사람의 기쁨
// 체력은 100부터 시작해서 총합의 피로도는 100보다 작아야한다.

const solution = (input) => {
  const n = Number(input[0]);
  const tired = input[1].split(" ").map((v) => Number(v));
  const happy = input[2].split(" ").map((v) => Number(v));
  const sayHello = Array(n).fill(false);
  let max = 0;

  const dfs = (start) => {
    const person = [];
    for (let i = 0; i < n; i++) {
      if (sayHello[i]) person.push(i);
    }
    const totalTired = person.reduce((prev, cur) => prev + tired[cur], 0);
    const totalHappy = person.reduce((prev, cur) => prev + happy[cur], 0);
    if (totalTired < 100) {
      max = Math.max(totalHappy, max);
    }

    for (let i = start; i < n; i++) {
      sayHello[i] = true;
      dfs(i + 1);
      sayHello[i] = false;
    }
  };

  dfs(0);

  console.log(max);
};

solution(input);
