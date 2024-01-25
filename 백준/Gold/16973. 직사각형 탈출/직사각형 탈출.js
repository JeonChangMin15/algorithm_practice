const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

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
  const [rowN, colN] = input[0].split(" ").map((v) => Number(v));
  const grid = [];

  for (let i = 1; i < input.length - 1; i++) {
    grid.push(input[i].split(" ").map((v) => Number(v)));
  }
  const [height, width, Sr, Sc, Fr, Fc] = input[input.length - 1]
    .split(" ")
    .map((v) => Number(v));

  const [startX, startY] = [Sr - 1, Sc - 1];
  const [targetX, targetY] = [Fr - 1, Fc - 1];

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const visited = Array(rowN)
    .fill(0)
    .map((v) => Array(colN).fill(false));

  // const queue = [[startX, startY, 0]];
  const queue = new Queue();
  queue.enqueue([startX, startY, 0]);
  visited[startX][startY] = true;

  while (queue.length) {
    const [x, y, temp] = queue.dequeue();

    if (x === targetX && y === targetY) {
      console.log(temp);
      return;
    }

    for (let [dx, dy] of dirs) {
      const nextX = x + dx;
      const nextY = y + dy;

      const isValid =
        nextX >= 0 &&
        nextX < rowN &&
        nextX + height - 1 < rowN &&
        nextY >= 0 &&
        nextY < colN &&
        nextY + width - 1 < colN &&
        !visited[nextX][nextY];

      if (isValid) {
        visited[nextX][nextY] = true;

        let isNoWall = true;
        for (let i = nextX; i < nextX + height; i++) {
          for (let j = nextY; j < nextY + width; j++) {
            if (grid[i][j] === 1) {
              isNoWall = false;
            }
          }
        }

        if (isNoWall) {
          queue.enqueue([nextX, nextY, temp + 1]);
        }
      }
    }
  }

  console.log(-1);
};

solution(input);
