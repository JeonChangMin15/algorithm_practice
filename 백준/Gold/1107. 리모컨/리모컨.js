const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 리모컨으로 채널 이동하는데 버튼을 최소 몇번 눌러야하는지 구한다
// 시작점은 100이다. 첫째줄에 목표채널, 두번째줄에는 고장난 버튼의 갯수
// 세번째줄에는 고장난 버튼의 숫자들이 주어진다.
// + -로 1씩 증가 감소 시킬 수 있다
// 1. 100번 채널에서 + - 로 목표채널로 가능 방법
// 2. 해당채널로 바로 눌러서 이동 -> 숫자 자릿수 만큼 누름, 목표채널의 숫자가
// 고장난 숫자에 하나도 포함안되어 있으면 가능하다
// 3. 만약 목표채널이 고장난 숫자에 포함되어있으면 해당 숫자에서 1씩 증가, 감소 시켜서
// 고장난 숫자가 하나도 포함안되어있는 숫자와의 차이 + 해당 숫자의 자릿수
const solution = (input) => {
  const target = Number(input[0]);
  const breakN = Number(input[1]);
  const breakNums = breakN > 0 ? input[2].split(" ").map((v) => Number(v)) : [];

  const firstOption = Math.abs(target - 100);
  const targetNums = String(target)
    .split("")
    .map((v) => Number(v));

  const isAllNumberNotBreak = targetNums.every((v) => !breakNums.includes(v));
  let secondOption = Infinity;

  if (isAllNumberNotBreak) {
    secondOption = targetNums.length;
  } else {
    let cnt = 1;
    let lt = target - 1;
    let rt = target + 1;

    if (breakN !== 10) {
      while (true) {
        let value = Infinity;
        const isLtAllNumberNotBreak =
          lt >= 0
            ? String(lt)
                .split("")
                .map((v) => Number(v))
                .every((v) => !breakNums.includes(v))
            : false;

        const isRtAllNumberNotBreak = String(rt)
          .split("")
          .map((v) => Number(v))
          .every((v) => !breakNums.includes(v));

        if (isLtAllNumberNotBreak) {
          value = Math.min(cnt + String(lt).length, value);
        }

        if (isRtAllNumberNotBreak) {
          value = Math.min(cnt + String(rt).length, value);
        }

        if (isLtAllNumberNotBreak || isRtAllNumberNotBreak) {
          secondOption = value;
          break;
        }

        cnt += 1;
        lt -= 1;
        rt += 1;
      }
    }
  }

  console.log(Math.min(firstOption, secondOption));
};

solution(input);
