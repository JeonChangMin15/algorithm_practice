const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫째줄에 colN, rowN, height가 주어진다
// 두번째줄부터 밑에 있는 토마토부터 상태가 주어진다
// 1은 익은 토마토 0은 익지않은 토마토 -1은 토마토가 없는 칸이다
// 3차원배열로 넣어주고 삼중 for문으로 익은 토마토의 좌표를 먼저 큐에 넣어줘서
// bfs로 상하좌우위아래 여섯 좌표를 익지않은곳이면 전염시키고 day+1을 해주면된다
// 탐색이 완료되고 0이 하나라도 있으면 -1 출력

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return false;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }
}

const solution = (input) => {
  const [colN, rowN, heightN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 0; i < heightN; i++) {
    const g = [];
    for (let j = rowN * i + 1; j < (i + 1) * rowN + 1; j++) {
      g.push(input[j].split(" ").map((v) => Number(v)));
    }

    grid.push(g);
  }

  const queue = new Queue();

  for (let i = 0; i < heightN; i++) {
    for (let j = 0; j < rowN; j++) {
      for (let k = 0; k < colN; k++) {
        if (grid[i][j][k] === 1) {
          queue.enqueue([i, j, k, 0]);
        }
      }
    }
  }

  const dirs = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];

  let lastDay = 0;

  while (queue.length) {
    const [z, x, y, day] = queue.dequeue();
    lastDay = Math.max(lastDay, day);

    for (const [dz, dx, dy] of dirs) {
      const nextZ = z + dz;
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid =
        nextZ >= 0 &&
        nextZ < heightN &&
        nextX >= 0 &&
        nextX < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        grid[nextZ][nextX][nextY] === 0;

      if (isValid) {
        queue.enqueue([nextZ, nextX, nextY, day + 1]);
        grid[nextZ][nextX][nextY] = 1;
      }
    }
  }

  for (let i = 0; i < heightN; i++) {
    for (let j = 0; j < rowN; j++) {
      for (let k = 0; k < colN; k++) {
        if (grid[i][j][k] === 0) lastDay = -1;
      }
    }
  }

  console.log(lastDay);
};

solution(input);
