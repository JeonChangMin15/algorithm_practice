n = int(input())
graph = {}
for i in range(1, n+1):
  graph[i] = []

while True:
  n1, n2 = list(map(int, input().split()))
  if n1 == -1 and n2 == -1:
    break
  graph[n1].append(n2)
  graph[n2].append(n1)

def bfs(startPeople):
  visited = [False] * (n + 1)
  personLen = [0] * (n + 1)

  visited[startPeople] = True
  queue = [[startPeople, 0]]

  while len(queue):
    personNum, relationLen = queue.pop(0)
    personLen[personNum] = relationLen

    for next in graph[personNum]:
      if visited[next]:
        continue
      queue.append([next, relationLen +1])
      visited[next] = True
  
  return max(personLen)

score = [0] * (n + 1)
score[0] = float('inf')

for i in range(1, n+1):
  value = bfs(i)
  score[i] = value

minScore = min(score)
peopleIndex = []

for i in range(1, n+1):
  if score[i] == minScore:
    peopleIndex.append(i)

peopleIndex.sort()
print(minScore, len(peopleIndex))
print(" ".join(list(map(str, peopleIndex))))