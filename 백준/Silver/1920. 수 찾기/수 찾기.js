const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 숫자의 개수가 주어진다. 두번째줄에는 숫자 참고 목록
// 세번째줄에 테스트 숫자 갯수, 네번쩨줄에 테스트 숫자 목록
// 테스트 숫자가 참고목록에 존재하는 테스트하면 된다.
// 존재하면 1, 없으면 0
// 숫자 참고목록을 오름차순으로 정렬한 후 하나씩 이분탐색으로 있는지 확인

const solution = (input) => {
  const lookN = Number(input[0]);
  const lookList = input[1].split(" ").map((v) => Number(v));
  const testN = Number(input[2]);
  const testList = input[3].split(" ").map((v) => Number(v));
  lookList.sort((a, b) => a - b);

  const testFunc = (target) => {
    let lt = 0;
    let rt = lookN - 1;
    let answer = 0;

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      const curVal = lookList[mid];

      if (curVal == target) {
        answer = 1;
        break;
      }

      if (curVal > target) {
        rt = mid - 1;
      }

      if (curVal < target) {
        lt = mid + 1;
      }
    }

    return answer;
  };

  let answerArr = [];

  for (let i = 0; i < testN; i++) {
    const exist = testFunc(testList[i]);
    answerArr.push(exist);
  }

  console.log(answerArr.join("\n"));
};

solution(input);
