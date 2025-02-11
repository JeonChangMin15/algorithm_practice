from collections import deque

cityN, lineN, targetDist, startCity = list(map(int,input().split()))
graph = [[] for _ in range(cityN + 1)]

for i in range(lineN):
  n1, n2 = map(int,input().split())
  graph[n1].append(n2)

dist = [float('inf')]*(cityN+1)
dist[startCity] = 0
queue = deque()
queue.append([startCity, 0])

while len(queue):
  curCity, curDist = queue.popleft()

  for nextCity in graph[curCity]:
    if curDist + 1 < dist[nextCity]:
      dist[nextCity] = curDist + 1
      queue.append([nextCity, curDist + 1])

answer = []

for i in range(1, cityN+1):
  if dist[i] == targetDist:
    answer.append(i)

print("\n".join(list(map(str, answer))) if len(answer) else -1)