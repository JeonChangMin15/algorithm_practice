const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 김밥 N개가 존재하고 양쪽 균일하게 Kcm만큼 잘라낸다
// 김밥길이가 2K보다 짧으면 한쪽만, Kcm이하면 폐기
// 해당 (원래길이 - 2K) 모두 일정한 길이 Pcm로 잘라서 김밥조각을 만든다
// Pcm로 자른 김밥 조각을 최소 M개, P를 얼마로 설정해야되나?
// 이분탐색으로 Pcm를 탐색하면되는데 먼저 남은 길이들을 저장하는 배열을 만들고
// 거기서 탐색을 하면된다
const solution = (input) => {
  const [n, cutLen, minKimbabN] = input[0].split(" ").map((v) => Number(v));
  const arr = [];

  for (let i = 1; i <= n; i++) {
    const val = Number(input[i]);

    if (val >= 2 * cutLen) {
      arr.push(val - 2 * cutLen);
    } else if (val > cutLen && val < 2 * cutLen) {
      arr.push(val - cutLen);
    }
  }

  let lt = 1;
  let rt = Math.max(...arr);
  let answer = -1;

  while (lt <= rt) {
    let makeKimbab = 0;
    const mid = Math.floor((lt + rt) / 2);

    arr.forEach((val) => {
      makeKimbab += Math.floor(val / mid);
    });

    if (makeKimbab >= minKimbabN) {
      lt = mid + 1;
      answer = Math.max(answer, mid);
    } else {
      rt = mid - 1;
    }
  }

  console.log(answer);
};

solution(input);
