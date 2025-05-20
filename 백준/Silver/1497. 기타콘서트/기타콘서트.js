const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 최소한의 기타 수로 모든곡을 연주할 수 있는걸 구해라
// 기타의 수는 10이하
// 해당 기타를 사용할지 안할지 체킹을 한후
// 사용가능 기타에서 Y인 곡에 true를 마킹 후
// 모두 true면 값 Min값 갱신하면된다
const solution = (input) => {
  const [guiterN, musicN] = input[0].split(" ").map((v) => Number(v));
  const info = [];

  for (let i = 1; i <= guiterN; i++) {
    info.push(input[i].split(" "));
  }

  const useGuiter = Array(guiterN).fill(false);
  let answer = 0;
  let songCnt = 0;

  const backTrack = (start) => {
    const songCheck = Array(musicN).fill(false);

    for (let i = 0; i < guiterN; i++) {
      if (!useGuiter[i]) continue;
      const musicInfo = info[i][1];

      for (let j = 0; j < musicN; j++) {
        if (musicInfo[j] === "Y") songCheck[j] = true;
      }
    }

    const curSongAvailable = songCheck.filter((v) => v === true).length;
    const curGuiterCnt = useGuiter.filter((v) => v === true).length;

    if (curSongAvailable > songCnt) {
      answer = curGuiterCnt;
      songCnt = curSongAvailable;
    } else if (curSongAvailable === songCnt) {
      answer = Math.min(answer, curGuiterCnt);
    }

    for (let i = start; i < guiterN; i++) {
      useGuiter[i] = true;
      backTrack(i + 1);
      useGuiter[i] = false;
    }
  };

  backTrack(0);

  console.log(answer > 0 ? answer : -1);
};

solution(input);
