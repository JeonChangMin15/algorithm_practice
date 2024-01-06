const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");


// 첫번째줄에는 동전종류수, 값이 주어진다
// 동전의 첫번째는 무조건 1이고 그다음부터 다음동전은 이전 동전의 배수이다
// 동전의 종류는 오름차순으로 주어지고, 값을 만족하는 동전의 최솟값을 출력한다
// 내림차순으로 정렬하고 해당 동전이 현재 값보다 작거나 같으면 해당 동전으로 나눈 몫만큼 빼고 다음 동전으로 가면된다

const solution = (input) => {
  const [n, total] = input[0].split(" ").map((v) => Number(v));
  const coin = [];

  for (let i = 1; i < input.length; i++) {
    coin.push(Number(input[i]));
  }
  coin.sort((a, b) => b - a);
  let cur = total;
  let answer = 0;
  for (let i = 0; i < coin.length; i++) {
    if (coin[i] <= cur) {
      const cnt = parseInt(cur / coin[i]);
      answer += cnt;
      cur -= cnt * coin[i];
    }
  }

  console.log(answer);
};

solution(input);
