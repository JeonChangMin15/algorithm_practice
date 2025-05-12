const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 5 25 125 625 3200
// 1부터 5까지 조합을 만드는데 넣는 숫자가
// i-2, i-1번째 값과 같지 않게 조합을 만든다
// 그렇게 하고나서 5점 이상이면 카운팅을 한다
const solution = (input) => {
  const answerSheet = input[0].split(" ").map((v) => Number(v));
  let answer = 0;

  const backTracking = (arr) => {
    if (arr.length === 10) {
      let cnt = 0;

      for (let i = 0; i < 10; i++) {
        if (arr[i] === answerSheet[i]) cnt += 1;
      }

      if (cnt >= 5) answer += 1;
      return;
    }

    for (let i = 1; i <= 5; i++) {
      if (arr.length < 2) {
        arr.push(i);
      } else {
        const len = arr.length;
        if (arr[len - 2] === arr[len - 1] && arr[len - 1] === i) continue;
        arr.push(i);
      }
      backTracking(arr);
      arr.pop();
    }
  };

  backTracking([]);
  console.log(answer);
};

solution(input);
