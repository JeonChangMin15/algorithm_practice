const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 재료의 수가 주어지고
// 각각 재료의 쓴맛과 단맛이 주어진다
// 한개 이상의 재료를 선택했을때 해당 재료들의 쓴맛의 곱과 단맛의 곱 차이의
// 최솟값을 구해라
// 0부터 n-1 까지 중복없는 순열을 구한후 다 계산해서 구하면된다
const solution = (input) => {
  const n = Number(input[0]);
  const material = [];

  for (let i = 1; i <= n; i++) {
    const [s, v] = input[i].split(" ").map((v) => Number(v));
    material.push([s, v]);
  }

  let answer = Infinity;

  const backTrack = (arr) => {
    if (arr.length > 0) {
      let t1 = 1;
      let t2 = 0;

      for (const index of arr) {
        const [s, v] = material[index];
        t1 = t1 * s;
        t2 = t2 + v;
      }

      answer = Math.min(Math.abs(t1 - t2), answer);
    }

    for (let i = 0; i < n; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTrack(arr);
      arr.pop();
    }
  };

  backTrack([]);

  console.log(answer);
};

solution(input);
