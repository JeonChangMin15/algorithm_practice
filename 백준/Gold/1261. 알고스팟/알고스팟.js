// const input = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.replace(/\r/, ""));

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 상하좌우로 움직일 수 있다
// 첫째줄에 rowN, colN 0은 빈방, 1은 벽
// 도착점으로 이동하기위해서 최소 벽을 몇개 부숴야하는지 출력
// bfs로 움직일때 다음 이동이 벽이면 cnt+1 아니면 그냥 이동
// visited로 체킹하고 먼저 벽이 아닌거부터 넣는다

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
  const [colN, rowN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split("").map((v) => Number(v)));
  }

  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(Infinity));
  visited[0][0] = 0;

  const queue = new Queue();
  queue.enqueue([0, 0, 0]);

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    const [x, y, cnt] = queue.dequeue();

    for (const [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;
      const isValid = nextX >= 0 && nextX < rowN && nextY >= 0 && nextY < colN;

      if (!isValid) continue;

      if (grid[nextX][nextY] === 0 && cnt < visited[nextX][nextY]) {
        visited[nextX][nextY] = cnt;
        queue.enqueue([nextX, nextY, cnt]);
      }

      if (grid[nextX][nextY] === 1 && cnt + 1 < visited[nextX][nextY]) {
        visited[nextX][nextY] = cnt + 1;
        queue.enqueue([nextX, nextY, cnt + 1]);
      }
    }
  }

  console.log(visited[rowN - 1][colN - 1]);
};

solution(input);
