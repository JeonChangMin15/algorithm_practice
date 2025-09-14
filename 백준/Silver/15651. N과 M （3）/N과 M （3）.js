// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.replace(/\r/, ""));

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 n,m이 주어지고 1부터 n까지 m개 골라서
// 중복순열을 전부 출력한다
const solution = (input) => {
  const [n, lengthN] = input[0].split(" ").map((v) => Number(v));
  const anwser = [];

  const backTrack = (arr) => {
    if (arr.length === lengthN) {
      anwser.push(arr.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      arr.push(i);
      backTrack(arr);
      arr.pop();
    }
  };

  backTrack([]);

  console.log(anwser.join("\n"));
};

solution(input);
