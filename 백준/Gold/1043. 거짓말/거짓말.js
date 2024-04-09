const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r/, ""));

// 첫번째줄에 사람수, 파티수가 주어진다
// 두번째줄에는 진실을 아는 사람의 수와 번호들이 주어진다
// 셋째줄부터 파티의 참가한 사람의 숫자와 사람들의 번호가 주어진다
// 사람들의 번호는 1부터 사람수 만큼 있다
// 결국 진실된 사람과 같이 파티의 구성원들도 전염이 된다
// 구성원마다 들어가있는 파티룸을 저장하고, 파티룸에 있는 구성원들을 저장한다
// 진실된 사람에 들어가있는 파티룸의 구성원들에 들어가서 해당 구성원들에 체킹을하면된다
// 그래서 파티룸을 전부 다 체킹하면 될거 같다
const solution = (input) => {
  const [peopleN, partyN] = input[0].split(" ").map((v) => Number(v));
  const truePeople = input[1]
    .split(" ")
    .map((v) => Number(v))
    .slice(1);

  const totalKnowPeople = [...truePeople];

  const peopleJoinParty = {};
  const partyPeople = [];

  for (let i = 1; i <= peopleN; i++) {
    peopleJoinParty[i] = [];
  }

  for (let i = 2; i < input.length; i++) {
    const people = input[i]
      .split(" ")
      .map((v) => Number(v))
      .slice(1);

    partyPeople.push([...people]);

    for (let person of people) {
      peopleJoinParty[person].push(i - 2);
    }
  }

  const visited = Array(peopleN + 1).fill(false);

  const dfs = (node) => {
    if (visited[node]) return;
    visited[node] = true;

    if (!totalKnowPeople.includes(node)) {
      totalKnowPeople.push(node);
    }

    for (let nextParty of peopleJoinParty[node]) {
      for (let nextPerson of partyPeople[nextParty]) {
        dfs(nextPerson);
      }
    }
  };

  for (let truePerson of truePeople) {
    dfs(truePerson);
  }

  let answer = 0;

  for (let singleParty of partyPeople) {
    let isValid = true;
    for (let person of singleParty) {
      if (totalKnowPeople.includes(person)) isValid = false;
    }

    if (isValid) answer += 1;
  }

  console.log(answer);
};

solution(input);
