const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 1부터 9까지 서로 다른 숫자 세개로 구성된 세자리수를 묻는다
// 거기서 숫자가 동일한 위치면 스트1 숫자는 존재하지만 위치가 다르면 볼1
// 질문에 다 맞으면 가능한 숫자로 쳐준다
// 삼중 for문으로 모든 경우의 케이스를 검사를 시작한다
// 그리고 각 케이스마다 위치와 존재여부를 확인해서 볼,스트라이크를 검사한다
// 모든 질문에 볼 스트 갯수가 일치하면 카운팅을 해준다
const solution = (input) => {
  const caseN = Number(input[0]);
  const question = [];

  for (let i = 1; i <= caseN; i++) {
    question.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = 0;

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        if (i !== j && j !== k && i !== k) {
          const val = [i, j, k];
          let isValid = true;

          for (const [q, s, b] of question) {
            let curS = 0;
            let curB = 0;
            for (let l = 0; l < 3; l++) {
              const v = val[l];
              const qArr = String(q)
                .split("")
                .map((v) => Number(v));

              if (qArr.includes(v) && qArr[l] === v) {
                curS += 1;
              }

              if (qArr.includes(v) && qArr[l] !== v) {
                curB += 1;
              }
            }

            if (curS !== s || curB !== b) {
              isValid = false;
            }
          }

          if (isValid) answer += 1;
        }
      }
    }
  }

  console.log(answer);
};

solution(input);
