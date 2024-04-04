from collections import deque

n = int(input())
graph = {}

for i in range(1, n+1):
  graph[i] = []

for i in range(n-2):
  n1, n2 = list(map(int, input().split()))
  graph[n1].append(n2)
  graph[n2].append(n1)

visited = [False]*(n+1)
visited[1] = True

queue = deque()
queue.append(1)

while len(queue):
  node = queue.popleft()

  for nextNode in graph[node]:
    if not visited[nextNode]:
      queue.append(nextNode)
      visited[nextNode] = True

visitedLand = []
notVisitedLand = []

for i in range(1, n+1):
  if visited[i]:
    visitedLand.append(i)
  else:
    notVisitedLand.append(i)

print(visitedLand[0], notVisitedLand[0])