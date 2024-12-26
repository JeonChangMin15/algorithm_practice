const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1부터 5까지 숫자를 넣는데 3개 연속으로 같은 숫자를 넣지 않는 방식으로 조합을 만든다
// 정답이 주어졌을때 5점 이상인 경우의 수를 구해라
// 숫자를 집어넣을때 앞에 숫자 2개랑 다르면 넣고 아니면 continue 하는 방식으로 하면된다
const solution = (input) => {
  const answerArr = input[0].split(" ").map((v) => Number(v));
  let cnt = 0;

  const dfs = (arr) => {
    if (arr.length === 10) {
      let answer = 0;

      arr.forEach((val, index) => {
        if (val === answerArr[index]) answer += 1;
      });

      if (answer >= 5) cnt += 1;

      return;
    }

    for (let i = 1; i <= 5; i++) {
      if (arr.length < 2) {
        arr.push(i);
      } else {
        if (arr[arr.length - 2] === i && arr[arr.length - 1] === i) {
          continue;
        }
        arr.push(i);
      }

      dfs(arr);
      arr.pop();
    }
  };

  dfs([]);

  console.log(cnt);
};

solution(input);
