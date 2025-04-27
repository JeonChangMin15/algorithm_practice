const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [lockN, knowN] = input[0].split(" ").map((v) => Number(v));
  const knowNums = knowN ? input[1].split(" ").map((v) => Number(v)) : [];
  let answer = 0;

  const backTrack = (arr) => {
    if (arr.length === lockN) {
      const isValid = knowNums.every((v) => arr.includes(v));
      if (isValid || knowNums.length === 0) {
        answer += 1;
      }

      return;
    }

    for (let i = 0; i <= 9; i++) {
      arr.push(i);
      backTrack(arr);
      arr.pop();
    }
  };

  backTrack([]);

  console.log(answer);
};

solution(input);
