const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1,2,3으로 n을 표현하는 방식중 k번째 오는 식을 출력한다
// k번째 오는 식이 없는 경우는 -1을 출력
// 백트래킹으로 다 더하면된다
const solution = (input) => {
  const [targetN, order] = input[0].split(" ").map((v) => Number(v));
  const nums = [1, 2, 3];
  const answer = [];

  const dfs = (arr) => {
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    if (sum > targetN) return;
    if (sum === targetN) {
      answer.push(arr.join("+"));
      return;
    }

    for (let i = 0; i < 3; i++) {
      arr.push(nums[i]);
      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);

  console.log(answer.length >= order ? answer[order - 1] : -1);
};

solution(input);
