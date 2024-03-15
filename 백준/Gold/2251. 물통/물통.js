const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 부피가 1이상 200이하인 물통 세개가 있고 앞 2개의 물통은 비어있다.
// 세번째 물통은 가득 차있고 이때 물통이 비거나, 다른 물통이 가득찰때까지 부을 수 있다
// 이때 첫번째 물통이 비어있을때 세번째 물통에 담겨 있는 물의 양을 모두 구해라
// bfs로 물통에 담는 경우의 수를 모두 체크하고 join('')으로 경우의 수로 중복도 확인해야한다

const solution = (input) => {
  const [first, second, third] = input[0].split(" ").map((v) => Number(v));
  const comb = [];
  const answer = [];

  const queue = [[0, 0, third]];

  while (queue.length > 0) {
    const [res1, res2, res3] = queue.shift();

    if (res1 === 0) {
      if (!answer.includes(res3)) {
        answer.push(res3);
      }
    }

    if (res1 + res2 <= second) {
      const arr = [0, res1 + res2, res3];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }

    if (res1 + res2 >= second) {
      const arr = [res1 - (second - res2), second, res3];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }

    if (res1 + res3 <= third) {
      const arr = [0, res2, res1 + res3];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }

    if (res1 + res3 >= third) {
      const arr = [res1 - (third - res3), res2, third];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }

    if (res2 + res1 <= first) {
      const arr = [res1 + res2, 0, res3];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }

    if (res2 + res1 >= first) {
      const arr = [first, res2 - (first - res1), res3];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }

    if (res2 + res3 <= third) {
      const arr = [res1, 0, res3 + res2];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }

    if (res2 + res3 >= third) {
      const arr = [res1, res2 - (third - res3), third];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }

    if (res3 + res1 <= first) {
      const arr = [res1 + res3, res2, 0];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }

    if (res3 + res1 >= first) {
      const arr = [first, res2, res3 - (first - res1)];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }

    if (res3 + res2 <= second) {
      const arr = [res1, res2 + res3, 0];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }

    if (res3 + res2 >= second) {
      const arr = [res1, second, res3 - (second - res2)];
      const str = arr.join(",");
      if (!comb.includes(str)) {
        comb.push(str);
        queue.push(arr);
      }
    }
  }

  answer.sort((a, b) => a - b);
  const nums = answer.join(" ");
  console.log(nums);
};

solution(input);
