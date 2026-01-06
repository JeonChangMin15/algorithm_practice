const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// -1, +1, *2로 이동이 가능하다
// 0<x<100000
// 1초씩 걸리고 가장빠른 초
// [위치, 시간]으로 bfs로 탐색하면서 set에 넣고 중복 체크한다
const solution = (input) => {
  const [start, end] = input[0].split(" ").map((v) => Number(v));
  const set = new Set();
  set.add(start);

  const queue = [[start, 0]];

  while (queue.length) {
    const [pos, time] = queue.shift();

    if (pos === end) {
      console.log(time);
      break;
    }

    if (pos - 1 >= 0 && !set.has(pos - 1)) {
      queue.push([pos - 1, time + 1]);
      set.add(pos - 1);
    }

    if (pos + 1 <= 100000 && !set.has(pos + 1)) {
      queue.push([pos + 1, time + 1]);
      set.add(pos + 1);
    }

    if (pos * 2 <= 100000 && !set.has(pos * 2)) {
      queue.push([pos * 2, time + 1]);
      set.add(pos * 2);
    }
  }
};

solution(input);
