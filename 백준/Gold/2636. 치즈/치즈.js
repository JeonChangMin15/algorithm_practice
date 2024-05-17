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

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번재줄에 rowN, colN이 주어지고 두번재줄부터 그리드가 주어진다
// 0은 빈공간 1은 치즈가 있는 칸이다
// 먼저 0,0부터 bfs로 빈공간을 큐에다가 다 넣는다
// while문으로 grid가 전부 다 빈공간이 아닐때까지 한다
// 빈공간에서 상하좌우 탐색으로 반약 1이면 0으로 바꾸고 해당 타임에 +1을 한다
const solution = (input) => {
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }

  const cheeseCnt = Array(100).fill(0);
  let time = 0;

  const checkCheese = () => {
    for (let i = 0; i < rowN; i++) {
      for (let j = 0; j < colN; j++) {
        if (grid[i][j] === 1) return true;
      }
    }

    return false;
  };

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (checkCheese()) {
    time += 1;

    const visited = Array(rowN)
      .fill(0)
      .map((v) => Array(colN).fill(false));

    const queue = new Queue();

    const dfs = (x, y) => {
      visited[x][y] = true;
      queue.enqueue([x, y]);

      for (const [dx, dy] of dirs) {
        const nextX = x + dx;
        const nextY = y + dy;
        const isValid =
          nextX >= 0 &&
          nextX < rowN &&
          nextY >= 0 &&
          nextY < colN &&
          !visited[nextX][nextY] &&
          grid[nextX][nextY] === 0;

        if (!isValid) continue;
        dfs(x + dx, y + dy);
      }
    };

    dfs(0, 0);

    while (queue.length) {
      const [x, y] = queue.dequeue();

      for (const [dx, dy] of dirs) {
        const nextX = x + dx;
        const nextY = y + dy;
        const isValid =
          nextX >= 0 &&
          nextX < rowN &&
          nextY >= 0 &&
          nextY < colN &&
          grid[nextX][nextY] === 1;

        if (isValid) {
          grid[nextX][nextY] = 0;
          cheeseCnt[time] += 1;
        }
      }
    }
  }

  console.log(time);
  console.log(cheeseCnt[time]);
};

solution(input);
