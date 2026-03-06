const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// N마리의 소중에서 M마리를 선별해서 소들의 몸무게가 소수인
// 경우를 오름차순으로 전부 출력한다. 그러한 경우가 없으면 -1 출력
// 첫번째줄에 소전체 마릿수, 선별할 소의 수
// 두번째줄에 소들의 몸무게가 주어진다
// 백트레킹으로 중복없는 조합을 만들고 소수를 판별하면된다
const solution = (input) => {
  const [totalN, pickN] = input[0].split(" ").map((v) => Number(v));
  const weight = input[1].split(" ").map((v) => Number(v));

  const answer = [];

  const isPrime = (value) => {
    let valid = true;

    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        valid = false;
        return;
      }
    }

    return valid;
  };

  const backTrack = (arr, start) => {
    if (arr.length === pickN) {
      const totalWeight = arr
        .map((v) => weight[v])
        .reduce((prev, cur) => prev + cur, 0);

      if (isPrime(totalWeight) && !answer.includes(totalWeight)) {
        answer.push(totalWeight);
      }
      return;
    }

    for (let i = start; i < totalN; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTrack(arr, i + 1);
      arr.pop();
    }
  };

  backTrack([], 0);

  console.log(answer.length ? answer.sort((a, b) => a - b).join(" ") : -1);
};

solution(input);
