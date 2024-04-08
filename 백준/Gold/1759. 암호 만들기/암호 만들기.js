const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const [wordLen, sampleN] = input[0].split(" ").map((v) => Number(v));
  const samples = input[1].split(" ").sort();
  const fiveAlphabet = ["a", "e", "i", "o", "u"];
  const answer = [];

  const dfs = (arr, start) => {
    if (arr.length === wordLen) {
      let alpha = 0;
      let notAlpha = 0;
      for (str of arr) {
        if (fiveAlphabet.includes(str)) alpha += 1;
        else notAlpha += 1;
      }

      if (alpha >= 1 && notAlpha >= 2) {
        answer.push(arr.join(""));
      }

      return;
    }

    for (let i = start; i < sampleN; i++) {
      arr.push(samples[i]);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 0);

  console.log(answer.join("\n"));
};

solution(input);
