const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째 줄에 운동키트 갯수와 하루 근손실이다
// 중복없는 순열을 만드는데 500kg 밑으로 하루라도 안떨어지는 조합의 수를 구해야된다
// 인자는 arr, weight를 넣어서 500 미만이면 return
const solution = (input) => {
  const [foodN, lose] = input[0].split(" ").map((v) => Number(v));
  const weightArr = input[1].split(" ").map((v) => Number(v));
  let answer = 0;

  const backTracking = (arr, weight) => {
    if (arr.length > foodN) return;
    if (weight < 500) return;
    if (arr.length === foodN) {
      answer += 1;
      return;
    }

    for (let i = 0; i < foodN; i++) {
      if (arr.includes(i)) continue;
      arr.push(i);
      backTracking(arr, weight - lose + weightArr[i]);
      arr.pop();
    }
  };

  backTracking([], 500);
  console.log(answer);
};

solution(input);
