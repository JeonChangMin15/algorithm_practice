const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 소의 마릿수와 뽑을 소의 수가 주어진다
// 두번재줄에 소들의 몸무게가 주어진다
// 소들의 몸무게의 합이 소수이면 맞다
// 몸무게의 합으로 만들 수 소수를 오름차순으로 출력, 없으면 -1
// 0부터 n-1까지 중복없는 순열을 만든후 해당 몸무게로 다시 넣어서 소수 판별하면된다
const solution = (input) => {
  const [n, pickN] = input[0].split(" ").map((v) => Number(v));
  const weight = input[1].split(" ").map((v) => Number(v));

  const isPrime = (sumWeight) => {
    const end = Math.floor(Math.sqrt(sumWeight));

    for (let i = 2; i <= end; i++) {
      if (sumWeight % i === 0) return false;
    }

    return true;
  };
  const answer = [];

  const backTrack = (arr, start, sum) => {
    if (arr.length === pickN) {
      if (isPrime(sum) && !answer.includes(sum)) {
        answer.push(sum);
      }

      return;
    }

    for (let i = start; i < n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTrack(arr, i + 1, sum + weight[i]);
      arr.pop();
    }
  };

  backTrack([], 0, 0);

  console.log(answer.length ? answer.sort((a, b) => a - b).join(" ") : -1);
};

solution(input);
