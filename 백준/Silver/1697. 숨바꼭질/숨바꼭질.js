const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n");

// N에 있고 동생은 K에 있다 걷거나 순간이동 가능하다
// 1초후에 X+1, x-1 순가이동하는 경우 2*X 1초후에
// 수빈이와 동생의 위치가 정해져였을때 가장 빠른시간을 구해라
// 첫째줄에 수빈이가 있는 위치 동생 위치
// bfs로 방문한 지점은 체크하고 하면된다
const solution = (input) => {
  const [start, target] = input[0].split(" ").map((v) => Number(v));
  const visited = Array(100001).fill(false);

  const queue = [[start, 0]];
  visited[start] = true;

  while (queue.length) {
    const [position, time] = queue.shift();
    if (position === target) {
      console.log(time);
      return;
    }

    if (position * 2 <= 100000 && !visited[position * 2] && position < target) {
      queue.push([position * 2, time + 1]);
      visited[position * 2] = true;
    }

    if (!visited[position + 1] && position < target) {
      queue.push([position + 1, time + 1]);
      visited[position + 1] = true;
    }

    if (position >= 0 && !visited[position - 1]) {
      queue.push([position - 1, time + 1]);
      visited[position - 1] = true;
    }
  }
};

solution(input);
