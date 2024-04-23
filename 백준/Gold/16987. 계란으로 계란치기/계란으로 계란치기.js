const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 계란의 수, 그 다음줄부터는 계란의 내구도와 무게에 대한 정보
// 가장 왼쪽의 계란을 먼저들어서 자기 위치를 계란을 제외한 다른계란중 하나를 때린다
// 단 손에 든 내구도 0이하, 깨진 계란이 없으면 스킵
// 그리고나서 다시 가장 최근에 든 계란의 한칸 오른쪽 계란을 들고 다시 계란을 때린다
// 그리고나서 마지막 계란을 들었다면 종료한다. 최대 몇개의 계란을 깰 수 있는지 구한다
// 드는 계란은 항상 그다음꺼고 때리는 계란이 그중 랜덤이다.
// dfs로 때리는 경우를 for문으로 돌려서 모든 경우의 수를 탐색하고 들었던 egg가 === n
// 이면 다 탐색을 해서 카운팅을 하면될거같다
const solution = (input) => {
  const eggN = Number(input[0]);
  const eggCondition = [];

  for (let i = 1; i < input.length; i++) {
    eggCondition.push(input[i].split(" ").map((v) => Number(v)));
  }

  let answer = 0;

  const dfs = (heatEgg) => {
    if (heatEgg <= eggN) {
      let brokenEgg = 0;
      eggCondition.forEach(([hp, w]) => {
        if (hp <= 0) brokenEgg += 1;
      });

      answer = Math.max(answer, brokenEgg);
    }

    if (heatEgg === eggN) return;

    let brokenEgg = 0;
    eggCondition.forEach(([hp, w]) => {
      if (hp <= 0) brokenEgg += 1;
    });

    answer = Math.max(answer, brokenEgg);

    for (let i = 0; i < eggN; i++) {
      const [curEggHp, curEggWeight] = eggCondition[heatEgg];
      const [nextEggHp, nextEggWeight] = eggCondition[i];

      if (curEggHp <= 0) {
        dfs(heatEgg + 1);
        continue;
      }

      const isAllNextEggBroken = eggCondition
        .filter((v, i) => i !== heatEgg)
        .map((v) => v[0])
        .every((hp) => hp <= 0);

      if (i === heatEgg || isAllNextEggBroken || nextEggHp <= 0) continue;

      eggCondition[heatEgg][0] -= nextEggWeight;
      eggCondition[i][0] -= curEggWeight;
      dfs(heatEgg + 1);
      eggCondition[heatEgg][0] += nextEggWeight;
      eggCondition[i][0] += curEggWeight;
    }
  };

  dfs(0);

  console.log(answer);
};

solution(input);
