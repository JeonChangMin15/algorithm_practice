peopleN, partyN = list(map(int, input().split()))
truePeople = list(map(int, input().split()))[1:]

totalKnowPeople = truePeople[:]

peopleJoinParty = {}
partyPeople = []

for i in range(1, peopleN+1):
  peopleJoinParty[i] = []

for i in range(partyN):
  people = list(map(int, input().split()))[1:]
  partyPeople.append(people[:])

  for person in people:
    peopleJoinParty[person].append(i)

visited = [False] * (peopleN + 1)

def dfs(node):
  if visited[node]:
    return

  visited[node] = True

  if node not in totalKnowPeople:
    totalKnowPeople.append(node)

  for nextParty in peopleJoinParty[node]:
    for nextPerson in partyPeople[nextParty]:
      dfs(nextPerson)


for truePerson in truePeople:
  dfs(truePerson)

answer = 0

for singleParty in partyPeople:
  isValid = True
  for person in singleParty:
    if person in totalKnowPeople:
      isValid = False

  if isValid:
    answer += 1

print(answer)