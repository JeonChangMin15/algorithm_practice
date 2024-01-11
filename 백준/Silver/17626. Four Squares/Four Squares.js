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

// 모든 자연수는 4개 이하의 제곱수의 합으로 표현이 가능하다
// 제곱수들의 최소 개수를 출력한다.
// 먼저 해당 숫자의 제곱근보다 작거나 같은 숫자를 찾는다
// 백트래킹으로는 시간초과가 나온다

const solution = (input) => {
  const n = Number(input[0]);
  const sqrt = Math.floor(Math.sqrt(n));

  const nums = [];
  for (let i = 1; i <= sqrt; i++) {
    nums.push(i);
  }

  for (let i = 0; i < nums.length; i++) {
    const sum = nums[i] ** 2;
    if (sum === n) {
      console.log(1);
      return;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const sum = nums[i] ** 2 + nums[j] ** 2;
      if (sum === n) {
        console.log(2);
        return;
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        const sum = nums[i] ** 2 + nums[j] ** 2 + nums[k] ** 2;
        if (sum === n) {
          console.log(3);
          return;
        }
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        for (let l = 0; l < nums.length; l++) {
          const sum = nums[i] ** 2 + nums[j] ** 2 + nums[k] ** 2 + nums[l] ** 2;
          if (sum === n) {
            console.log(4);
            return;
          }
        }
      }
    }
  }
};

solution(input);
