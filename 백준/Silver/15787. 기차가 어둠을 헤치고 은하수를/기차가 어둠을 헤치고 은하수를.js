

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 명령어의 첫번째 숫자가 1 -> 두번째 숫자의 기차의 세번째 숫자 좌석에 사람을 태운다 만약 타있으면 그대로
// 첫번째 숫자가 2 -> 두번째 숫자의 기차의 세번째 숫자 좌석에 사람을 내린다. 만약 없으면 그대로
// 첫번째 숫자가 3 -> 두번째 숫자의 기차에 타 있는 승객들이 모두 한칸씩 뒤로, 끝에 사람이 있으면 그 인간은 하차
// 첫번째 숫자가 4 -> 두번째 숫자의 기차에 타 있는 승객들이 모두 한칸식 앞으로, 맨앞에 사람이 있으면 하차

// 첫번째 n,m은 각각 기차의 수와 명령의 수
// 각 기차에는 20개의 좌석이 존재
const solution = (input) => {
  const [n, m] = input[0].split(" ").map((v) => Number(v));
  const trainSeats = Array(n)
    .fill(0)
    .map((v) => Array(20).fill(0));

  const orders = [];

  for (let i = 1; i < input.length; i++) {
    const order = input[i].split(" ").map((v) => Number(v));
    orders.push(order);
  }

  for (let order of orders) {
    const firstOrder = order[0];

    if (firstOrder === 1) {
      const [_, train, seat] = order;
      trainSeats[train - 1][seat - 1] = 1;
    }

    if (firstOrder === 2) {
      const [_, train, seat] = order;
      trainSeats[train - 1][seat - 1] = 0;
    }

    if (firstOrder === 3) {
      const [_, train] = order;
      trainSeats[train - 1].pop();
      trainSeats[train - 1].unshift(0);
    }

    if (firstOrder === 4) {
      const [_, train] = order;
      trainSeats[train - 1].shift();
      trainSeats[train - 1].push(0);
    }
  }

  const seats = [];
  let cnt = 0;

  for (const trainSeat of trainSeats) {
    let seat = trainSeat.join("");

    if (!seats.includes(seat)) {
      seats.push(seat);
      cnt++;
    }
  }

  console.log(cnt);
};

solution(input);
