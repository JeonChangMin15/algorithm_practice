const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const solution = (input) => {
  const [dotN, lineN] = input[0].split(" ").map((v) => Number(v));
  const dots = input[1]
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  const lineArr = [];

  for (let i = 2; i < 2 + lineN; i++) {
    lineArr.push(input[i].split(" ").map((v) => Number(v)));
  }

  const dotMin = (start, end) => {
    let lt = 0;
    let rt = dotN - 1;
    let answer = -1;

    while (lt <= rt) {
      const dotIndex = Math.floor((lt + rt) / 2);

      if (start <= dots[dotIndex] && end >= dots[dotIndex]) {
        answer = dotIndex;
        rt = dotIndex - 1;
      } else if (start > dots[dotIndex]) {
        lt = dotIndex + 1;
      } else if (end < dots[dotIndex]) {
        rt = dotIndex - 1;
      }
    }

    return answer;
  };

  const dotMax = (start, end) => {
    let lt = 0;
    let rt = dotN - 1;
    let answer = -1;

    while (lt <= rt) {
      const dotIndex = Math.floor((lt + rt) / 2);

      if (start <= dots[dotIndex] && end >= dots[dotIndex]) {
        answer = dotIndex;
        lt = dotIndex + 1;
      } else if (start > dots[dotIndex]) {
        lt = dotIndex + 1;
      } else if (end < dots[dotIndex]) {
        rt = dotIndex - 1;
      }
    }

    return answer;
  };

  let arr = [];
  for (const [start, end] of lineArr) {
    const minIndex = dotMin(start, end);
    const maxIndex = dotMax(start, end);

    if (minIndex === -1 || maxIndex === -1) {
      arr.push(0);
    } else {
      arr.push(maxIndex - minIndex + 1);
    }
  }

  console.log(arr.join("\n"));
};

solution(input);
