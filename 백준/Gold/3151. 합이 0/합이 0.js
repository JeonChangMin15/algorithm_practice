const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

const solution = (input) => {
  const n = Number(input[0]);

  const scores = input[1].split(" ").map((v) => Number(v));
  const plusScores = [];
  const plusCnt = Array(20001).fill(0);

  const minusScores = [];
  const minusCnt = Array(20001).fill(0);

  let zeroCnt = 0;

  for (let i = 0; i < n; i++) {
    const s = scores[i];
    if (s > 0) {
      plusScores.push(s);
      plusCnt[s] += 1;
    }

    if (s < 0) {
      minusScores.push(s);
      minusCnt[s * -1] += 1;
    }

    if (s === 0) {
      zeroCnt += 1;
    }
  }

  let answer = 0;

  for (let i = 0; i < plusScores.length - 1; i++) {
    for (let j = i + 1; j < plusScores.length; j++) {
      const targetMinus = plusScores[i] + plusScores[j];
      answer += minusCnt[targetMinus];
    }
  }

  for (let i = 0; i < minusScores.length - 1; i++) {
    for (let j = i + 1; j < minusScores.length; j++) {
      const targePlus = (minusScores[i] + minusScores[j]) * -1;
      answer += plusCnt[targePlus];
    }
  }

  if (zeroCnt > 0) {
    for (let i = 0; i < plusScores.length; i++) {
      const ps = plusScores[i];
      const m = minusCnt[ps] * zeroCnt;
      answer += m;
    }
  }

  if (zeroCnt >= 3) {
    //5C3 -> 5!/3!2!
    let val1 = zeroCnt * (zeroCnt - 1) * (zeroCnt - 2);
    let val2 = 6;

    answer += val1 / val2;
  }

  console.log(answer);
};

solution(input);
